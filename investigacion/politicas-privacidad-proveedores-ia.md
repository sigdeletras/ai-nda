# Comparativa de privacidad y tratamiento de datos en proveedores de IA

**Proyecto:** charla «¿Le puedo dar las claves? IA agéntica, código y secretos de cliente» — DevFest Córdoba 2026  
**Estado:** primera recopilación de fuentes oficiales; pendiente de completar la matriz por plan y verificar los detalles de cada condición.  
**Fecha de revisión inicial:** 20 de octubre de 2026

## Objetivo y alcance

Documentar cómo se tratan el código, los prompts, los archivos, las conversaciones, los datos de uso y las credenciales que pueden llegar a herramientas de IA. La comparación debe ayudar a equipos de desarrollo a evaluar el riesgo contractual y operativo sin asumir que una suscripción de pago implica retención cero o procesamiento local.

Se distinguen dos capas:

1. **Proveedor del modelo o servicio de IA** (por ejemplo, OpenAI, Anthropic o Google).
2. **Herramienta de desarrollo** que integra modelos, agentes, indexación, telemetría y conectores (por ejemplo, GitHub Copilot o Cursor).

Las condiciones pueden variar por producto, modalidad de contratación, configuración, región y acuerdo comercial. No extrapolar las condiciones de una aplicación de consumo a la API o a un plan empresarial.

## Aspectos que se compararán

1. Uso de prompts, código, archivos y respuestas para entrenar o mejorar modelos; valor por defecto y posibilidad de exclusión.
2. Retención por tipo de dato: conversaciones, archivos, registros de seguridad, telemetría y datos de sesión.
3. Zero Data Retention (ZDR): disponibilidad, requisitos, productos cubiertos y excepciones.
4. Memoria, historial, conversaciones temporales y controles para desactivar, consultar o eliminar estos datos.
5. Revisión humana, acceso del personal y tratamiento para prevención de abusos.
6. Cifrado, control de acceso, ubicación de procesamiento, transferencias y subencargados.
7. Exportación y eliminación: plazos, copias de seguridad y excepciones legales o de seguridad.
8. Condiciones contractuales, DPA/acuerdo de tratamiento, roles de protección de datos y compromisos de confidencialidad.
9. Particularidades de agentes de programación: contexto de repositorio, indexación, terminal, ejecución remota, conectores/MCP y credenciales.
10. Administración organizativa: controles centralizados, aplicación obligatoria de políticas y visibilidad del administrador.
11. Certificaciones e informes de auditoría: alcance concreto del servicio y vigencia.
12. Cambios de condiciones, fecha de actualización y documentación contractual que prevalece.

## Fuentes oficiales: OpenAI

### Política y condiciones generales
- [Política de privacidad](https://openai.com/policies/privacy-policy/)
- [Condiciones de uso](https://openai.com/policies/terms-of-use/)
- [Privacidad empresarial](https://openai.com/enterprise-privacy/)
- [Preguntas frecuentes sobre controles de datos de ChatGPT](https://help.openai.com/en/articles/7730893-data-controls-faq)

### ChatGPT: controles y retención
- [Chat temporal en ChatGPT](https://help.openai.com/en/articles/8914046-temporary-chat-faq)
- [Preguntas frecuentes sobre memoria](https://help.openai.com/en/articles/8590148-memory-faq)

### API y servicios empresariales
- [Uso de datos para mejorar modelos en servicios de API](https://platform.openai.com/docs/guides/your-data)
- [Política de uso de datos de API](https://openai.com/policies/how-your-data-is-used-to-improve-model-performance/)
- [Acuerdo de tratamiento de datos](https://openai.com/policies/data-processing-addendum/)

**Puntos por verificar en la siguiente revisión:** diferencias entre ChatGPT Free/Plus/Pro y Business/Enterprise/Edu; exclusión del entrenamiento; retención de chats temporales; condiciones de registros de seguridad; disponibilidad y alcance de ZDR para API y productos concretos; controles administrativos y excepciones.

## Fuentes oficiales: Anthropic / Claude

### Política y condiciones
- [Política de privacidad](https://www.anthropic.com/legal/privacy)
- [Condiciones de servicio para consumidores](https://www.anthropic.com/legal/consumer-terms)
- [Condiciones comerciales](https://www.anthropic.com/legal/commercial-terms)
- [Centro de privacidad de Claude](https://privacy.claude.com/)

### API y tratamiento de datos
- [Documentación de retención de datos de la API](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)
- [Documentación de privacidad y seguridad de Anthropic](https://privacy.anthropic.com/)

**Puntos por verificar en la siguiente revisión:** configuración de uso de conversaciones para mejora de modelos en cuentas de consumo; diferencias entre Free/Pro/Max y Team/Enterprise; plazos y excepciones de retención; tratamiento de feedback y conversaciones marcadas por seguridad; API y opciones ZDR; condiciones de Claude Code y herramientas conectadas.

## Fuentes oficiales: Google / Gemini

### Política y condiciones generales
- [Política de privacidad de Google](https://policies.google.com/privacy)
- [Condiciones del servicio de Google](https://policies.google.com/terms)
- [Aviso de privacidad de las aplicaciones Gemini](https://support.google.com/gemini/answer/13594961)
- [Ayuda de privacidad de las aplicaciones Gemini](https://support.google.com/gemini/answer/13278892)

### Workspace y API
- [Privacidad de la IA generativa en Google Workspace](https://workspace.google.com/intl/es/security/ai-privacy/)
- [Documentación de retención cero de datos de Gemini API](https://ai.google.dev/gemini-api/docs/zdr)
- [Condiciones adicionales de los servicios de IA generativa de Google](https://ai.google.dev/gemini-api/terms)

**Puntos por verificar en la siguiente revisión:** diferencias entre Gemini de consumo, Google Workspace y Gemini API; actividad de aplicaciones Gemini, revisión humana y conservación; uso de datos para mejora; controles del administrador de Workspace; alcance y requisitos de ZDR en API.

## Herramientas de programación que conviene incluir

Se incluyen como una capa separada, porque la herramienta puede tratar contexto del repositorio, telemetría, sesiones y datos enviados a proveedores de modelos.

### GitHub Copilot
- [Documentación de privacidad y uso de datos de Copilot: políticas individuales](https://docs.github.com/es/copilot/how-tos/manage-your-account/managing-copilot-policies-as-an-individual-subscriber)
- [Datos de sesión de GitHub Copilot](https://docs.github.com/es/copilot/concepts/security-governance-and-network-settings/session-data)
- [Planes de GitHub Copilot](https://docs.github.com/es/copilot/get-started/plans)
- [Declaración de privacidad de GitHub](https://docs.github.com/es/site-policy/privacy-policies/github-privacy-statement)

**Observación inicial verificada en la documentación oficial consultada el 20-10-2026:** GitHub indica que, desde el 24 de abril de 2026, puede usar interacciones de Copilot Free, Pro, Pro+ y Max para entrenar o mejorar modelos, con posibilidad de exclusión en la configuración personal. La documentación diferencia estos planes de Copilot Business y Enterprise, cuyos datos de cliente no se usan para entrenamiento bajo las condiciones indicadas por GitHub. Confirmar siempre el estado vigente y el plan concreto antes de trasladar esta afirmación a las diapositivas.

### Cursor
- [Política de privacidad](https://cursor.com/privacy)
- [Condiciones de servicio](https://cursor.com/terms-of-service)
- [Resumen de uso de datos y privacidad](https://cursor.com/data-use)
- [Documentación de privacidad y datos](https://docs.cursor.com/account/privacy)
- [Documentación de privacidad y seguridad](https://cursor.com/security)

**Observación inicial verificada en la documentación oficial consultada el 20-10-2026:** Cursor describe Privacy Mode como un control que impide el uso de datos del cliente para entrenamiento por Cursor y proveedores de modelos, y afirma disponer de acuerdos ZDR con sus proveedores de modelos. La documentación también señala excepciones relacionadas con detección e investigación de abusos. Hay que comprobar las condiciones actuales, el modo concreto seleccionado y los términos del plan comercial antes de formular una conclusión contractual.

## ¿Añadir otros proveedores?

Prioridad inicial recomendada:

- **Prioridad 1:** OpenAI, Anthropic y Google, por sus productos de consumo, servicios empresariales y API.
- **Prioridad 1 para desarrollo:** GitHub Copilot y Cursor, porque la herramienta de programación tiene controles y flujos de datos propios.
- **Ampliación condicionada:** Microsoft Copilot / Azure AI, Mistral, Amazon Bedrock y otros servicios si se utilizan en el entorno objetivo o aportan una modalidad contractual distinta que merezca comparación.

No comparar únicamente marcas. Conviene comparar **productos y modalidades de contratación concretos**. Por ejemplo, GitHub Copilot no es equivalente a Microsoft 365 Copilot, y Gemini de consumo no es equivalente a Gemini integrado en Workspace o a Gemini API.

## Plantilla de la matriz comparativa

| Proveedor / producto | Plan o modalidad | Uso para entrenamiento | Retención y eliminación | ZDR | Memoria / modo temporal | Revisión por humanos y seguridad | DPA / garantías contractuales | Fuente oficial | Fecha de verificación |
|---|---|---|---|---|---|---|---|---|---|
| OpenAI / ChatGPT | Consumo | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| OpenAI / ChatGPT | Business / Enterprise | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| OpenAI API | API | Pendiente | Pendiente | Pendiente | No aplica / revisar | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| Anthropic / Claude | Consumo | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| Anthropic / Claude | Team / Enterprise | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| Anthropic API | API | Pendiente | Pendiente | Pendiente | No aplica / revisar | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| Google / Gemini | Aplicación de consumo | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| Google Workspace | Empresarial | Pendiente | Pendiente | Pendiente | Según producto | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| Gemini API | API | Pendiente | Pendiente | Pendiente | No aplica / revisar | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| GitHub Copilot | Free / Pro / Pro+ / Max | Pendiente de comprobar por plan | Pendiente | Pendiente | Sesiones y agentes | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| GitHub Copilot | Business / Enterprise | Pendiente de comprobar por plan | Pendiente | Pendiente | Sesiones y agentes | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| Cursor | Individual | Pendiente | Pendiente | Privacy Mode y alcance por verificar | Contexto e indexación | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |
| Cursor | Teams / Enterprise | Pendiente | Pendiente | Privacy Mode y controles de organización | Contexto e indexación | Pendiente | Pendiente | Enlaces arriba | 20-10-2026 |

## Criterios de verificación

Para cada fila:

- Enlazar al apartado exacto de la documentación oficial, no solo a la página principal.
- Registrar la fecha de consulta y, si aparece, la fecha de última actualización de la fuente.
- Separar **garantía contractual**, **comportamiento documentado**, **opción de configuración** y **recomendación del proveedor**.
- Identificar explícitamente las excepciones (seguridad, prevención de abusos, obligaciones legales, soporte, feedback o datos anonimizados).
- No interpretar «no se usa para entrenar» como «no se conserva» ni «no se revisa».
- No interpretar ZDR como ausencia de procesamiento, telemetría o registros en todos los componentes.
- No interpretar una suscripción de pago como garantía automática de privacidad empresarial.
- Si los términos públicos no resuelven una cuestión, anotarla como «no determinado en la documentación pública; confirmar con el proveedor/contrato».

## Resultado esperado para la charla

La investigación extensa servirá de respaldo. Para las diapositivas se extraerá una comparación breve centrada en:

1. Uso de datos para entrenamiento.
2. Retención, eliminación y excepciones.
3. ZDR y su alcance real.
4. Diferencias entre consumo, empresarial y API.
5. Datos que puede enviar una herramienta de programación al proveedor del modelo.
6. Qué comprobar en el contrato y qué controles técnicos aplicar en el equipo.

**Nota:** este documento es una recopilación inicial, no un dictamen jurídico ni una certificación de cumplimiento. Las condiciones pueden cambiar; comprobar los términos vigentes y el contrato aplicable antes de tomar decisiones o presentar conclusiones definitivas.


## Primera verificación de fuentes (20-10-2026)

Se han abierto y comprobado las siguientes páginas oficiales. Los puntos de abajo son observaciones preliminares para orientar la matriz, no sustituyen la lectura de los términos aplicables al plan concreto.

### OpenAI / ChatGPT
- La página oficial de controles de datos indica que desactivar **Improve the model for everyone** impide que las nuevas conversaciones se usen para entrenar, pero no elimina el historial guardado.
- El chat temporal no aparece en el historial, no crea ni actualiza memoria y no se usa para mejorar modelos; puede conservarse hasta 30 días por motivos de seguridad.
- La documentación separa memoria y entrenamiento como controles diferentes. También señala que las conversaciones asociadas a feedback pueden tratarse de forma distinta.
- Las condiciones por defecto para espacios de trabajo Business, Enterprise y Edu se describen separadamente de las cuentas personales.
- Fuente revisada: [Controles de datos en ChatGPT](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt).

### Anthropic / Claude
- La política de privacidad abierta durante esta revisión indica como fecha de entrada en vigor el **10 de septiembre de 2026**.
- Para servicios de consumo, la política señala que Inputs y Outputs pueden usarse para entrenar y mejorar modelos salvo que el usuario opte por no participar; recoge excepciones para contenido marcado para revisión de seguridad o enviado explícitamente como feedback.
- La política explica que las conversaciones eliminadas desaparecen inmediatamente del historial y se eliminan del backend en un plazo de hasta 30 días, sujeto a excepciones.
- La política de consumo no cubre el contenido tratado en nombre de clientes de servicios empresariales; remite a los acuerdos con esos clientes.
- Fuente revisada: [Política de privacidad de Anthropic](https://www.anthropic.com/legal/privacy).

### Google / Gemini de consumo
- La documentación de Gemini Apps consultada se actualizó el **19 de octubre de 2026**.
- La actividad puede configurarse para borrado automático a los 3, 18 o 36 meses, o mantenerse indefinidamente. La documentación indica que los chats revisados por personas y datos asociados pueden conservarse hasta tres años, incluso después de borrar la actividad.
- Los chats temporales y los chats con Keep Activity desactivado se conservan asociados a la cuenta durante 72 horas para responder y proteger el servicio; los chats temporales no se usan para entrenar modelos. Si Keep Activity está desactivado, el uso para mejorar modelos también depende, entre otras cosas, de que no se envíe feedback.
- Estas condiciones corresponden a Gemini Apps de consumo; no deben extrapolarse a Workspace ni a Gemini API.
- Fuente revisada: [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961).

### Google / Gemini API: alcance de ZDR
- La documentación oficial de Gemini Developer API indica que los servicios de pago no usan prompts y respuestas para mejorar productos, pero la retención cero requiere revisar funciones concretas.
- La propia documentación enumera excepciones/condiciones para supervisión de abusos, grounding con Google Search o Maps, estado de conversaciones, Live API, almacenamiento de archivos y caché de contexto.
- En particular, indica que Grounding con Google Search y con Google Maps almacena prompts, contexto y resultados durante 30 días y que ese almacenamiento no puede desactivarse al usar esas funciones. Para necesidades de ZDR garantizada o acuerdos empresariales de tratamiento, remite a Vertex AI.
- La página consultada figura como actualizada el **14 de septiembre de 2026**.
- Fuente revisada: [Zero data retention in the Gemini Developer API](https://ai.google.dev/gemini-api/docs/zdr).

### GitHub Copilot
- La documentación oficial localizada distingue los planes individuales de Business y Enterprise. Indica que desde el **24 de abril de 2026** las interacciones de Free, Pro, Pro+ y Max pueden utilizarse para entrenamiento/mejora, con opción de exclusión en la configuración personal; los datos de clientes Business y Enterprise están sujetos a condiciones distintas.
- La política exacta debe confirmarse por tipo de cuenta y configuración antes de citarla en diapositivas.
- Fuente revisada: [Administrar las políticas de Copilot como suscriptor individual](https://docs.github.com/es/copilot/how-tos/manage-your-account/managing-copilot-policies-as-an-individual-subscriber).

### Cursor
- La documentación oficial describe Privacy Mode como un control para impedir el uso de datos del cliente para entrenamiento por Cursor y sus proveedores de modelos, y afirma disponer de acuerdos ZDR con los proveedores.
- La documentación también menciona excepciones para la detección e investigación de posibles abusos. Deben comprobarse el modo activado, las condiciones vigentes y los acuerdos del plan contratado.
- Fuentes revisadas: [Resumen de uso de datos y privacidad](https://cursor.com/data-use) y [Política de privacidad](https://cursor.com/privacy).

### Límites de esta primera pasada
- Se ha comprobado que las páginas enlazadas se resuelven y que las fuentes consultadas son documentación oficial de los respectivos proveedores.
- Esta revisión no confirma todavía todos los enlaces de la lista ni completa una comparación contractual plan por plan.
- En la siguiente iteración se deben revisar los términos de API y los contratos empresariales (incluidos DPA), las opciones de administración y las políticas de retención de cada herramienta de programación.
