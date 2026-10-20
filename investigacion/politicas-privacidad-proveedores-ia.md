# Fuentes oficiales: privacidad y tratamiento de datos en herramientas de IA

**Proyecto:** charla «¿Le puedo dar las claves? IA agéntica, código y secretos de cliente» — DevFest Córdoba 2026  
**Estado:** inventario inicial de fuentes oficiales. La recopilación de enlaces no equivale a una verificación completa de cada condición contractual.  
**Fecha de revisión:** 20 de octubre de 2026

## Objetivo

Centralizar las fuentes oficiales que permitan comparar cómo se tratan prompts, código fuente, archivos, conversaciones, memoria, datos de uso y credenciales en cinco proveedores o productos iniciales:

1. OpenAI / ChatGPT y API.
2. Anthropic / Claude y API.
3. Google / Gemini, Workspace y Gemini API.
4. GitHub Copilot.
5. Cursor.

La comparación se hará por **producto y modalidad de contratación**, no solo por marca. Las condiciones de una aplicación de consumo no deben extrapolarse a la API o a un plan empresarial. En herramientas de programación se revisarán tanto las condiciones de la herramienta como las de los proveedores de modelos que intervienen.

## Aspectos que se investigarán

1. **Entrenamiento y mejora de modelos:** qué datos se pueden usar, valores por defecto, exclusión voluntaria y diferencias por plan.
2. **Retención y eliminación:** plazos por tipo de dato, borrado de conversaciones y archivos, copias de seguridad y excepciones.
3. **Zero Data Retention (ZDR):** disponibilidad, requisitos, servicios cubiertos y excepciones.
4. **Memoria, historial y modo temporal:** qué se guarda, qué controles existen y qué no impide cada opción.
5. **Acceso humano y prevención de abusos:** revisión de contenido, soporte, feedback y registros de seguridad.
6. **Tratamiento técnico:** cifrado, localización, transferencias internacionales y subencargados.
7. **Condiciones contractuales:** términos de consumo y comerciales, DPA/acuerdo de tratamiento y compromisos de confidencialidad.
8. **Agentes de programación:** contexto de repositorios, indexación, terminal, ejecución remota, conectores, sesiones y credenciales.
9. **Administración organizativa:** controles de administración, políticas obligatorias y visibilidad de las personas administradoras.
10. **Evidencias:** enlace al apartado exacto, fecha de consulta, última actualización indicada y nivel de certeza.

En la matriz se distinguirán **garantía contractual**, **comportamiento documentado**, **opción de configuración** e **información comercial**. No se interpretará «no se usa para entrenar» como «no se conserva», ni ZDR como ausencia absoluta de procesamiento o de registros.

---

## 1. OpenAI — ChatGPT y API

### Privacidad y condiciones
- [Política de privacidad (región EEE/Reino Unido y otros países)](https://openai.com/es-ES/policies/row-privacy-policy/)
- [Condiciones de uso para particulares](https://openai.com/es-US/policies/row-terms-of-use/)
- [Condiciones comerciales](https://openai.com/policies/business-terms/)
- [Privacidad empresarial](https://openai.com/enterprise-privacy/)
- [Anexo sobre el tratamiento de datos (DPA, versión aplicable desde el 1 de enero de 2026)](https://openai.com/es-ES/policies/data-processing-addendum/)

### Controles, retención y API
- [Controles de datos de ChatGPT](https://help.openai.com/en/articles/7730893-data-controls-faq)
- [Preguntas frecuentes sobre chat temporal](https://help.openai.com/en/articles/8914046-temporary-chat-faq)
- [Preguntas frecuentes sobre memoria](https://help.openai.com/en/articles/8590148-memory-faq)
- [Uso de datos para mejorar modelos en la API](https://platform.openai.com/docs/guides/your-data)
- [Política sobre uso de datos de API para mejorar el rendimiento de modelos](https://openai.com/policies/how-your-data-is-used-to-improve-model-performance/)

**Verificar por separado:** Free/Plus/Pro frente a Business/Enterprise/Edu; historial y memoria; chat temporal; retención de registros de seguridad; condiciones de API y alcance de ZDR.

---

## 2. Anthropic — Claude y API

### Privacidad y condiciones
- [Política de privacidad](https://www.anthropic.com/legal/privacy)
- [Condiciones de servicio para consumidores](https://www.anthropic.com/legal/consumer-terms)
- [Condiciones comerciales](https://www.anthropic.com/legal/commercial-terms)
- [Centro de privacidad de Claude](https://privacy.claude.com/)
- [Centro de privacidad y seguridad de Anthropic](https://privacy.anthropic.com/)

### API y retención
- [Retención de datos de la API de Claude](https://platform.claude.com/docs/en/manage-claude/api-and-data-retention)

**Verificar por separado:** Free/Pro/Max frente a Team/Enterprise; uso de conversaciones para mejora de modelos; feedback y revisión por seguridad; eliminación y plazos de retención; API y requisitos de ZDR; Claude Code y herramientas conectadas.

---

## 3. Google — Gemini, Google Workspace y Gemini API

### Privacidad y condiciones
- [Política de privacidad de Google](https://policies.google.com/privacy)
- [Condiciones del servicio de Google](https://policies.google.com/terms)
- [Aviso de privacidad de las aplicaciones Gemini](https://support.google.com/gemini/answer/13594961)
- [Ayuda de privacidad de las aplicaciones Gemini](https://support.google.com/gemini/answer/13278892)
- [Privacidad de la IA generativa en Google Workspace](https://workspace.google.com/intl/es/security/ai-privacy/)

### API y ZDR
- [Retención cero de datos en Gemini API](https://ai.google.dev/gemini-api/docs/zdr)
- [Condiciones adicionales de los servicios de IA generativa de Google](https://ai.google.dev/gemini-api/terms)

**Verificar por separado:** Gemini de consumo frente a Workspace y Gemini API; actividad y revisión humana; plazos de conservación; ajustes administrados; servicios y funciones de API excluidos de ZDR. No asumir que las condiciones de Workspace se aplican a una cuenta personal de Gemini.

---

## 4. GitHub Copilot

### Privacidad, condiciones y configuración
- [Declaración de privacidad de GitHub](https://docs.github.com/es/site-policy/privacy-policies/github-privacy-statement)
- [Administrar las políticas de Copilot como suscriptor individual](https://docs.github.com/es/copilot/how-tos/manage-your-account/managing-copilot-policies-as-an-individual-subscriber)
- [Datos de sesión de GitHub Copilot](https://docs.github.com/es/copilot/concepts/security-governance-and-network-settings/session-data)
- [Planes de GitHub Copilot](https://docs.github.com/es/copilot/get-started/plans)
- [Términos de GitHub para productos y funciones adicionales](https://docs.github.com/es/site-policy/github-terms/github-terms-for-additional-products-and-features)

**Verificar por separado:** Free/Pro/Pro+ frente a Business/Enterprise; controles de uso para entrenamiento; prompts, sugerencias y fragmentos de código; almacenamiento y sincronización de sesiones; sesiones de agentes en la nube; políticas administradas por la organización y uso de modelos de terceros.

**Observación para comprobar antes de citar:** la documentación de GitHub describe condiciones de uso para entrenamiento diferentes según la modalidad individual o empresarial. Registrar la fecha y el plan exacto al completar la matriz.

---

## 5. Cursor

### Privacidad, condiciones y documentación técnica
- [Política de privacidad](https://cursor.com/privacy)
- [Condiciones del servicio](https://cursor.com/terms-of-service)
- [Uso de datos y privacidad](https://cursor.com/data-use)
- [Documentación de privacidad y seguridad](https://docs.cursor.com/account/privacy)
- [Seguridad de Cursor](https://cursor.com/security)

**Verificar por separado:** planes individuales frente a Teams/Enterprise; modos de privacidad y diferencias entre sus variantes; indexación del código; solicitudes enviadas a proveedores de modelos; registros de seguridad y excepciones por abuso; agentes, terminal, herramientas y conectores.

---

## Matriz de comparación por completar

| Proveedor/producto | Modalidad | Entrenamiento | Retención y borrado | ZDR | Memoria / modo temporal | Revisión humana y seguridad | DPA / garantías | Fecha de verificación |
|---|---|---|---|---|---|---|---|---|
| ChatGPT | Free / Plus / Pro | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| ChatGPT | Business / Enterprise / Edu | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| OpenAI API | API | Pendiente | Pendiente | Pendiente | No aplica / revisar funciones | Pendiente | Pendiente | Pendiente |
| Claude | Free / Pro / Max | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| Claude | Team / Enterprise | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| Claude API | API | Pendiente | Pendiente | Pendiente | No aplica / revisar funciones | Pendiente | Pendiente | Pendiente |
| Gemini | Aplicación de consumo | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente | Pendiente |
| Gemini | Google Workspace | Pendiente | Pendiente | Pendiente | Según producto | Pendiente | Pendiente | Pendiente |
| Gemini API | API | Pendiente | Pendiente | Pendiente | No aplica / revisar funciones | Pendiente | Pendiente | Pendiente |
| GitHub Copilot | Free / Pro / Pro+ | Pendiente | Pendiente | Pendiente / no asumir | Sesiones y agentes | Pendiente | Pendiente | Pendiente |
| GitHub Copilot | Business / Enterprise | Pendiente | Pendiente | Pendiente / no asumir | Sesiones y agentes | Pendiente | Pendiente | Pendiente |
| Cursor | Individual | Pendiente | Pendiente | Privacy Mode y alcance por verificar | Contexto e indexación | Pendiente | Pendiente | Pendiente |
| Cursor | Teams / Enterprise | Pendiente | Pendiente | Controles y contrato por verificar | Contexto e indexación | Pendiente | Pendiente | Pendiente |

## Cómo registrar cada hallazgo

Para cada dato de la matriz:
- Añadir un enlace directo a la fuente oficial que respalda la afirmación.
- Registrar la fecha de consulta y la fecha de actualización de la fuente, si consta.
- Indicar el producto, plan, región y función a los que se aplica.
- Separar valor predeterminado, opción configurable y compromiso contractual.
- Documentar excepciones (seguridad, prevención de abusos, obligaciones legales, soporte, feedback o datos anonimizados).
- Si la documentación pública no permite resolverlo, indicar: **«No determinado en la documentación pública; confirmar con el proveedor o el contrato»**.

## Ampliaciones posibles

La selección inicial se limita a cinco productos/proveedores. Se podrán añadir Microsoft Copilot/Azure AI, Mistral o Amazon Bedrock si el entorno de uso o una modalidad contractual distinta lo justifica. No son necesarios para completar la primera comparación.

## Resultado esperado para la charla

La investigación extensa servirá como respaldo. Las diapositivas deberían sintetizar seis cuestiones:
1. Uso de datos para entrenar modelos.
2. Retención, eliminación y excepciones.
3. ZDR y su alcance real.
4. Diferencias entre consumo, empresarial y API.
5. Información que puede enviar una herramienta de programación, más allá del prompt.
6. Garantías contractuales y controles técnicos que debe aplicar el equipo.

**Nota:** este inventario no es un dictamen jurídico ni una certificación de cumplimiento. Los enlaces deben revisarse periódicamente y las conclusiones finales deben basarse en las condiciones vigentes del producto y contrato realmente utilizados.
