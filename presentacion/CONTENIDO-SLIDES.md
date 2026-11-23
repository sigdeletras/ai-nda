# Contenido de las diapositivas

Documento editorial de la presentación **«¿Le puedo dar las claves? IA agéntica, código y secretos de cliente»**.

- **Evento:** La previa cordobesa de la DevFest · GDG Córdoba
- **Fecha:** 27 de noviembre de 2026
- **Duración:** 25 minutos + 5 minutos de preguntas
- **Presentación:** https://sigdeletras.github.io/ai-nda/
- **Implementación:** `src/slides.js`

Este documento recoge el texto visible y las notas del ponente. Mantenerlo sincronizado con `slides.js`. Las notas son ayudas para la representación, no un texto para leer literalmente.

## Distribución temporal

| Slide | Contenido | Tiempo |
|---|---|---:|
| 1 | El caso Jira | 2:30 |
| 2 | NDA y marco legal | 3:00 |
| 3 | Agentes de programación | 3:00 |
| 4 | Nuestro contexto | 1:30 |
| 5 | Proveedores y privacidad | 4:00 |
| 6 | Configuración segura del software | 3:30 |
| 7 | Configurar los asistentes | 4:00 |
| 8 | Conclusiones | 3:30 |
| | **Total** | **25:00** |

La portada, las referencias y el cierre no tienen desarrollo adicional. Las preguntas ocupan los cinco minutos posteriores.

---

## Portada

**Texto visible**

> LA PREVIA CORDOBESA · DEVFEST 2026  
> ¿Le puedo dar las claves?  
> IA agéntica, código y secretos de cliente  
> Patricio Soriano · Geoinnova

**Notas del ponente**

Abrir con la pregunta del título. Presentar qué autorizamos cuando conectamos agentes de programación a nuestro entorno y qué compromisos tenemos con los clientes.

## 1. El caso Jira — 2:30

**Texto visible**

> ¿Qué información le estamos dando a la IA sin darnos cuenta?
>
> **Punto de partida**  
> La IA ya está en la empresa
>
> **Coordinación**  
> Revisión interna
>
> **Duda**  
> Conectar con el Jira del cliente

**Notas del ponente**

- Presentar brevemente el perfil (geógrafo y desarrollador) y qué es Geoinnova.
- Explicar que la charla nace de una revisión interna del uso de la IA en el equipo de desarrollo, que coordino. Presentar el caso Jira como una consulta o propuesta surgida de esa revisión, no como algo que se haya hecho.
- Contar el caso Jira solo con el nivel de detalle autorizado. No identificar cliente, proyecto, contrato, personas ni circunstancias que permitan reconstruirlo.
- No atribuir al proveedor un uso concreto de los datos si no está documentado.
- El problema no es señalar a quien utilizó la herramienta, sino reconocer que podemos desconocer qué información sale del entorno y qué compromisos ha asumido la empresa.
- Transición: antes de hablar de herramientas, recordar qué hemos comprometido con los clientes.

## 2. NDA y marco legal — 3:00

**Texto visible**

> La confidencialidad también se aplica a la IA
>
> *Bloque de ejemplo (tipografía de código; real, anonimizado):*  
> 5. PROHIBICIÓN DE HERRAMIENTAS EXTERNAS E INTELIGENCIA ARTIFICIAL  
> Salvo **(1) autorización previa y escrita** del CLIENTE, la Parte Receptora no cargará la Información Confidencial en servicios públicos o compartidos de […] **(2) inteligencia artificial generativa** o entrenamiento de modelos, ni en plataformas que permitan su **(3) reutilización por terceros**.
>
> 1. Sin permiso previo y por escrito, no.  
> 2. Nombra la IA generativa y el entrenamiento de modelos.  
> 3. Tampoco en plataformas que reutilizan los datos.
>
> Contrato de confidencialidad (NDA) · cada vez más, con cláusulas expresas sobre la IA

**Notas del ponente**

- Muchos asistentes no han visto nunca un NDA: es un contrato de confidencialidad que se firma en ciertos proyectos, sobre todo grandes, y condiciona todo el trabajo con el cliente.
- Algunos NDA ya incluyen cláusulas específicas sobre IA; aunque no lo hagan, otras cláusulas afectan igualmente (no revelar ni ceder a terceros).
- El ejemplo es una cláusula real, anonimizada, que prohíbe cargar información confidencial en IA generativa sin autorización previa y escrita. Destacar «autorización previa y escrita», «inteligencia artificial generativa» y «reutilización por terceros». Contraste: hay cláusulas genéricas que no nombran la IA («ni directamente ni a través de sus empleados, subcontratistas, agentes o terceros, revelarlos… cederlos…»). Plantear: ¿un proveedor de IA es un «tercero»? No identificar al cliente ni el contrato.
- Diferenciar confidencialidad contractual de protección de datos personales: el RGPD añade obligaciones específicas.
- Mencionar el ENS (RD 311/2022) en su ámbito y el Reglamento europeo de IA sin repaso normativo; destacar la alfabetización en IA. Comprobar fechas y alcance antes del ensayo final.
- La suscripción de pago no modifica automáticamente las obligaciones. No ofrecer asesoramiento jurídico.
- **Mensaje clave:** el contrato establece obligaciones; no configura técnicamente el agente ni impide por sí mismo una exposición.

## 2 bis. Aspectos clave de los NDA que afectan a la IA

**Texto visible**

> Aspectos clave de los NDA que afectan a la IA
>
> El contrato puede:
>
> **Terceros [IA]**  
> Prohibir comunicar información a terceros.
>
> **Subcontratistas [IA]**  
> Exigir autorización previa.
>
> **Ubicación [IA]**  
> Limitar el alojamiento a la UE.
>
> **Datos personales**  
> Controlar las transferencias fuera de la UE.
>
> **Entrenamiento [IA]**  
> Prohibir usar la información para entrenar.
>
> **Seguridad y accesos**  
> Exigir medidas mínimas y personal autorizado.
>
> *[IA] = etiqueta que marca los aspectos que afectan directamente a la IA (sin leyenda en pantalla; la explicas tú).*
>
> **Antes de preguntar si entrenan, pregunta si puedes dárselos.**

**Notas del ponente**

- Antes de decidir si se puede usar Cursor, Claude Code, Copilot u otro agente, clasificar contractualmente el proyecto.
- El NDA o contrato puede establecer, explícita o implícitamente, cada uno de los seis puntos de la slide.
- Recuperar la pregunta anterior: ¿un proveedor de IA es un tercero? Puede encajar como subcontratista o encargado del tratamiento.
- Si el contrato prohíbe dar información confidencial a terceros no autorizados, que el proveedor no entrene con ella puede ser irrelevante: se le entrega para que la procese. Depende de la redacción; validar con asesoría jurídica.
- Con datos personales entra el RGPD: control de las cadenas de tratamiento y de las transferencias internacionales; fuera del EEE, decisiones de adecuación o cláusulas contractuales tipo cuando correspondan.
- Enlazar con la slide de privacidad y proveedores. Los nombres de herramientas son ejemplos. No ofrecer asesoramiento jurídico.

## 3. Agentes de programación — 3:00

**Texto visible**

> Del chatbot a la factoría: cada paso amplía el alcance
>
> **1 · Chatbot** — Tú le pegas el texto. Solo ve lo que pegas.
>
> **2 · Agente** — Lee, ejecuta y se conecta. Ve el proyecto y tu entorno.
>
> **3 · Factoría** — Flujos de agentes. Tareas, validaciones y delegación.
>
> *Cada paso amplía lo que puede encontrar: .env, tokens, datos de cliente, código propietario…*

**Notas del ponente**

- Diferenciar un chatbot de un agente conectado al entorno de desarrollo.
- Según herramienta, sistema operativo, permisos e integraciones, puede leer archivos, modificar código, ejecutar comandos y utilizar servicios.
- Puede encontrar información que el desarrollador no ha incluido expresamente en el prompt.
- No afirmar que todo lo que ve se envía necesariamente al proveedor: el contexto necesario para procesar una tarea puede transmitirse según el producto.
- Introducir brevemente que los agentes pueden organizarse en flujos de trabajo o factorías, con especificaciones, tareas, herramientas y validaciones. En la factoría se delega de forma automática parte de las decisiones a la IA, para ir reduciendo la carga de trabajo humana: enlace con el concepto de human in the loop. Las especificaciones también valen con un agente individual. No desarrollar SDD aquí.
- Transición: el riesgo depende de cómo incorporamos estas capacidades al trabajo diario.

## 4. Nuestro contexto — 1:30

**Texto visible**

> Cuatro caminos para usar IA en un equipo de desarrollo
>
> **Nuestro camino: suscripción comercial**  
> Empresa mediana, suscripciones de pago, sin modelos ni infraestructura propios. El proveedor trata los datos.
>
> **Otros caminos**  
> Servicios cloud contratados: modelos en tu propia cuenta cloud.  
> Infraestructura propia: servidores y modelos propios.  
> Modelo local: descargado en los equipos; depende de su capacidad.
>
> *Aquí nos centramos en el comercial: conocer sus condiciones.*

**Notas del ponente**

- Describir el escenario de muchas pymes: equipos que utilizan servicios comerciales porque son accesibles y productivos.
- La charla no exige despliegue local. Se centra en modalidades comerciales adecuadas para uso profesional, no en cuentas gratuitas o personales.
- Los nombres son ejemplos, no recomendaciones ni avales.
- La cuestión es cómo trabajar con garantías razonables en este contexto.

## 5. Privacidad y proveedores — 4:00

**Texto visible**

> ¿Qué prometen los proveedores?
>
> | Servicio profesional | No entrenamiento | ZDR | Matiz |
> |---|:---:|:---:|---|
> | ChatGPT Business / Enterprise | ✓ | — | Según plan y controles |
> | OpenAI API | ✓ | ◐ | 30 días; ZDR con aprobación |
> | Claude Team / Enterprise | ✓ | — | Según política organizativa |
> | Claude API / Code API | ✓ | ◐ | ZDR contractual; funciones excluidas |
> | Gemini API (pago) | ✓ | — | Registros limitados; funciones con estado |
> | GitHub Copilot Business / Enterprise | ✓ | ◐ | Depende del modelo y proveedor |
> | Cursor Teams / Enterprise | ✓* | ◐ | Privacy Mode; excepciones y agentes cloud |
> | Azure AI Foundry | ✓ | — | Modelos stateless; funciones con estado |
>
> ✓ sí, por defecto · ◐ depende del plan, modelo o configuración · — no es una garantía general
>
> *✓ no es retención cero. ZDR solo si se contrata. * Cursor: requiere Privacy Mode. Fuentes: 22/11/2026.*

**Notas del ponente**

- Utilizar la tabla comparativa y capturas oficiales como apoyo; no leer fila por fila.
- Entrenamiento, retención y ZDR son conceptos distintos. Una política de no entrenamiento no equivale a no retención.
- ZDR es una modalidad o garantía específica, sujeta a alcance, producto y excepciones; no significa necesariamente que no existan registros operativos o metadatos.
- La suscripción de pago no implica automáticamente ZDR, procesamiento local ni garantías idénticas en todos los productos.
- La ubicación y las transferencias internacionales deben revisarse en la documentación contractual y de privacidad aplicable.
- Cerrar con qué comprobar: producto exacto, plan, entrenamiento, retención, subencargados, ubicación, controles administrativos y contrato.
- Indicar la fecha de consulta de la comparativa.
- No clasificar proveedores: lo importante es saber qué condiciones aceptamos.
- **Mensaje clave:** no basta con conocer la marca ni con pagar; hay que comprobar el producto, el plan y sus condiciones concretas.

## 6. Configuración segura del software — 3:30

**Texto visible**

> Controles que protegen con o sin IA
>
> **Secretos:** fuera del repositorio y del contexto del agente.  
> **Mínimo privilegio:** tokens limitados, permisos mínimos y caducidad.  
> **Entornos:** desarrollo y pruebas separados de producción. Datos sintéticos o anonimizados.  
> **Proyecto:** revisar cambios, dependencias, extensiones y MCP. SAST y detección de secretos ayudan, pero no bloquean accesos.
>
> Referencia: OWASP AI Agent Security Cheat Sheet.

**Notas del ponente**

- Son medidas de seguridad del desarrollo que ya eran necesarias; los agentes hacen más importante aplicarlas.
- No guardar secretos en el repositorio ni incorporarlos al contexto. Un .env no es un gestor de secretos y .gitignore no impide que el agente lea un archivo.
- Utilizar tokens separados por finalidad, alcance limitado y caducidad; evitar credenciales personales o de producción.
- Separar desarrollo, pruebas y producción. Utilizar datos sintéticos o anonimizados.
- Revisar cambios, dependencias, extensiones e integraciones, incluidas herramientas MCP.
- SAST, análisis de dependencias y detección de secretos ayudan a encontrar problemas, pero no impiden por sí solos que un agente lea o transmita información.
- Citar SonarQube como ejemplo de SAST y Gitleaks como detector de secretos, sin explicar las herramientas.
- Utilizar la Cheat Sheet de OWASP para seleccionar controles y el Top 10 for Agentic Applications para reconocer amenazas. Destacar solo las más vinculadas al desarrollo: inyección indirecta/secuestro de objetivos (ASI01), uso indebido de herramientas (ASI02), abuso de privilegios (ASI03), cadena de suministro (ASI04) y ejecución de código inesperada (ASI05). No convertir la slide en un repaso de las diez categorías. Complementar con el GenAI LLM Top 10: prompt injection (LLM01), exposición de información sensible (LLM02), agencia excesiva (LLM03), cadena de suministro (LLM04) y exposición de contexto oculto (LLM08). El primero aborda riesgos de aplicaciones LLM y el segundo los específicos de sistemas agénticos.

## 7. Configurar los asistentes — 4:00

**Texto visible**

> Las reglas orientan. Los permisos limitan.
>
> **Configuración del agente:** harness y reglas · archivos de exclusión · permisos de herramientas · control de comandos.
>
> **Anexo de uso de IA:** herramientas y datos permitidos · condiciones del proveedor · supervisión y restricciones del cliente · política interna y procedimiento de respuesta.
>
> Los secretos deben quedar fuera de su alcance.

**Notas del ponente**

- Explicar harness como conjunto de instrucciones, herramientas, permisos, contexto y mecanismos de ejecución que rodean al modelo.
- Configuración específica según proveedor y herramienta. Mostrar ejemplos reales no sensibles de reglas, exclusiones, permisos de lectura/escritura y confirmaciones para comandos.
- AGENTS.md y equivalentes establecen pautas, pero no son barreras de seguridad.
- Diferenciar excluir un archivo del contexto de retirar el permiso real de acceso. Verificar el comportamiento de cada herramienta y aplicar controles en sistema de archivos, entorno o integración.
- Mantener secretos fuera de las carpetas y servicios accesibles al agente siempre que sea posible; no confiar solo en «no leas .env».
- Proponer un anexo interno con herramientas autorizadas, información permitida/restringida/prohibida, condiciones del proveedor, permisos, supervisión, respuesta y restricciones del cliente.
- No hace falta pedir autorización para cada uso rutinario si existe política aprobada y clasificación clara; escalar cuando el dato, el proveedor o la acción excedan lo autorizado.
- Diferenciar política organizativa y controles técnicos: se necesitan ambas capas.
- **Mensaje clave:** las reglas orientan al agente; los permisos del sistema son los que limitan lo que puede hacer.

## 8. Conclusiones — 3:30

**Texto visible**

> La confianza se gestiona con decisiones concretas
>
> 1. **Herramienta:** ¿Está autorizada y el plan es adecuado?
> 2. **Información:** ¿Puedo compartir estos datos?
> 3. **Accesos:** ¿Qué permisos y credenciales necesita?
> 4. **Entornos:** ¿Están separados y protegidos los secretos?
> 5. **Supervisión:** ¿Revisamos cambios y acciones de impacto?
> 6. **Respuesta:** ¿Sabemos actuar ante una exposición?
>
> La confianza con el cliente: contrato, configuración y transparencia.

**Notas del ponente**

- Recuperar la pregunta inicial: «¿Le puedo dar las claves?». No hay un sí o no universal: depende de qué claves, para qué tarea, con qué herramienta y bajo qué controles.
- Recorrer la lista sin desarrollar de nuevo cada bloque.
- No se trata de prohibir la IA ni de exigir infraestructura propia, sino de establecer límites proporcionados al riesgo.
- Si se produce una exposición: contener, revocar o rotar credenciales, evaluar el alcance y comunicar conforme al procedimiento aplicable.
- Cerrar con la frase final.

## Referencias

**Texto visible**

> OWASP AI Agent Security Cheat Sheet  
> OWASP Top 10 for Agentic Applications 2026 (ASI01–ASI10)  
> OWASP GenAI LLM Top 10 2026 (LLM01–LLM10)  
> Documentación oficial de privacidad y condiciones de proveedores  
> RGPD · LOPDGDD · AEPD  
> Real Decreto 311/2022 · Esquema Nacional de Seguridad  
> Reglamento europeo de IA (AI Act)

**Notas del ponente**

Diapositiva de consulta. El repositorio contiene los enlaces a los dos Top 10 oficiales y a la Cheat Sheet. El LLM Top 10 cubre riesgos de aplicaciones basadas en modelos; el Agentic Top 10, riesgos añadidos por autonomía y herramientas. NeuralTrust queda como lectura complementaria en español. No desarrollar las listas completas.

## Cierre y agradecimientos

**Texto visible**

> Gracias  
> ¿Le puedo dar las claves?  
> IA agéntica, código y secretos de cliente  
> Patricio Soriano · @sigdeletras · Geoinnova  
> Preguntas

**Notas del ponente**

Agradecer la atención y abrir los cinco minutos de preguntas. Tener a mano las referencias y documentos de apoyo. No improvisar respuestas jurídicas; indicar cuándo una cuestión depende del contrato, proveedor o contexto.

---

## Criterios de presentación

- Una idea principal por diapositiva.
- Texto visible breve; ampliar la explicación en las notas.
- Mantener el caso Jira anonimizado y limitado a hechos que se pueden compartir.
- No confundir ausencia de entrenamiento, retención cero y procesamiento local.
- Diferenciar controles técnicos del entorno y configuración del agente.
- Contrastar fuentes oficiales y fechas antes del ensayo.
- Ensayar con cronómetro: 25 minutos de exposición y 5 de preguntas.
