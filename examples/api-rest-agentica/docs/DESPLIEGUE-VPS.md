# Despliegue en VPS

## Flujo

El workflow .github/workflows/deploy-api-rest-agentica.yml se ejecuta manualmente. Construye una imagen, la publica en GHCR y conecta por SSH para actualizar los contenedores. El entorno de GitHub llamado production debe configurarse con revisores y restricciones de rama antes de usarlo.

## Preparación de la VPS

1. Crear una VPS actualizada y un usuario de despliegue dedicado.
2. Instalar Docker y el plugin Compose desde fuentes oficiales.
3. Crear una carpeta de despliegue y copiar compose.production.yml a esa carpeta.
4. Crear allí un archivo .env protegido con permisos 600. Debe incluir POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, DATABASE_URL y JWT_SECRET_KEY. No guardar ese archivo en Git.
5. Configurar un token de lectura de GHCR en la VPS para que Docker pueda descargar imágenes privadas.
6. Configurar firewall, SSH por clave, TLS mediante proxy inverso y copias de seguridad.
7. Restringir el usuario y la clave SSH de despliegue. Docker concede privilegios elevados; un usuario con acceso al socket Docker debe tratarse como privilegiado.
8. Configurar en el entorno GitHub production los secretos VPS_HOST, VPS_USER, VPS_SSH_PRIVATE_KEY, VPS_KNOWN_HOSTS y VPS_DEPLOY_PATH.
9. Obtener VPS_KNOWN_HOSTS por un canal fiable y verificar la huella del servidor. No confiar ciegamente en una salida de ssh-keyscan.
10. Proteger la rama y limitar quién puede ejecutar el workflow.

DATABASE_URL debe apuntar al servicio db del Compose y contener credenciales correctamente codificadas para URL. JWT_SECRET_KEY debe ser aleatoria, larga y exclusiva de producción.

## Qué hace el workflow

- Construye la imagen desde el código del commit seleccionado.
- Publica la imagen con la etiqueta del SHA del commit.
- Despliega esa etiqueta concreta en la VPS.
- No envía las variables de la aplicación desde GitHub: los secretos de runtime permanecen en la VPS.

## Límites y revisión

Este workflow es una base de demostración que debe probarse en una VPS desechable antes de usarlo. Revisa el flujo remoto, los permisos de SSH, la autenticación de GHCR, las restricciones del entorno y la compatibilidad con la infraestructura. No ejecutar en producción sin revisión técnica.

La API escucha en localhost:8000 en la VPS; exponerla públicamente solo mediante un proxy inverso con TLS y controles adecuados. Configurar backup, restauración y rollback antes de depender del servicio.
