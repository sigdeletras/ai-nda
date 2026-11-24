# Políticas de privacidad y tratamiento de datos de proveedores de IA

**Estado:** documento inicial de investigación.  
**Última revisión:** 22 de noviembre de 2026.  
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

Estos tres conceptos responden a preguntas distintas y deben evaluarse por separado:

| Concepto | Pregunta que responde | Qué significa | Qué no garantiza |
|---|---|---|---|
| **No entrenamiento** | ¿Utiliza el proveedor mis datos para entrenar o mejorar modelos? | El proveedor se compromete a no utilizar el contenido del cliente para ese fin, salvo excepciones o autorización. | Que no almacene prompts, respuestas, archivos o metadatos. |
| **Retención limitada** | ¿Durante cuánto tiempo conserva el contenido? | El proveedor puede conservar prompts, respuestas o archivos durante un periodo definido y para finalidades concretas, por ejemplo supervisión de abuso o prestación del servicio. | Que el contenido no se utilice para entrenamiento, ni que se elimine inmediatamente. |
| **Zero Data Retention (ZDR)** | ¿Conserva el proveedor el contenido después de procesarlo? | Bajo un acuerdo y alcance determinados, el proveedor no conserva el contenido de solicitudes y respuestas en los sistemas de registro cubiertos una vez procesado. | Que no exista ningún registro técnico ni que se cubran todas las funciones, endpoints, modelos, archivos, estados persistentes o terceros. |

Otros conceptos relacionados:

| Concepto | Qué significa | Qué no garantiza por sí solo |
|---|---|---|
| **DPA** | Acuerdo de tratamiento de datos personales entre responsable y encargado, cuando corresponda. | Que todos los datos confidenciales estén cubiertos o que el uso sea automáticamente lícito. |
| **Procesamiento en entorno cloud empresarial** | El servicio se presta bajo condiciones y controles empresariales. | Procesamiento local, ausencia de transferencias internacionales ni ZDR. |

**Ejemplo sencillo:** un proveedor puede no utilizar los prompts para entrenar modelos y, aun así, conservarlos durante 30 días para supervisión de abuso. Una modalidad ZDR puede excluir ese contenido de los registros cubiertos, pero mantener metadatos técnicos o dejar fuera funciones que almacenan estado.

**Mensaje para la charla:** «Que no entrenen con tus datos no significa que no los almacenen. Y ZDR no significa que no exista ningún registro ni que todo el flujo esté cubierto».

## 3. Matriz comparativa de proveedores

### 3.1. Versión sintética para diapositiva

**Lectura visual:** ✓ = sí, por defecto; ◐ = depende del plan, modelo o configuración; — = no es una garantía general. Los símbolos no representan una certificación de seguridad.

| Servicio profesional | No entrenamiento | ZDR | Retención / matiz |
|---|:---:|:---:|---|
| **ChatGPT Business / Enterprise** | ✓ | — | Según plan y controles |
| **OpenAI API** | ✓ | ◐ | 30 días; ZDR sujeto a aprobación |
| **Claude Team / Enterprise** | ✓ | — | Según política organizativa |
| **Claude API / Code API** | ✓ | ◐ | ZDR contractual; funciones excluidas |
| **Gemini API (pago)** | ✓ | — | Registros limitados; funciones con estado |
| **GitHub Copilot Business / Enterprise** | ✓ | ◐ | Depende del modelo y proveedor |
| **Cursor Teams / Enterprise** | ✓* | ◐ | Privacy Mode; excepciones y agentes cloud |
| **Azure AI Foundry (modelos Azure)** | ✓ | — | Modelos stateless; funciones opcionales con estado |

<text style="display:none"> </text>

**Nota al pie de la diapositiva:** *✓ no significa retención cero. ZDR solo cuando se contrata o habilita y dentro de su alcance. Verificar producto, modelo, funciones y servicios externos.*

**Mensaje oral recomendado:** «La mayoría ofrece compromisos de no entrenamiento en sus modalidades profesionales. La retención y el ZDR son mucho más variables: dependen del producto y de cómo lo usamos».

**Versión aún más reducida, si falta espacio:**

| Proveedor | No entrenamiento | ZDR |
|---|:---:|:---:|
| OpenAI ChatGPT | ✓ | — |
| OpenAI API | ✓ | ◐ |
| Claude Team / Enterprise | ✓ | — |
| Claude API | ✓ | ◐ |
| Gemini API (pago) | ✓ | — |
| Copilot Business / Enterprise | ✓ | ◐ |
| Cursor Teams / Enterprise | ✓* | ◐ |
| Azure AI Foundry | ✓ | — |

`* Cursor: requiere Privacy Mode; revisar excepciones.`

---

## 3. Matriz comparativa de proveedores

**Consulta de fuentes oficiales: 22 de noviembre de 2026.** La matriz resume compromisos publicados; no acredita qué condiciones se han contratado ni sustituye el DPA, los términos aplicables o la configuración del tenant/proyecto.

| Proveedor / producto | Uso para entrenamiento | Retención y ZDR | Qué debe comprobar el equipo |
|---|---|---|---|
| **OpenAI – ChatGPT Business / Enterprise** | Los datos del espacio de trabajo no se utilizan para entrenar por defecto. | El historial de conversaciones se conserva según el producto y la política del espacio de trabajo. Enterprise ofrece controles de retención; Business dispone de residencia de datos en determinadas condiciones, pero esto no equivale a residencia de inferencia ni a ZDR. | No trasladar a ChatGPT las condiciones de la API. Revisar configuración de retención, residencia, conectores, enlaces compartidos y funciones de Codex/Work. |
| **OpenAI – API** | Entradas y salidas excluidas del entrenamiento por defecto. | Los registros de supervisión de abuso pueden conservar contenido hasta 30 días. ZDR y Modified Abuse Monitoring requieren aprobación. ZDR no cubre todos los endpoints ni el estado persistente de todas las funciones. | Revisar endpoint, parámetro `store`, archivos, conversaciones, agentes, contenedores y servidores MCP. Los datos enviados a MCP u otros servicios se rigen por sus propias políticas. |
| **Anthropic – Claude Team / Enterprise** | Los datos comerciales no se usan para entrenar modelos sin permiso expreso. | Las interfaces de Claude Team y Enterprise no están cubiertas por el acuerdo ZDR general de la API. Se aplican las políticas de retención de la organización. Claude Code en Enterprise tiene una oferta ZDR independiente, sujeta a elegibilidad y habilitación expresa. | No asumir que el plan Enterprise implica ZDR. Verificar controles de retención de la organización y, para Claude Code, confirmación contractual y activación específica. |
| **Anthropic – Claude API / Claude Code con API key comercial** | Los datos retenidos no se usan para entrenamiento sin permiso expreso. | ZDR puede contratarse por organización y cubre solo endpoints y funciones elegibles. Algunas funciones con estado, archivos, ejecución de código, lotes o modelos sujetos a retención quedan excluidos o tienen TTL propio. | Revisar la tabla de elegibilidad por función/modelo. Claude Code con clave API comercial puede estar cubierto; el registro de métricas y otras funciones pueden quedar fuera. |
| **Google – Gemini Developer API** | En Paid Services, prompts y respuestas no se usan para mejorar productos. El nivel gratuito tiene condiciones distintas. | No equivale a ZDR general: existen registros limitados para supervisión de abuso. Grounding con Search o Maps conserva datos 30 días; Interactions API, Files API y caché explícita pueden mantener estado. Google recomienda Vertex AI si se requiere ZDR garantizado o acuerdos empresariales de tratamiento. | Distinguir Paid Services del nivel gratuito y Gemini Developer API de Vertex AI / Gemini Enterprise Agent Platform. Revisar herramientas de grounding, estado, archivos y caché. |
| **GitHub – Copilot Business / Enterprise** | GitHub declara que no utiliza datos de clientes Business o Enterprise para entrenar modelos. | La cobertura de retención depende del modelo y de dónde se aloje. GitHub declara acuerdos ZDR con proveedores para determinados modelos, pero existen excepciones por modelos o funciones beta/preview. | Revisar el modelo seleccionado, su proveedor y alojamiento. No extrapolar la garantía de un modelo a todo Copilot ni a extensiones, agentes o integraciones externas. |
| **Cursor – Teams / Enterprise** | Con Privacy Mode activado, el código no se usa para entrenamiento por Cursor ni por proveedores de modelos. En Enterprise está activado por defecto. | Cursor declara acuerdos ZDR para la mayoría de modelos, con excepciones. Cloud Agents almacenan copias cifradas del repositorio temporalmente mientras trabajan; ciertos modelos pueden requerir retención del proveedor. | Verificar Privacy Mode, lista de subencargados y modelos con retención. Evaluar por separado Cloud Agents, BYOK, MCP e integraciones. |
| **Microsoft – Azure AI Foundry (modelos vendidos por Azure)** | Prompts, respuestas y embeddings no se utilizan para entrenar o mejorar modelos sin permiso/instrucción. | Los modelos son stateless, pero las funciones opcionales con estado (por ejemplo, Responses, Threads, archivos o vector stores) pueden persistir datos según configuración. Los filtros de contenido y registros operativos tienen tratamiento propio. | Distinguir modelos vendidos por Azure de modelos de terceros. Revisar tipo de despliegue, región/geografía, funciones con estado, filtros y DPA de Microsoft. |

### Lectura rápida para la charla

- **ChatGPT Business/Enterprise no es lo mismo que la API de OpenAI.** La garantía de no entrenamiento es común, pero los controles de retención y ZDR son diferentes.
- **Claude Team/Enterprise no tiene ZDR general.** La API puede tener ZDR bajo acuerdo y con exclusiones; Claude Code Enterprise dispone de una vía específica.
- **Gemini Developer API de pago no equivale a Vertex AI.** La API de pago excluye el entrenamiento, pero conserva registros y algunas funciones almacenan estado.
- **Las herramientas de programación añaden su propia cadena de tratamiento.** Cursor, Copilot y otras herramientas pueden enviar contexto a varios proveedores y ejecutar agentes cloud.
- **ZDR no significa ausencia absoluta de datos:** puede excluir prompts y respuestas de determinados registros, pero dejar fuera metadatos, archivos, estado persistente, funciones auxiliares o servicios de terceros.

## 4. Fuentes oficiales

Consultar preferentemente documentación técnica y de privacidad, no solo páginas comerciales. Enlaces revisados el 22 de noviembre de 2026.

### OpenAI
- [Privacidad y tratamiento de datos empresariales](https://openai.com/business-data/)
- [Privacidad empresarial y compromisos](https://openai.com/enterprise-privacy/)
- [ChatGPT Business: tratamiento, historial y uso de Codex](https://help.openai.com/en/articles/8798634-managing-data-sharing-and-privacy-in-chatgpt-business)
- [ChatGPT Business: ubicación de almacenamiento y residencia](https://help.openai.com/es-es/articles/20001418-where-your-chatgpt-business-content-is-stored)
- [Controles de datos de la API: retención por endpoint, ZDR y excepciones](https://developers.openai.com/api/docs/guides/your-data)

### Anthropic
- [API y retención de datos: ZDR y elegibilidad por función](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)
- [Centro legal de Anthropic: términos comerciales y políticas vigentes](https://www.anthropic.com/legal)
- [Retención de datos comerciales](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)
- [Controles de retención personalizados de Claude Enterprise](https://support.claude.com/en/articles/10440198-configure-custom-data-retention-controls-for-enterprise-plans)

### Google
- [Gemini API: términos de servicio y Paid Services](https://ai.google.dev/gemini-api/terms)
- [Gemini Developer API: Zero Data Retention y exclusiones](https://ai.google.dev/gemini-api/docs/zdr)
- [Vertex AI: privacidad y tratamiento de datos](https://cloud.google.com/vertex-ai/generative-ai/docs/data-governance)

### GitHub
- [Alojamiento de modelos en GitHub Copilot: proveedores, entrenamiento y ZDR](https://docs.github.com/en/copilot/reference/ai-models/model-hosting)

### Cursor
- [Privacidad y gobernanza de datos: flujos LLM y Cloud Agents](https://cursor.com/docs/enterprise/privacy-and-data-governance)
- [Uso de datos y Privacy Mode](https://cursor.com/data-use)
- [Seguridad de Cursor](https://cursor.com/security)

### Microsoft
- [Privacidad y seguridad de modelos vendidos por Azure en Microsoft Foundry](https://learn.microsoft.com/en-us/azure/foundry/responsible-ai/openai/data-privacy)
- [Microsoft Products and Services Data Protection Addendum](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA)


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

### Propuesta editorial: tres diapositivas consecutivas

El bloque de privacidad y proveedores se organizará en tres diapositivas. La secuencia permite explicar primero los conceptos, delimitar después el alcance de la investigación y, por último, interpretar la comparativa.

#### Diapositiva 5A. Tres conceptos que no debemos confundir

**Objetivo:** distinguir no entrenamiento, retención limitada y ZDR antes de ver la matriz.

**Contenido visible:**
- **No entrenamiento:** ¿utilizan mis datos para entrenar modelos?
- **Retención:** ¿durante cuánto tiempo conservan el contenido?
- **ZDR:** ¿conservan el contenido después de procesarlo, dentro del alcance cubierto?

**Idea visual:** tres bloques o columnas, cada uno con una pregunta y una explicación de una línea.

**Mensaje destacado:** «Que no entrenen con tus datos no significa que no los almacenen».

**Nota oral:** utilizar el ejemplo de un proveedor que excluye los prompts del entrenamiento, pero conserva registros de contenido durante un periodo limitado para supervisión de abuso. ZDR se refiere al contenido y a los sistemas cubiertos; pueden seguir existiendo metadatos y funciones con estado fuera de ese alcance.

**Tiempo orientativo:** 1 minuto.

#### Diapositiva 5B. Servicios y modalidades revisadas

**Objetivo:** delimitar qué se ha comparado y evitar que se interprete como una evaluación de todos los productos de cada empresa.

| Proveedor | Productos o modalidades revisadas |
|---|---|
| OpenAI | ChatGPT Business / Enterprise · API |
| Anthropic | Claude Team / Enterprise · API / Claude Code |
| Google | Gemini Developer API (Paid Services) |
| GitHub | Copilot Business / Enterprise |
| Cursor | Teams / Enterprise |
| Microsoft | Azure AI Foundry (modelos vendidos por Azure) |

**Nota al pie:** «Modalidades profesionales y servicios de pago revisados documentalmente. No equivale a una auditoría de la configuración de cada organización».

**Nota oral:** una API comercial o un servicio cloud no son planes de suscripción equivalentes a Business o Team. Se incluyen porque forman parte de las alternativas que puede utilizar un equipo de desarrollo. No presentar los nombres como recomendaciones.

**Tiempo orientativo:** 30 segundos.

#### Diapositiva 5C. ¿Qué garantías ofrecen?

**Objetivo:** comparar los compromisos publicados para las modalidades concretas incluidas en el alcance.

**Contenido visible:** utilizar la tabla sintética del apartado 3.1, con las columnas servicio profesional, no entrenamiento, ZDR y retención/matiz. Mantener la leyenda y la nota que aclara que no entrenamiento no significa retención cero. No añadir otra columna: los matices ya aparecen en la última y la tabla debe seguir siendo legible.

**Mensaje oral:** «La mayoría ofrece compromisos de no entrenamiento en sus modalidades profesionales. La retención y el ZDR son mucho más variables: dependen del producto y de cómo lo usamos».

**Precauciones:**
- Un ✓ en no entrenamiento no implica que no se almacenen datos.
- Un guion en ZDR indica que no existe una garantía general para esa modalidad; no significa necesariamente que el proveedor carezca de opciones específicas.
- Un ◐ indica que hay condiciones, excepciones o requisitos que deben comprobarse.
- No trasladar garantías de una API a una suscripción, ni de un modelo a todas las funciones de una herramienta.
- Cursor requiere Privacy Mode para el compromiso indicado; revisar por separado los agentes cloud.
- La matriz resume documentación pública. No acredita el contrato, la configuración ni las funciones activadas por una organización.

**Tiempo orientativo:** 2 minutos y 30 segundos.

**Duración total del bloque:** 4 minutos.

### Transición al bloque de controles técnicos

«Conocer las condiciones del proveedor es necesario, pero no suficiente. También tenemos que controlar qué información y qué permisos ponemos a disposición del agente».

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

- Confirmar con cada proveedor las condiciones contractuales concretas de la cuenta/organización contratada; las páginas públicas no acreditan la configuración de un cliente.
- Revisar los subencargados, regiones y modelos habilitados en la herramienta realmente utilizada.
- Completar Windsurf si se incorpora a la comparativa.
- Revalidar la matriz antes del ensayo y anotar cambios relevantes de producto o plan.
- Revisar por separado agentes cloud, MCP, conectores, extensiones, archivos y funciones con estado.
