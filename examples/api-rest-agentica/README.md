# API REST con FastAPI e IA agéntica

Proyecto de demostración para la charla «¿Le puedo dar las claves? IA agéntica, código y secretos de cliente» (DevFest Córdoba 2026).

## Qué incluye

- API REST con FastAPI y documentación OpenAPI/Swagger.
- Registro y autenticación mediante JWT Bearer.
- CRUD de proyectos con autorización por propietario.
- SQLAlchemy y PostgreSQL en Docker Compose.
- Pruebas con pytest, TestClient y base SQLite temporal.
- Ruff, Bandit y auditoría de dependencias con pip-audit.
- CI con Gitleaks y escaneo de imagen con Trivy.
- Actualizaciones propuestas por Dependabot para Actions, paquetes Python e imágenes Docker.
- Reglas de trabajo para Claude Code en CLAUDE.md y .claude/settings.json.
- GitHub Actions para calidad y construcción de imagen.
- Guía de despliegue controlado en una VPS.

## Inicio rápido

Requiere Python 3.12+ y Docker.

1. Copia .env.example a .env y genera un secreto aleatorio para JWT_SECRET_KEY.
2. Arranca la base de datos: docker compose up -d db
3. Crea el entorno e instala dependencias: pip install -e ".[dev]"
4. Arranca la API: uvicorn app.main:app --reload --env-file .env
5. Abre http://127.0.0.1:8000/docs

También puedes ejecutar toda la aplicación con docker compose up --build.

## Despliegue en VPS

Hay un workflow manual en `.github/workflows/deploy-api-rest-agentica.yml`. Antes de habilitarlo, sigue la [guía de despliegue](docs/DESPLIEGUE-VPS.md), configura el entorno protegido `production`, los secretos de SSH y el acceso de lectura a GHCR en la VPS. No lo ejecutes contra producción sin probarlo primero en una VPS desechable.

## Comprobaciones

    ruff check .
    ruff format --check .
    pytest
    bandit -r app

## Flujo de trabajo con Claude Code

1. Leer CLAUDE.md y revisar el plan antes de cambios amplios.
2. Trabajar solo con datos y credenciales ficticios.
3. Pedir cambios pequeños y verificables.
4. Revisar el diff y ejecutar las comprobaciones.
5. No dar al agente acceso a secretos, socket Docker, claves SSH ni producción.
6. No desplegar sin revisión humana.

## Límites

Es una demo educativa, no una plantilla lista para producción. Antes de usarla en un servicio real se necesitan, entre otras medidas, revisión de seguridad, gestión de migraciones, política de rotación de claves, rate limiting, TLS, copias de seguridad, observabilidad y configuración de despliegue específica del proveedor.

No añadir aquí secretos, datos reales ni código de clientes.
