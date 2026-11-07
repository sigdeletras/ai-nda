# Políticas de privacidad y tratamiento de datos de proveedores de IA

**Estado:** documento inicial de investigación.  
**Última revisión:** 7 de noviembre de 2026.  
**Finalidad:** apoyar la evaluación de servicios de IA utilizados por equipos de desarrollo que trabajan con código, información interna o datos sujetos a compromisos de confidencialidad.

> Este documento resume información publicada por los propios proveedores. No sustituye la revisión de las condiciones contractuales, el DPA, la configuración efectiva ni una evaluación jurídica o de seguridad del servicio contratado.

## 1. Alcance

Se consideran exclusivamente ofertas empresariales o profesionales contratadas por una organización:

- Planes Business, Team, Enterprise y equivalentes.
- API y servicios cloud de pago contratados para uso empresarial.
- Herramientas de desarrollo con controles y condiciones empresariales.

Quedan fuera los planes gratuitos y las suscripciones personales, aunque permitan desactivar el entrenamiento. No deben utilizarse como vía de acceso a código, información interna o datos de clientes en el marco de la actividad empresarial.

La etiqueta «de pago» no basta para considerar adecuado un servicio: hay que comprobar la entidad contratante, los términos aplicables, el DPA, los subencargados, las funciones utilizadas y las opciones habilitadas.

## 2. Conceptos que no deben confundirse

| Concepto | Qué significa | Qué no garantiza por sí solo |
|---|---|---|
| No entrenamiento | El proveedor declara que no utiliza los datos del cliente para entrenar o mejorar modelos, salvo excepciones o consentimiento. | Que no almacene prompts, respuestas, archivos o metadatos. |
| Retención limitada | Los datos se conservan durante un periodo o para finalidades determinadas. | Que el contenido no se utilice para entrenamiento, ni que se elimine inmediatamente. |
| Zero Data Retention (ZDR) | Bajo un acuerdo y alcance determinados, no se conservan prompts y respuestas en reposo tras el procesamiento. | Que cubra todas las funciones, endpoints, modelos, registros de seguridad o terceros. |
| DPA | Acuerdo de tratamiento de datos personales entre responsable y encargado, cuando corresponda. | Que todos los datos confidenciales estén cubiertos o que el uso sea automáticamente lícito. |
| Procesamiento en entorno cloud empresarial | El servicio se presta bajo condiciones y controles empresariales. | Procesamiento local ni ausencia de transferencias internacionales. |

## 3. Matriz inicial de proveedores

La matriz es orientativa. «No entrenamiento por defecto» y «ZDR» solo deben darse por confirmados dentro del producto, configuración, contrato y alcance descritos por la fuente oficial.

| Proveedor / servicio | Modalidad incluida | Entrenamiento | Retención y ZDR | Observaciones |
|---|---|---|---|---|
| OpenAI – ChatGPT | Business / Enterprise | No se usan entradas ni salidas para entrenamiento por defecto. | Business y Enterprise mantienen conversaciones para prestar el servicio; Enterprise dispone de controles de retención. No asumir ZDR en la interfaz ChatGPT. | Revisar diferencias de administración y retención entre Business y Enterprise. |
| OpenAI – API | API comercial | No se usan datos para entrenamiento por defecto. | Logs de monitorización de abuso: hasta 30 días por defecto. ZDR o Modified Abuse Monitoring requieren aprobación y tienen límites por endpoint y función. | La persistencia de estado de ciertas funciones puede quedar fuera de ZDR. Revisar también herramientas y servidores MCP externos. |
| Anthropic – Claude | Claude Team / Enterprise | Los datos comerciales no se utilizan para entrenar modelos sin permiso expreso. | Conversaciones y sesiones se conservan para prestar el producto; Enterprise permite controles de retención personalizados. Las interfaces Team y Enterprise no quedan cubiertas por el ZDR general de API. | Claude Code Enterprise tiene condiciones ZDR específicas que deben habilitarse y verificarse. |
| Anthropic – Claude API | API comercial | No se utilizan datos retenidos para entrenamiento sin permiso expreso. | Retención estándar de entradas y salidas: hasta 30 días, con excepciones. ZDR disponible bajo acuerdo, sujeto a elegibilidad por función y modelo. | Algunas funciones con estado, modelos cubiertos, registros y contenidos marcados quedan fuera o tienen retención específica. |
| Google – Workspace con Gemini | Ediciones empresariales elegibles de Workspace | Google declara que no utiliza los datos de Workspace para entrenar modelos generativos sin permiso. | Aplican los controles y condiciones de Workspace; no equiparar esta garantía a ZDR. | Comprobar edición, región, DPA, controles de residencia y funcionalidades concretas. |
| Google – Gemini API | Servicio de pago asociado a Cloud Billing | Los prompts y respuestas de Paid Services no se usan para mejorar productos. | Puede existir registro limitado para supervisión de abuso. Google documenta medidas adicionales y requisitos para alcanzar ZDR. | Distinguir cuota de pago y cuota gratuita; esta última queda fuera de este documento. |
| GitHub – Copilot | Business / Enterprise | GitHub declara que no utiliza datos de clientes Business o Enterprise para entrenar modelos. | No presentar como ZDR general. El tratamiento puede variar según el modelo y su alojamiento. | Revisar modelos habilitados, hosting, políticas de organización, extensiones y funciones agénticas. |
| Cursor | Teams / Enterprise | Privacy Mode evita el entrenamiento con datos del cliente por Cursor y proveedores de modelos, según sus compromisos publicados. | Cursor declara acuerdos ZDR con proveedores de inferencia, pero existen excepciones: modelos con retención, clasificadores de abuso, Cloud Agents y BYOK. | En BYOK se aplican las condiciones del proveedor de la clave. Cloud Agents requieren almacenamiento temporal del repositorio. |
| Microsoft – Azure AI Foundry | Servicios empresariales de Azure | Microsoft declara que prompts y completions de modelos vendidos por Azure no se utilizan para entrenar o mejorar modelos sin permiso o instrucción. | Los modelos son stateless; revisar registros de monitorización, filtros, despliegue y configuración del recurso. | Diferenciar modelos vendidos por Azure de modelos o servicios desplegados por terceros. La región depende del tipo de despliegue. |

## 4. Fuentes oficiales

### OpenAI

- [Privacidad empresarial](https://openai.com/es-ES/enterprise-privacy/)
- [Seguridad, cumplimiento y privacidad de datos empresariales](https://openai.com/es-ES/business-data/)
- [Gestión de datos y privacidad en ChatGPT Business](https://help.openai.com/es-es/articles/8798634-managing-data-sharing-and-privacy-in-chatgpt-business)
- [Controles de datos de la API](https://developers.openai.com/api/docs/guides/your-data)

### Anthropic

- [Retención de datos de la API y ZDR](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)
- [Retención de datos de organizaciones comerciales](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)
- [Controles de retención personalizados de Claude Enterprise](https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans)

### Google

- [Privacidad y seguridad de IA generativa en Workspace](https://workspace.google.com/intl/es/security/ai-privacy/)
- [Condiciones adicionales de Gemini API](https://ai.google.dev/gemini-api/terms)
- [ZDR en Gemini Developer API](https://ai.google.dev/gemini-api/docs/zdr)

### GitHub

- [Alojamiento de modelos en GitHub Copilot](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

### Cursor

- [Resumen de uso de datos y privacidad](https://cursor.com/es/data-use)
- [Privacidad y gobernanza de datos para Enterprise](https://cursor.com/docs/enterprise/privacy-and-data-governance)
- [Seguridad de Cursor](https://cursor.com/es/security)

### Microsoft

- [Privacidad y seguridad de datos para modelos de Azure AI Foundry](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy)

## 5. Criterios para interpretar y contratar

Antes de autorizar un servicio para un proyecto, verificar documentalmente:

1. **Entidad y modalidad contratada:** confirmar que la organización es cliente bajo términos empresariales, no una cuenta personal.
2. **Entrenamiento:** comprobar el compromiso aplicable a entradas, salidas, archivos, feedback y telemetría.
3. **Retención:** identificar qué contenido se conserva, durante cuánto tiempo, con qué finalidad y qué excepciones existen.
4. **ZDR:** confirmar que está contratado o habilitado, qué organización/proyecto cubre, qué endpoints y modelos son elegibles y qué datos quedan excluidos.
5. **Subencargados y modelos:** identificar quién recibe el código y el contexto, incluidos proveedores de inferencia y servicios auxiliares.
6. **Transferencias y ubicación:** comprobar regiones de tratamiento, transferencias internacionales y garantías aplicables.
7. **DPA y contrato:** revisar roles, instrucciones, confidencialidad, medidas de seguridad, incidentes, asistencia, eliminación y devolución de datos.
8. **Funciones agénticas:** revisar indexación de repositorios, terminal, ejecución remota, agentes cloud, MCP, extensiones, conectores y registros.
9. **Configuración efectiva:** guardar evidencia de los controles administrativos habilitados y de las políticas impuestas a los usuarios.

La evaluación debe realizarse sobre el flujo completo de datos, no únicamente sobre el modelo seleccionado en la interfaz.

## 6. Aplicación a la charla

### Mensaje principal

**Una licencia empresarial reduce determinados riesgos, pero no convierte cualquier uso en aceptable ni elimina las obligaciones de confidencialidad.**

### Propuesta de diapositivas

1. **Comparativa de garantías:** proveedor y producto empresarial; entrenamiento, retención y ZDR.
2. **Tres conceptos distintos:** no entrenamiento, retención y ZDR, con ejemplos de OpenAI, Anthropic y Google.
3. **El proveedor no es toda la cadena:** IDE/agente → backend de la herramienta → proveedor de inferencia → MCP e integraciones.

### Ejemplo para explicar

Un equipo puede tener Privacy Mode activado en un editor, pero utilizar una clave API propia, activar un agente cloud o conectar un servidor MCP. Cada componente puede introducir condiciones y flujos de datos adicionales. La evaluación debe incluirlos.

## 7. Mantenimiento

- Revisar las fuentes al menos cada trimestre y antes de recomendar un proveedor para un proyecto sensible.
- Registrar fecha, producto, modalidad, enlace oficial y cambios relevantes.
- Priorizar documentación contractual, Trust Center, DPA y documentación técnica sobre páginas comerciales.
- No trasladar automáticamente una garantía de un producto a otro producto del mismo proveedor.
- Cuando una condición dependa de aprobación comercial, contrato o configuración, marcarla como **«requiere confirmación contractual»**.
- Mantener separadas las afirmaciones del proveedor, la interpretación del equipo y la recomendación de uso.

## 8. Pendiente de completar

- Confirmar las condiciones contractuales y de retención específicas de cada modalidad.
- Revisar los subencargados y modelos disponibles en cada herramienta.
- Completar Windsurf cuando se contraste su documentación empresarial vigente.
- Añadir una ficha por producto con evidencias y fecha de verificación.
- Revisar si las garantías descritas cubren el uso de agentes de programación y no solo el chat o la API básica.
