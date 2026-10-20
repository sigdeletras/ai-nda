# Glosario de la charla

Definiciones breves para mantener un vocabulario coherente en el guion y las diapositivas. No sustituyen la documentación contractual, técnica o normativa aplicable.

## Términos

**Agencia Española de Protección de Datos (AEPD).** Autoridad de control española en materia de protección de datos personales. Publica criterios, preguntas frecuentes y guías para ayudar a interpretar y aplicar la normativa. [Web oficial](https://www.aepd.es/).

**Agente de programación (coding agent).** Herramienta de IA que, además de generar respuestas o código, puede ejecutar acciones sobre un proyecto mediante las herramientas y permisos disponibles.

**Anonimización.** Proceso por el que la información deja de permitir identificar a una persona por medios razonablemente probables. Quitar solo nombres o identificadores directos no garantiza una anonimización efectiva.

**Autorización.** Permiso concedido a una identidad, aplicación o proceso para realizar una acción concreta. La autenticación identifica; la autorización determina qué puede hacer.

**Confidencialidad.** Obligación de evitar que información protegida se divulgue o utilice fuera de las condiciones autorizadas. Puede derivarse de contratos, NDA, normativa u otras obligaciones.

**Credencial.** Elemento que permite acreditar una identidad o acceder a un sistema, como una contraseña, token, clave API o certificado.

**Datos personales.** Información sobre una persona física identificada o identificable, según el RGPD. No toda información confidencial es un dato personal, ni todo dato personal es necesariamente confidencial en el mismo sentido.

**Datos sintéticos.** Datos generados artificialmente para pruebas o demostraciones. Deben revisarse para comprobar que no contienen datos reales, secretos o información sensible reproducida.

**Encargado del tratamiento.** Persona u organización que trata datos personales por cuenta del responsable del tratamiento y siguiendo sus instrucciones, conforme al RGPD.

**Entorno de desarrollo, pruebas y producción.** Entornos separados para construir cambios, validarlos y prestar el servicio real. La separación reduce riesgos si se acompaña de permisos, datos y credenciales diferenciados.

**Exfiltración de datos.** Transferencia no autorizada de información desde un sistema hacia otro destino, ya sea de forma deliberada o accidental.

**Guías de la AEPD.** Documentos prácticos de la Agencia Española de Protección de Datos que ofrecen orientaciones sobre la aplicación de la normativa en materias concretas. Ayudan a interpretar obligaciones, pero no sustituyen la ley ni el análisis del caso.

**Gestión de secretos (secrets management).** Prácticas y herramientas para almacenar, distribuir, utilizar, rotar y revocar credenciales y otros secretos evitando su exposición innecesaria.

**Instrucciones del agente.** Reglas en lenguaje natural o archivos de configuración que orientan el comportamiento del agente. Por sí solas no equivalen a una barrera de seguridad ni garantizan que una acción esté técnicamente bloqueada.

**LOPDGDD (Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales).** Ley española que adapta y complementa el marco europeo de protección de datos e incorpora garantías de derechos digitales. Se aplica junto con el RGPD. [Texto consolidado en el BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673).

**Mínimo privilegio (least privilege).** Principio según el cual cada persona, proceso o agente recibe solo los permisos necesarios, durante el tiempo necesario, para realizar su tarea.

**NDA (Non-Disclosure Agreement).** Acuerdo de confidencialidad que establece obligaciones sobre la información protegida, sus usos permitidos y las condiciones de divulgación. Su alcance depende del texto firmado y del contexto contractual.

**Permiso.** Capacidad autorizada para leer, modificar, ejecutar, borrar o compartir un recurso. Conviene distinguir los permisos configurados en la herramienta de los límites impuestos por el sistema operativo, la plataforma o la infraestructura.

**Prompt injection.** Técnica de ataque que intenta manipular un modelo mediante instrucciones maliciosas incluidas en una entrada, archivo, página web u otra fuente de contenido. Puede intentar que el agente ignore instrucciones previas o use herramientas de forma indebida.

**RGPD (Reglamento General de Protección de Datos).** Reglamento (UE) 2016/679 que establece las reglas europeas para tratar datos personales, los derechos de las personas y las obligaciones de responsables y encargados. [Texto oficial en EUR-Lex](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679).

**Retención de datos.** Periodo durante el cual un proveedor conserva entradas, salidas, registros u otros datos asociados al servicio. Las condiciones pueden variar según producto, plan, configuración y tipo de dato.

**Responsable del tratamiento.** Persona u organización que determina los fines y medios del tratamiento de datos personales.

**Secretos de cliente.** Credenciales, tokens, claves, certificados u otros elementos de acceso vinculados a sistemas o servicios de un cliente. No deben incorporarse a prompts, repositorios o registros salvo que exista una necesidad y un control expresamente aprobados.

**Seudonimización.** Tratamiento que sustituye identificadores por otros valores, de modo que la atribución a una persona requiere información adicional separada. Los datos seudonimizados siguen sujetos al RGPD.

**Suscripción de pago.** Modalidad comercial que da acceso a determinadas funciones y condiciones. Pagar por un servicio no implica por sí mismo retención cero, procesamiento local ni una garantía general de confidencialidad.

**Tratamiento de datos.** Operación realizada sobre datos personales, como recogida, consulta, uso, almacenamiento o comunicación. En el contexto del RGPD, las funciones y obligaciones de cada parte dependen del tratamiento concreto.

**Uso para entrenamiento.** Utilización de entradas, salidas u otros datos para entrenar o mejorar modelos. Debe verificarse en las condiciones aplicables al producto, plan, cuenta y configuración concretos.

**Zero Data Retention (ZDR, retención cero de datos).** Condición o modalidad bajo la que un servicio no conserva determinados datos después de procesarlos, con el alcance y las excepciones definidos por el proveedor. No significa automáticamente que todo el servicio funcione localmente ni que no existan otros registros o metadatos.

## Distinciones que conviene mantener

- **Instrucción no es control técnico:** pedir al agente que no lea un archivo no garantiza que carezca de acceso a él.
- **Pago no es garantía de privacidad:** las condiciones dependen del producto, el plan y la configuración.
- **No entrenar no es no retener:** un proveedor puede no usar datos para entrenar y conservarlos durante un periodo.
- **ZDR no es procesamiento local:** el primero describe una política de retención; el segundo, dónde se ejecuta el procesamiento.
- **NDA no equivale a cumplimiento automático:** hay que comprobar el alcance contractual y cómo se usan las herramientas en la práctica.
- **Confidencialidad no equivale a protección de datos:** son ámbitos relacionados, pero distintos.
- **Anonimización no es seudonimización:** solo la anonimización efectiva puede dejar la información fuera del ámbito del RGPD.

## Criterio para ampliar el glosario

A medida que se desarrolle el guion, incorporar términos cuando sean necesarios para entender una diapositiva, una demostración o una decisión práctica. Priorizar definiciones breves, neutrales respecto al proveedor y respaldadas por fuentes oficiales cuando describan garantías comerciales, funciones técnicas o conceptos normativos. Evitar añadir términos solo por ser habituales en el sector.

**Pendientes de valorar según avance la charla:** sandboxing, ejecución aislada, control de acceso, registro de auditoría, respuesta a incidentes, minimización de datos y evaluación de impacto.
