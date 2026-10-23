import os
from collections.abc import Generator

import jwt
from fastapi import Depends, FastAPI, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy import select
from sqlalchemy.orm import Session

from app.database import Base, make_engine, make_session_factory
from app.models import Project, User
from app.schemas import ProjectCreate, ProjectRead, ProjectUpdate, UserCreate, UserRead
from app.security import create_access_token, decode_access_token, hash_password, verify_password

DEFAULT_TEST_SECRET = "test-only-secret-change-this-before-any-real-use"


def create_app(database_url: str | None = None, secret_key: str | None = None) -> FastAPI:
    database_url = database_url or os.getenv(
        "DATABASE_URL", "sqlite:///./api_demo.db"
    )
    secret_key = secret_key or os.getenv("JWT_SECRET_KEY")
    if not secret_key:
        raise RuntimeError("JWT_SECRET_KEY es obligatoria; configura la variable de entorno.")

    expires_minutes = int(os.getenv("JWT_EXPIRE_MINUTES", "30"))
    engine = make_engine(database_url)
    Base.metadata.create_all(bind=engine)
    session_factory = make_session_factory(engine)

    app = FastAPI(
        title="API REST demo con IA agéntica",
        description="API educativa con JWT y CRUD de proyectos con autorización por propietario.",
        version="0.1.0",
    )
    app.state.engine = engine
    oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/token")

    def get_db() -> Generator[Session, None, None]:
        db = session_factory()
        try:
            yield db
        finally:
            db.close()

    def current_user(
        token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)
    ) -> User:
        unauthorized = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales no válidas",
            headers={"WWW-Authenticate": "Bearer"},
        )
        try:
            payload = decode_access_token(token, secret_key)
            username = payload.get("sub")
            if not isinstance(username, str) or not username:
                raise unauthorized
        except (jwt.InvalidTokenError, ValueError):
            raise unauthorized from None
        user = db.scalar(select(User).where(User.username == username))
        if user is None:
            raise unauthorized
        return user

    @app.get("/health", tags=["health"])
    def health() -> dict[str, str]:
        return {"status": "ok"}

    @app.post("/auth/register", response_model=UserRead, status_code=201, tags=["auth"])
    def register(payload: UserCreate, db: Session = Depends(get_db)) -> User:
        if db.scalar(select(User).where(User.username == payload.username)):
            raise HTTPException(status_code=409, detail="El nombre de usuario ya existe")
        user = User(username=payload.username, password_hash=hash_password(payload.password))
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    @app.post("/auth/token", tags=["auth"])
    def login(
        form: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)
    ) -> dict[str, str]:
        user = db.scalar(select(User).where(User.username == form.username))
        if user is None or not verify_password(form.password, user.password_hash):
            raise HTTPException(
                status_code=401,
                detail="Usuario o contraseña incorrectos",
                headers={"WWW-Authenticate": "Bearer"},
            )
        return {
            "access_token": create_access_token(user.username, secret_key, expires_minutes),
            "token_type": "bearer",
        }

    @app.get("/projects", response_model=list[ProjectRead], tags=["projects"])
    def list_projects(
        db: Session = Depends(get_db), user: User = Depends(current_user)
    ) -> list[Project]:
        return list(db.scalars(select(Project).where(Project.owner_id == user.id)).all())

    @app.post("/projects", response_model=ProjectRead, status_code=201, tags=["projects"])
    def create_project(
        payload: ProjectCreate,
        db: Session = Depends(get_db),
        user: User = Depends(current_user),
    ) -> Project:
        project = Project(**payload.model_dump(), owner_id=user.id)
        db.add(project)
        db.commit()
        db.refresh(project)
        return project

    @app.get("/projects/{project_id}", response_model=ProjectRead, tags=["projects"])
    def get_project(
        project_id: int,
        db: Session = Depends(get_db),
        user: User = Depends(current_user),
    ) -> Project:
        project = db.scalar(
            select(Project).where(Project.id == project_id, Project.owner_id == user.id)
        )
        if project is None:
            raise HTTPException(status_code=404, detail="Proyecto no encontrado")
        return project

    @app.patch("/projects/{project_id}", response_model=ProjectRead, tags=["projects"])
    def update_project(
        project_id: int,
        payload: ProjectUpdate,
        db: Session = Depends(get_db),
        user: User = Depends(current_user),
    ) -> Project:
        project = db.scalar(
            select(Project).where(Project.id == project_id, Project.owner_id == user.id)
        )
        if project is None:
            raise HTTPException(status_code=404, detail="Proyecto no encontrado")
        for field, value in payload.model_dump(exclude_unset=True).items():
            setattr(project, field, value)
        db.commit()
        db.refresh(project)
        return project

    @app.delete("/projects/{project_id}", status_code=204, tags=["projects"])
    def delete_project(
        project_id: int, db: Session = Depends(get_db), user: User = Depends(current_user)
    ) -> None:
        project = db.scalar(
            select(Project).where(Project.id == project_id, Project.owner_id == user.id)
        )
        if project is None:
            raise HTTPException(status_code=404, detail="Proyecto no encontrado")
        db.delete(project)
        db.commit()

    return app


app = create_app()
