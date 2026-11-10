# SDD y factoría de software agéntica

## Por qué incluirlo en la charla

La seguridad cambia de escala cuando pasamos de pedir ayuda puntual a delegar un proceso de desarrollo. Un agente puede recibir una tarea, interpretarla, proponer un plan, modificar código, ejecutar pruebas y preparar una entrega. En una factoría de software, ese ciclo se organiza y repite mediante flujos, herramientas y agentes especializados.

La pregunta deja de ser solo **«¿a qué puede acceder el agente?»** y pasa a ser también **«¿qué decisiones puede tomar y hasta dónde puede avanzar sin intervención humana?»**.

Este bloque conecta las capacidades de los agentes con la gobernanza de su autonomía. No pretende explicar una metodología completa ni presentar la automatización como un objetivo en sí mismo.

## Conceptos

### Spec-Driven Development (SDD)

En el desarrollo guiado por especificaciones, la intención se convierte en artefactos explícitos y versionados que orientan la planificación, la implementación y la verificación.

Un flujo habitual es:

1. **Demanda:** necesidad o problema registrado, por ejemplo, en un GitHub Issue.
2. **Especificación:** alcance, comportamiento esperado, restricciones, casos límite y criterios de aceptación.
3. **Plan:** decisiones técnicas y diseño de la solución.
4. **Tareas:** unidades de trabajo pequeñas, ordenadas y verificables.
5. **Implementación:** uno o varios agentes ejecutan las tareas.
6. **Convergencia:** comprobar que la solución satisface la especificación y corregir las diferencias.

La especificación reduce ambigüedades y hace el trabajo más trazable. No garantiza que los requisitos sean correctos, completos o seguros: deben revisarse y evolucionar con el producto.

### Factoría de software

Es un modelo de producción repetible que transforma demanda en software mediante procesos, herramientas, automatización y controles comunes.

En una factoría agéntica pueden intervenir agentes con funciones distintas —análisis, planificación, implementación, pruebas o revisión— coordinados por un flujo u orquestador. La especialización no exige necesariamente agentes diferentes: también puede organizarse con un único agente y etapas delimitadas.

El valor no está en acumular agentes, sino en disponer de un proceso reproducible, observable, recuperable y verificable.

### Lights-on y lights-off

Son metáforas para describir distintos grados de intervención humana, no estándares técnicos ni categorías universales.

- **Lights-on:** la persona participa durante el flujo: aclara requisitos, revisa planes, autoriza acciones o inspecciona cambios.
- **Lights-off:** las tareas rutinarias avanzan sin supervisión humana continua. La persona define intención, límites y políticas; interviene ante excepciones o en puntos de control establecidos.

Lights-off no significa ausencia de gobierno, responsabilidad o supervisión. Tampoco implica que el agente tenga permiso para desplegar en producción. Se pueden automatizar análisis, implementación y pruebas, manteniendo aprobación humana para integrar o desplegar.

## Autonomía proporcional al riesgo

La autonomía debe asignarse por tarea y entorno, atendiendo a dos factores:

- **Verificabilidad:** ¿podemos comprobar el resultado con pruebas y evidencias independientes?
- **Impacto o radio de daño:** ¿qué puede ocurrir si el agente se equivoca?

| Tipo de trabajo | Autonomía orientativa | Control |
|---|---|---|
| Documentación o tests en rama aislada | Alta | Diff y CI |
| Cambio acotado en código | Media-alta | Especificación, tests y revisión |
| Dependencias, permisos o configuración de CI | Media-baja | Aprobación específica y análisis |
| Secretos, datos reales o producción | Muy baja | Acceso restringido y autorización humana |

No es una matriz universal: cada equipo debe ajustarla a su arquitectura, contratos y tolerancia al riesgo.

## Controles necesarios en una factoría

La autonomía requiere controles fuera de las instrucciones del agente:

1. **Contrato de ejecución por tarea:** objetivo, alcance, repositorios y archivos permitidos, límites, presupuesto y condición de finalización.
2. **Identidad y permisos mínimos:** credenciales efímeras o acotadas, separación de entornos y ausencia de secretos de producción en el contexto.
3. **Aislamiento:** workspace o contenedor separado, límites de red y ejecución controlada.
4. **Orquestación trazable:** estados, dependencias, logs sin secretos, reintentos y recuperación.
5. **Verificación independiente:** pruebas, análisis estático, dependencias, detección de secretos y revisión que no dependa únicamente del agente que implementó.
6. **Puertas de aprobación:** reservar decisiones de impacto —merge, cambios de infraestructura, migraciones destructivas o despliegue— según el riesgo.
7. **Reversibilidad:** artefactos versionados, rollback y capacidad de detener el flujo.

Las reglas del agente pueden describir el proceso y sus límites, pero no sustituyen permisos del sistema, aislamiento, controles de CI ni aprobaciones aplicadas por la plataforma.

## Ejemplo para la charla

Una petición de cliente se registra como Issue. El equipo valida la demanda y el agente prepara una especificación con criterios de aceptación. Tras la revisión, se generan un plan y tareas pequeñas. Los agentes implementan en una rama aislada; la CI ejecuta tests, SAST, análisis de dependencias y detección de secretos. El resultado se presenta en un Pull Request con evidencias.

El flujo puede funcionar en modo lights-on —revisión humana en varias etapas— o aumentar su autonomía para tareas de bajo riesgo. La aprobación para integrar o desplegar se mantiene como puerta independiente.

## Mensaje clave

> Cuanta más autonomía delegamos, más importantes son los límites de actuación, la verificación independiente y la trazabilidad.

SDD estructura la intención; la factoría organiza la ejecución; los controles técnicos limitan el alcance; la verificación aporta evidencias. Ninguno de estos elementos elimina la responsabilidad humana.

## Fuentes y lecturas

- [GitHub Spec Kit — documentación oficial](https://github.github.com/spec-kit/): flujo SDD y artefactos de especificación, plan, tareas e implementación.
- [GitHub Spec Kit — guía rápida de SDD](https://github.github.com/spec-kit/quickstart): ejemplo de fases y puertas de calidad.
- [AWS Labs — Dark Factory, patrón de agentes](https://github.com/awslabs/open-agentic-platform/blob/main/docs/dark-factory/README.md): orquestación, revisiones y aprobación humana.
- [Addy Osmani — Software Factories, Light and Dark](https://www.oreilly.com/radar/software-factories-light-and-dark/): reflexión sobre grados de intervención y riesgos de eliminar la revisión humana.

**Nota:** «factoría de software», «lights-on» y «lights-off» se utilizan aquí como modelos explicativos. Su alcance varía entre autores y organizaciones; no deben presentarse como una taxonomía normativa.
