# CI/CD y seguridad de los agentes de programación

## Encaje en la charla

Este contenido amplía el bloque 5, **«Controles que sí ayudan»**. No es una introducción general a CI/CD ni un bloque independiente: muestra qué ocurre con los cambios del agente cuando entran en los procesos automatizados del equipo.

**Mensaje central:** no basta con limitar lo que puede hacer el agente; también hay que controlar qué ocurre con el código que produce y qué permisos tienen los procesos que lo ejecutan.

Un agente puede no tener acceso directo a producción y, aun así, proponer cambios que lleguen a un pipeline con permisos de despliegue. El pipeline y sus credenciales forman parte de la superficie de riesgo.

## Riesgos que conviene explicar

### 1. El agente puede desencadenar acciones automatizadas

Según los permisos y las integraciones disponibles, un agente puede crear ramas, commits y pull requests, modificar workflows o solicitar ejecuciones de CI. Hay que revisar tanto sus permisos directos como las acciones que pueden activarse a partir de sus cambios.

No asumir que una revisión de código detectará por sí sola una modificación maliciosa o accidental del pipeline.

### 2. Secretos y permisos del pipeline

Los workflows pueden utilizar tokens, claves de publicación, credenciales de despliegue y accesos a servicios externos. Aplicar:

- Permisos mínimos en GITHUB_TOKEN y en las credenciales de cada job.
- Secretos limitados al repositorio, entorno y tarea que los necesitan.
- Separación entre CI de pruebas y despliegues; no entregar credenciales de producción a jobs que solo validan código.
- Aprobaciones y protección de entornos para despliegues sensibles.
- Credenciales temporales y federación de identidad, por ejemplo OIDC, cuando el proveedor y la plataforma lo permitan.
- Revisión de los workflows modificados como parte del pull request.

No basta con guardar un secreto en el almacén de la plataforma: también importa qué workflow puede acceder a él y qué código ejecuta ese workflow.

### 3. Pull requests y código no confiable

Los workflows que ejecutan código de pull requests deben tratar ese código como no confiable, especialmente cuando procede de forks o colaboradores externos.

- Evitar conceder secretos o permisos de escritura a jobs que ejecutan código no confiable.
- Revisar cuidadosamente los eventos y permisos del workflow.
- No combinar de forma insegura pull_request_target con la descarga y ejecución del código propuesto por el pull request.
- Separar la validación de código de la publicación o despliegue.
- No considerar una aprobación humana como sustituto de permisos técnicos correctamente limitados.

### 4. Validación independiente del código generado

El pipeline puede ejecutar controles antes de integrar los cambios:

| Control | Qué comprueba |
|---|---|
| Tests | Comportamiento esperado y regresiones conocidas. |
| SAST (SonarQube, Bandit) | Patrones de defectos y vulnerabilidades en el código. |
| Secret scanning (Gitleaks) | Credenciales o secretos expuestos en el repositorio. |
| Análisis de dependencias (pip-audit, Dependabot) | Vulnerabilidades conocidas en dependencias. |
| Escaneo de imágenes (Trivy) | Vulnerabilidades y configuración de imágenes de contenedor. |

Son controles complementarios, no equivalentes. Un análisis limpio no garantiza que el código sea seguro ni evita que el agente haya transmitido información al proveedor. La CI puede bloquear la integración si se configuran comprobaciones obligatorias y reglas de protección de rama.

## Flujo para la diapositiva

Agente propone cambios → Pull request y revisión → Pipeline de validación (tests, SAST, secretos, dependencias e imagen) → Comprobaciones obligatorias → Aprobación y despliegue controlado.

El despliegue debe estar separado de la validación y utilizar permisos y credenciales propios. No todos los proyectos necesitan todas las herramientas: seleccionar controles proporcionados al riesgo y al stack.

## Aplicación a la demo del repositorio

La demo FastAPI ya dispone de un workflow de GitHub Actions con:

- Gitleaks para detección de secretos.
- Ruff para lint y formato.
- pip-audit para auditoría de dependencias.
- pytest para pruebas.
- Bandit para análisis de patrones de riesgo en Python.
- Construcción de imagen Docker y análisis con Trivy.

Este workflow sirve para ilustrar que la validación automatizada puede reunir controles distintos. **No afirmar que SonarQube está integrado**: su incorporación es una posibilidad para explicar SAST, no una característica del workflow actual. Tampoco presentar la CI educativa como un pipeline de producción ni como garantía de seguridad.

## Slides y tiempo

- **Slide:** «El agente no termina en el IDE» — el cambio propuesto puede activar procesos con permisos propios.
- **Slide:** «El pipeline como última barrera» — tests, SAST, secretos, dependencias, permisos mínimos y despliegue controlado.
- **Tiempo:** 3–4 minutos dentro del bloque 5, sin ampliar los 40 minutos de charla. Si falta tiempo, mantener una sola slide con el flujo y el mensaje clave.

## Fuentes oficiales

- [GitHub Actions: seguridad](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [GitHub Actions: uso seguro de secretos](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)
- [GitHub Actions: control de permisos de GITHUB_TOKEN](https://docs.github.com/en/actions/security-guides/automatic-token-authentication)
- [GitHub Actions: eventos que desencadenan workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows)
- [GitHub Actions: despliegues y entornos](https://docs.github.com/en/actions/deployment/targeting-different-environments)
- [GitHub Actions: OpenID Connect](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect)

Comprobar la documentación vigente antes de cerrar las diapositivas. Las capacidades y restricciones dependen de la plataforma, el evento, la configuración y el plan utilizado.
