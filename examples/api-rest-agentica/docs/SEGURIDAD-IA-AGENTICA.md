# Seguridad del desarrollo con IA agéntica

## Modelo de amenazas de la demo

| Activo | Riesgo | Control propuesto | Evidencia |
|---|---|---|---|
| Código fuente | Envío de código no autorizado al proveedor | Clasificar repositorio y revisar condiciones del servicio | Lista de comprobación previa |
| .env y JWT secret | Lectura o exposición accidental | No versionar, excluir del contexto y no entregar al agente | Prueba guiada con archivo señuelo; no demuestra aislamiento completo |
| Clave SSH | Acceso a VPS | No cargar claves personales en el entorno del agente | Inspección de montajes y permisos |
| Base de datos | Acceso a datos reales | Datos sintéticos y base local aislada | Tests con base temporal |
| GitHub Actions | Uso indebido de permisos o secretos | Mínimo privilegio y separación CI/despliegue | Revisión de permissions y environments |
| API | Acceso a recursos de otro usuario | Consultas acotadas por propietario | Test de aislamiento entre usuarios |
| Terminal del agente | Prompt injection en issues, documentación o webs que intenta inducir acciones | Tratar contenido externo como no confiable, permisos mínimos, revisión de comandos y red restringida | Ejercicio reproducible con fixture ficticio; observar y documentar la respuesta |

## Instrucciones frente a controles efectivos

CLAUDE.md define convenciones y límites esperados. No es un mecanismo de aislamiento. Los permisos del agente pueden restringir operaciones conocidas, pero no deben considerarse sustituto de los permisos del sistema operativo, un contenedor de desarrollo aislado o la ausencia de secretos accesibles.

## Configuración de Claude Code

El archivo .claude/settings.json incluye denegaciones explícitas de lectura para algunos patrones sensibles. Validar la sintaxis y el comportamiento con la versión instalada de Claude Code. Las reglas de lectura no garantizan que un secreto no pueda obtenerse indirectamente mediante scripts, herramientas, logs o copias.

Medidas adicionales:
- Ejecutar el agente como usuario sin privilegios.
- Usar un checkout y datos de prueba dedicados.
- No montar el socket Docker ni el directorio personal.
- No cargar claves SSH ni credenciales de producción.
- Limitar la conectividad saliente cuando sea viable.
- Revisar cambios y comandos antes de ejecutarlos.
- Tratar issues, páginas web, logs, datos y archivos externos como contenido no confiable; no permitir que sus instrucciones cambien las reglas del proyecto.

## Datos y proveedor

Antes de usar código sujeto a NDA, revisar las condiciones aplicables al producto, plan y configuración: uso para entrenamiento, retención, acceso de personal, subprocesadores, ubicación y compromisos contractuales. Pago, no entrenamiento, Zero Data Retention y procesamiento local son conceptos distintos.

## API y seguridad de aplicación

La demo implementa JWT firmado, expiración, hash de contraseñas y autorización por propietario. No incluye limitación de intentos, revocación de tokens, MFA, rotación automática de claves ni migraciones de base de datos. No es una implementación lista para producción.

## Fuentes de referencia

- OWASP AI Agent Security Cheat Sheet: https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html
- Claude Code, permisos: https://docs.anthropic.com/en/docs/claude-code/iam
- GitHub Actions, seguridad: https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions
- FastAPI, OAuth2 con JWT: https://fastapi.tiangolo.com/tutorial/security/oauth2-jwt/
- Gitleaks Action: https://github.com/gitleaks/gitleaks-action
- pip-audit: https://pypi.org/project/pip-audit/
- Trivy Action: https://github.com/aquasecurity/trivy-action

Consultar las versiones vigentes antes de la charla.
