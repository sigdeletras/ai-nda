import os

# Valores exclusivamente para tests; nunca reutilizar en entornos reales.
os.environ.setdefault("JWT_SECRET_KEY", "test-only-secret-for-automated-tests-123456")
os.environ.setdefault("DATABASE_URL", "sqlite://")
