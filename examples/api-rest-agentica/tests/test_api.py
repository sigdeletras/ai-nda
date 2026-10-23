import pytest
from fastapi.testclient import TestClient

from app.main import create_app


@pytest.fixture
def client(tmp_path):
    db_path = tmp_path / "test.db"
    application = create_app(
        database_url="sqlite:///" + str(db_path),
        secret_key="test-secret-key-only-for-automated-tests-123456",
    )
    with TestClient(application) as test_client:
        yield test_client
    application.state.engine.dispose()


def register_and_login(client: TestClient, username: str) -> str:
    response = client.post(
        "/auth/register",
        json={"username": username, "password": "correct-horse-battery"},
    )
    assert response.status_code == 201
    response = client.post(
        "/auth/token",
        data={"username": username, "password": "correct-horse-battery"},
    )
    assert response.status_code == 200
    return response.json()["access_token"]


def auth(token: str) -> dict[str, str]:
    return {"Authorization": "Bearer " + token}


def test_health_and_openapi(client: TestClient):
    assert client.get("/health").json() == {"status": "ok"}
    assert client.get("/openapi.json").status_code == 200


def test_registration_rejects_duplicate_username(client: TestClient):
    payload = {"username": "patricio", "password": "correct-horse-battery"}
    assert client.post("/auth/register", json=payload).status_code == 201
    assert client.post("/auth/register", json=payload).status_code == 409


def test_projects_require_authentication(client: TestClient):
    assert client.get("/projects").status_code == 401
    assert client.post("/projects", json={"name": "Demo"}).status_code == 401


def test_crud_and_owner_isolation(client: TestClient):
    token_a = register_and_login(client, "usuario_a")
    token_b = register_and_login(client, "usuario_b")

    created = client.post(
        "/projects",
        json={"name": "Proyecto A", "description": "Dato ficticio"},
        headers=auth(token_a),
    )
    assert created.status_code == 201
    project_id = created.json()["id"]

    assert len(client.get("/projects", headers=auth(token_a)).json()) == 1
    assert client.get("/projects", headers=auth(token_b)).json() == []
    assert client.get("/projects/" + str(project_id), headers=auth(token_b)).status_code == 404
    assert client.patch(
        "/projects/" + str(project_id),
        json={"name": "Acceso indebido"},
        headers=auth(token_b),
    ).status_code == 404
    assert client.delete(
        "/projects/" + str(project_id), headers=auth(token_b)
    ).status_code == 404

    updated = client.patch(
        "/projects/" + str(project_id),
        json={"name": "Proyecto actualizado"},
        headers=auth(token_a),
    )
    assert updated.status_code == 200
    assert updated.json()["name"] == "Proyecto actualizado"
    assert client.delete(
        "/projects/" + str(project_id), headers=auth(token_a)
    ).status_code == 204


def test_invalid_token_is_rejected(client: TestClient):
    response = client.get("/projects", headers=auth("not-a-valid-token"))
    assert response.status_code == 401


def test_password_is_not_returned(client: TestClient):
    token = register_and_login(client, "usuario_c")
    response = client.get("/projects", headers=auth(token))
    assert response.status_code == 200
    assert "password_hash" not in response.text
