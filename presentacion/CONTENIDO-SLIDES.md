# Contenido de las diapositivas

Documento editorial de la presentación **«¿Le puedo dar las claves? IA agéntica, código y secretos de cliente»**.

- **Evento:** La previa cordobesa de la DevFest · GDG Córdoba
- **Fecha:** 27 de noviembre de 2026
- **Duración:** 25 minutos + 5 minutos de preguntas
- **Presentación:** https://sigdeletras.github.io/ai-nda/
- **Implementación:** `src/slides.js`

Este documento recoge el texto visible y las notas del ponente. Mantenerlo sincronizado con `slides.js`. Las notas son ayudas para la representación, no un texto para leer literalmente. En la vista de ponente (tecla S) cada nota tiene dos bloques: **Guion** (qué decir, en orden, con transición) y **Referencia y límites** (avisos, matices y trasfondo que no se dicen en voz alta).

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

**GUION · portada**

- Abrir con la pregunta del título: «¿Le puedo dar las claves?».
- Qué veremos: qué autorizamos al conectar agentes de programación a nuestro entorno y qué hemos prometido a los clientes.
- Transición: empiezo por un caso de mi equipo.

**REFERENCIA Y LÍMITES**

- La portada no tiene desarrollo adicional. 25 min + 5 de preguntas.

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

**GUION · 01 · El caso Jira · 2:30**

- Quién soy: qué es Geoinnova (una frase).
- Origen: revisión interna del uso de IA en el equipo de desarrollo que coordino.
- El caso: surgió la duda de conectar la IA con el Jira de un cliente. Fue una consulta, no algo que se hiciera.
- Idea: no se trata de señalar a nadie, sino de reconocer que podemos desconocer qué información sale del entorno y qué hemos comprometido.
- Transición: antes de hablar de herramientas, qué hemos comprometido con los clientes.

**REFERENCIA Y LÍMITES**


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

**GUION · 02 · NDA y marco legal · 3:00 junto con 02 bis**

- Pregunta a la sala: ¿quién ha visto un NDA? Contrato de confidencialidad de ciertos proyectos, sobre todo grandes; condiciona todo el trabajo con el cliente.
- Cláusula real anonimizada. Señalar: 1 «autorización previa y escrita», 2 «inteligencia artificial generativa», 3 «reutilización por terceros».
- Contraste: hay cláusulas genéricas que no nombran la IA («ni directamente ni a través de sus empleados, subcontratistas, agentes o terceros, revelarlos… cederlos…»). ¿Un proveedor de IA es un «tercero»?
- **Mensaje clave:** el contrato establece obligaciones; no configura el agente ni impide por sí mismo una exposición.
- Transición: qué suele recoger un NDA que afecte a la IA.

**REFERENCIA Y LÍMITES**

- Algunos NDA ya incluyen cláusulas específicas sobre IA; aunque no, otras (no revelar, no ceder a terceros) afectan igualmente.
- Confidencialidad contractual no es protección de datos personales: el RGPD añade obligaciones específicas.
- Mencionar el ENS (RD 311/2022) en su ámbito y el Reglamento europeo de IA sin repaso normativo; destacar la alfabetización en IA. Comprobar fechas y alcance antes del ensayo final.
- La suscripción de pago no modifica automáticamente las obligaciones.
- No identificar al cliente ni el contrato. No ofrecer asesoramiento jurídico.

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

**GUION · 02 bis · Aspectos clave de los NDA · 3:00 junto con 02**

- Antes de decidir si se puede usar Cursor, Claude Code, Copilot u otro agente, clasificar contractualmente el proyecto.
- Seis puntos. La etiqueta IA marca los que afectan directamente: terceros, subcontratistas, ubicación y entrenamiento. No hay leyenda en pantalla: la explico yo.
- Recuperar la pregunta: ¿un proveedor de IA es un tercero? Puede encajar como subcontratista o encargado del tratamiento.
- Si el contrato prohíbe dar información a terceros no autorizados, que el proveedor no entrene puede ser irrelevante: se la damos para que la procese.
- Cierre en pantalla: «Antes de preguntar si entrenan, pregunta si puedes dárselos».
- Transición: qué hace realmente un agente en nuestro entorno.

**REFERENCIA Y LÍMITES**

- Depende de la redacción de la cláusula; validar con asesoría jurídica. No ofrecer asesoramiento jurídico.
- Terceros: el proveedor lo es. Subcontratistas: puede serlo. Ubicación: dónde se procesan los datos. Entrenamiento: solo aplica a modelos. Datos personales y Seguridad y accesos son generales (sin etiqueta).
- Con datos personales entra el RGPD: control de cadenas de tratamiento y transferencias internacionales; fuera del EEE, decisiones de adecuación o cláusulas contractuales tipo cuando correspondan.
- Enlazar después con la slide de proveedores. Los nombres de herramientas son ejemplos, no recomendaciones.

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

**GUION · 03 · Agentes de programación · 3:00**

- Chatbot: tú le pegas el texto; solo ve lo que pegas.
- Agente: conectado al entorno de desarrollo; lee archivos, modifica código, ejecuta comandos y usa servicios.
- Factoría: flujos de agentes con especificaciones, tareas y validaciones. Se delega parte de las decisiones a la IA para reducir carga humana: enlace con *human in the loop* (qué decisiones siguen necesitando a una persona).
- Cierre en pantalla: cada paso amplía lo que puede encontrar. Los puntos suspensivos: la lista es la de hoy y puede crecer.
- Transición: el riesgo depende de cómo incorporamos estas capacidades al trabajo diario.

**REFERENCIA Y LÍMITES**

- El alcance real depende de herramienta, sistema operativo, permisos e integraciones.
- Puede encontrar información que el desarrollador no incluyó en el prompt (.env, tokens, código propietario, configuraciones, datos de clientes).
- No afirmar que todo lo que ve se envía al proveedor: el contexto necesario para procesar una tarea puede transmitirse según el producto.
- Las especificaciones también valen con un agente individual. No desarrollar SDD aquí.

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

**GUION · 04 · Nuestro contexto · 1:30**

- Escenario de muchas pymes: equipo mediano, suscripciones de pago, sin modelos ni infraestructura propios.
- Otros caminos, una frase cada uno: cloud contratado, infraestructura propia, modelo local.
- Nos centramos en el comercial: conocer cómo trata el proveedor los datos y bajo qué condiciones.
- Transición: qué prometen los proveedores.

**REFERENCIA Y LÍMITES**

- Modelo local: los datos se quedan en el equipo, pero exige capacidad (memoria gráfica, RAM, rendimiento) y limita la calidad del modelo. No dar cifras: cambian rápido.
- Local no es automáticamente seguro: quita al proveedor de la cadena, pero siguen aplicando secretos, permisos, extensiones e integraciones.
- Servicios cloud contratados pueden solaparse con alguna fila de la tabla (p. ej. Azure AI Foundry).
- Foco en modalidades comerciales de uso profesional, no cuentas gratuitas o personales. No desarrollar los otros caminos. Nombres = ejemplos.

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
