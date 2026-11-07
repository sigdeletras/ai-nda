# SAST y SonarQube en la charla

**Decisión editorial:** incorporar SonarQube como ejemplo de control técnico independiente del código generado por IA. No dedicarle un bloque propio ni convertir la charla en una comparativa de herramientas.

## Dónde encaja

- **Bloque 5, «Controles que sí ayudan»**: dentro de «Verifica y responde».
- **Slide 9 prevista, «Verifica y responde»**: añadir el flujo agente → análisis y pruebas → controles de CI → revisión antes de integrar.
- **Tiempo:** reservar 2–3 minutos dentro de los 10 minutos ya asignados al bloque; no ampliar la duración total de 40 minutos.

## Mensaje de la diapositiva

### El agente programa. El pipeline verifica.

1. El agente propone cambios.
2. Las herramientas analizan el código y ejecutan pruebas.
3. La CI registra los resultados y puede bloquear la integración si falla un control configurado.
4. Una persona revisa los cambios y los hallazgos relevantes.

**Frase clave:** «No basta con pedirle al agente que programe de forma segura: hay que comprobar el resultado con controles independientes».

## Herramientas: funciones complementarias

- **SonarQube:** análisis estático de código (SAST), con detección de defectos y determinadas vulnerabilidades según la edición, configuración y reglas disponibles.
- **Bandit:** análisis de patrones de riesgo en código Python.
- **Gitleaks:** detección de secretos expuestos en archivos y repositorios Git.
- **pytest y Ruff:** pruebas y comprobaciones de calidad.
- **GitHub Actions:** automatiza la ejecución de controles; el pipeline puede aplicar condiciones de aceptación.

No es necesario instalar todas las herramientas en todos los proyectos. Explicar qué riesgo cubre cada control y evitar presentarlos como equivalentes.

## Conexión con NDA y secretos de cliente

Distinguir dos riesgos:

- **Exposición de información:** el agente accede a código, archivos o credenciales y los transmite a un servicio no autorizado. Se reduce mediante clasificación de datos, permisos mínimos, exclusión efectiva de secretos y revisión de las condiciones del proveedor.
- **Vulnerabilidades en el código generado:** se mitigan parcialmente con SAST, análisis de secretos, pruebas, revisión y controles de integración.

SonarQube no limita por sí mismo lo que el agente puede leer ni evita que se envíe información al proveedor. Tampoco garantiza la ausencia de vulnerabilidades. La confidencialidad contractual y la seguridad del código requieren controles distintos y complementarios.

Consultar también [CI/CD y seguridad de los agentes](ci-cd-ia-agentica.md) para el tratamiento de permisos de workflows, secretos, pull requests y controles de pipeline.

## Demostración opcional

Si se decide mostrarlo, usar el repositorio educativo de FastAPI y dedicar solo unos minutos:

1. Mostrar el resultado de un análisis SAST sobre un ejemplo preparado y no confidencial.
2. Revisar un hallazgo real de la herramienta, explicando su alcance y limitaciones.
3. Mostrar cómo la CI informa del resultado y cómo podría impedir la integración si el control está configurado como obligatorio.

No desplegar ni configurar SonarQube en directo. No afirmar que está integrado en el repositorio hasta comprobarlo. Si no se dispone de un hallazgo reproducible, mostrar la diapositiva y los resultados previamente verificados.

## Precauciones al presentarlo

- Verificar la edición y versión de SonarQube y las reglas disponibles antes de afirmar qué detecta.
- No confundir SAST con análisis de dependencias, escaneo de contenedores o detección de secretos.
- Un resultado limpio no equivale a código seguro: el análisis tiene cobertura y falsos positivos/negativos.
- Las instrucciones en `AGENTS.md` o `CLAUDE.md` orientan al agente; no sustituyen los controles ejecutables de CI ni la revisión humana.

## Referencias oficiales

- [SonarQube: análisis de seguridad](https://docs.sonarsource.com/sonarqube-server/latest/)
- [OWASP: Source Code Analysis Tools](https://owasp.org/www-community/Source_Code_Analysis_Tools)
- [GitHub Actions: documentación](https://docs.github.com/actions)

Revisar la documentación vigente y las condiciones de la edición seleccionada antes de cerrar las diapositivas.
