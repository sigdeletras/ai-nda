# Gobernanza del uso de IA de terceros

## Propósito

Traducir principios de gobernanza de IA a medidas proporcionadas para empresas que **utilizan herramientas de terceros**, especialmente asistentes y agentes de programación, sin desarrollar modelos ni disponer de certificaciones previas.

La referencia de contexto es **ISO/IEC 42001:2023**, norma internacional que establece requisitos y orientación para implantar, mantener y mejorar un Sistema de Gestión de Inteligencia Artificial (SGIA). Es aplicable tanto a organizaciones que proporcionan como a las que utilizan productos o servicios basados en IA. Esta charla no propone implantar la norma completa ni obtener una certificación: utiliza algunos de sus principios como marco organizativo.

Fuente oficial: [ISO — ISO/IEC 42001:2023](https://www.iso.org/es/norma/42001).

## Cinco prácticas para usuarios de IA de terceros

### 1. Evaluación del proveedor (*Due Diligence*)

Antes de autorizar una herramienta, comprobar, en función del riesgo y del tipo de información:

- Qué datos se envían, para qué se procesan y qué controles de retención existen.
- Si las entradas o salidas pueden usarse para entrenar o mejorar modelos y qué opciones aplican al producto contratado.
- Condiciones contractuales, confidencialidad, tratamiento de datos personales y subencargados relevantes.
- Controles de acceso, administración, registros, eliminación y respuesta ante incidentes.
- Herramientas conectadas, extensiones, integraciones y permisos que requiere el uso previsto.

No basta con valorar la marca o que la suscripción sea de pago. Las garantías deben comprobarse en las condiciones vigentes del producto, plan y configuración concretos. La evaluación debe ser proporcional: una herramienta para código público no presenta el mismo riesgo que un agente con acceso a repositorios privados y credenciales de clientes.

### 2. Gestión de riesgos de uso

Identificar escenarios concretos, su impacto y las medidas aplicables. Por ejemplo:

- Exposición de código, datos personales, secretos comerciales o credenciales.
- Acciones destructivas o cambios no autorizados ejecutados por un agente.
- Errores, resultados inventados o vulnerabilidades en el código generado.
- *Prompt injection* en archivos, documentación o contenido externo.
- Dependencias, extensiones o servidores MCP no confiables.

Priorizar controles que reduzcan el alcance del incidente: mínimo privilegio, datos de prueba, separación de entornos, aislamiento y revisión de cambios.

### 3. Política de uso aceptable

Documentar reglas breves y aplicables al trabajo diario:

- Herramientas y cuentas autorizadas.
- Tipos de datos permitidos, restringidos y prohibidos.
- Requisitos adicionales para información de clientes o datos personales.
- Uso de credenciales, integraciones, terminal y acceso a producción.
- Acciones que requieren aprobación humana y vías para reportar incidentes.

La política debe explicar qué hacer, no limitarse a pedir prudencia. Debe revisarse cuando cambien las herramientas, sus condiciones o los usos de la organización.

### 4. Supervisión humana (*Human-in-the-loop*)

Definir puntos de control para que una persona revise y autorice acciones relevantes antes de que produzcan efectos. En desarrollo agéntico puede incluir:

- Revisar el *diff* antes de integrar cambios.
- Validar migraciones, operaciones destructivas y modificaciones de permisos.
- Aprobar despliegues, cambios de infraestructura y acciones sobre sistemas de clientes.
- Verificar resultados críticos mediante pruebas y fuentes independientes.

La supervisión debe ser proporcional al impacto y contar con tiempo e información suficientes. Una confirmación rutinaria sin revisar la acción no es una supervisión efectiva. Tampoco sustituye los controles técnicos que limitan los permisos del agente.

### 5. Seguimiento y mejora

- Revisar periódicamente herramientas, permisos y condiciones de los proveedores.
- Registrar incidencias y decisiones relevantes sin almacenar secretos innecesarios.
- Disponer de un procedimiento para contener exposiciones, revocar credenciales, evaluar el alcance y comunicar el incidente.
- Ajustar las reglas a partir de errores, cambios del servicio y lecciones aprendidas.

## Cómo usar este marco en la charla

No presentar estos puntos como requisitos textuales de ISO/IEC 42001 ni como garantía de cumplimiento normativo. Son una adaptación práctica de gobernanza para el público de la charla.

**Mensaje para la slide:** «No necesitas certificarte para gobernar el uso de IA: evalúa la herramienta, limita los datos y permisos, define reglas y revisa las acciones de impacto».

### Propuesta de diapositiva

**Título:** Gobernar el uso de IA sin montar un sistema complejo

Mostrar cinco pasos, en una línea o ciclo:

1. **Evalúa** el proveedor (*Due Diligence*).
2. **Identifica** riesgos de uso.
3. **Define** una política de uso aceptable.
4. **Supervisa** acciones críticas (*Human-in-the-loop*).
5. **Revisa** incidentes y controles.

Notas para el ponente:
- Mencionar ISO/IEC 42001 como marco de gestión aplicable también a organizaciones usuarias de IA, no solo a quienes desarrollan modelos.
- Aclarar que no se recomienda implantar un SGIA completo en el tiempo de la charla.
- Conectar el marco con el NDA: una política interna no modifica por sí sola las obligaciones contractuales con el cliente.
- Mantener la sección breve. Si el tiempo es limitado, integrar estos cinco pasos en la slide final de criterios para el equipo en lugar de añadir una diapositiva independiente.

## Fuentes

- [ISO — ISO/IEC 42001:2023, página oficial](https://www.iso.org/es/norma/42001).
- [IEC Webstore — ISO/IEC 42001:2023](https://webstore.iec.ch/en/publication/90574).
- [OWASP — AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html), para controles técnicos específicos de agentes.

Consulta de las fuentes web: 20 de octubre de 2026.
