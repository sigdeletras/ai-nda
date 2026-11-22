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
> **Patricio Soriano**  
> Geógrafo y desarrollador. Responsable del Área de GIS y Desarrollo · Geoinnova · @sigdeletras
>
> **Revisión interna**  
> Uso de herramientas de IA en el trabajo diario.
>
> Hallazgo: uso de la API de Jira incompatible con un compromiso de confidencialidad.

**Notas del ponente**

- Presentar brevemente el perfil y Geoinnova.
- Explicar que la charla nace de una revisión interna del uso de herramientas.
- Contar el caso Jira solo con el nivel de detalle autorizado. No identificar cliente, proyecto, contrato, personas ni circunstancias que permitan reconstruirlo.
- No atribuir al proveedor un uso concreto de los datos si no está documentado.
- El problema no es señalar a quien utilizó la herramienta, sino reconocer que podemos desconocer qué información sale del entorno y qué compromisos ha asumido la empresa.
- Transición: antes de hablar de herramientas, recordar qué hemos comprometido con los clientes.

## 2. NDA y marco legal — 3:00

**Texto visible**

> La confidencialidad también se aplica a la IA
>
> **Qué protegemos:** NDA · Contratos · Información confidencial  
> **Qué debemos cumplir:** RGPD · ENS (cuando aplique) · Reglamento europeo de IA
>
> Cláusulas habituales: no divulgación · notificación de incidentes · devolución o destrucción.
>
> No introducir información confidencial en servicios de terceros sin autorización y garantías adecuadas.

**Notas del ponente**

- Explicar qué protege un NDA y que también existen compromisos en contratos de prestación de servicios.
- Diferenciar confidencialidad contractual de protección de datos personales: el RGPD añade obligaciones específicas.
- Mencionar el ENS (RD 311/2022) en su ámbito de aplicación y el Reglamento europeo de IA sin convertir la slide en un repaso normativo.
- Destacar alfabetización en IA y que las obligaciones dependen del papel y del caso de uso. Comprobar fechas y alcance normativo antes del ensayo final.
- Mostrar cláusulas habituales y presentar la previsión específica para IA como criterio para revisar con asesoría jurídica, no como texto contractual definitivo.
- La suscripción de pago no modifica automáticamente las obligaciones.
- No ofrecer asesoramiento jurídico.

## 3. Agentes de programación — 3:00

**Texto visible**

> Un agente no solo genera código
>
> **Leer y modificar:** repositorio · ficheros · código · configuración  
> **Ejecutar:** terminal · scripts · herramientas  
> **Conectarse:** APIs · servicios · repositorios  
> **Alcance potencial:** .env · tokens · datos de cliente · código propietario
>
> Del agente conectado al entorno a la factoría de software.

**Notas del ponente**

- Diferenciar un chatbot de un agente conectado al entorno de desarrollo.
- Según herramienta, sistema operativo, permisos e integraciones, puede leer archivos, modificar código, ejecutar comandos y utilizar servicios.
- Puede encontrar información que el desarrollador no ha incluido expresamente en el prompt.
- No afirmar que todo lo que ve se envía necesariamente al proveedor: el contexto necesario para procesar una tarea puede transmitirse según el producto.
- Introducir brevemente que los agentes pueden organizarse en flujos de trabajo o factorías, con especificaciones, tareas, herramientas y validaciones. No desarrollar SDD aquí.
- Transición: el riesgo depende de cómo incorporamos estas capacidades al trabajo diario.

## 4. Nuestro contexto — 1:30

**Texto visible**

> IA comercial en equipos de desarrollo reales
>
> **El escenario:** empresa mediana, sin modelos ni infraestructura propios.  
> **El día a día:** Claude Code · Codex · Cursor. Suscripciones de pago y repositorios de trabajo.
>
> No hace falta operar un modelo propio para aplicar controles.

**Notas del ponente**

- Describir el escenario de muchas pymes: equipos que utilizan servicios comerciales porque son accesibles y productivos.
- La charla no exige despliegue local. Se centra en modalidades comerciales adecuadas para uso profesional, no en cuentas gratuitas o personales.
- Los nombres son ejemplos, no recomendaciones ni avales.
- La cuestión es cómo trabajar con garantías razonables en este contexto.

## 5. Privacidad y proveedores — 4:00

**Texto visible**

> ¿Qué prometen los proveedores?
>
> - **Entrenamiento:** ¿Se usan los datos para entrenar o mejorar modelos?
> - **Retención:** ¿Cuánto tiempo se conservan prompts, archivos y registros?
> - **ZDR:** ¿Qué datos y servicios cubre la no retención?
> - **Ubicación y acceso:** ¿Dónde se procesan y quién puede acceder?
> - **Contrato:** ¿Qué garantías son exigibles para este producto y plan?
>
> Pago ≠ no entrenamiento ≠ ZDR ≠ procesamiento local

**Notas del ponente**

- Utilizar la tabla comparativa y capturas oficiales como apoyo; no leer fila por fila.
- Entrenamiento, retención y ZDR son conceptos distintos. Una política de no entrenamiento no equivale a no retención.
- ZDR es una modalidad o garantía específica, sujeta a alcance, producto y excepciones; no significa necesariamente que no existan registros operativos o metadatos.
- La suscripción de pago no implica automáticamente ZDR, procesamiento local ni garantías idénticas en todos los productos.
- La ubicación y las transferencias internacionales deben revisarse en la documentación contractual y de privacidad aplicable.
- Cerrar con qué comprobar: producto exacto, plan, entrenamiento, retención, subencargados, ubicación, controles administrativos y contrato.
- Indicar la fecha de consulta de la comparativa.

## 6. Configuración segura del software — 3:30

**Texto visible**

> Controles que protegen con o sin IA
>
> **Secretos:** fuera del repositorio y del contexto del agente.  
> **Mínimo privilegio:** tokens limitados, permisos mínimos y caducidad.  
> **Entornos:** desarrollo y pruebas separados de producción.  
> **Datos:** sintéticos o anonimizados cuando sea posible.
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
- Utilizar la Cheat Sheet de OWASP para seleccionar controles y el Top 10 for Agentic Applications para reconocer amenazas. Destacar solo las más vinculadas al desarrollo: inyección indirecta/secuestro de objetivos (ASI01), uso indebido de herramientas (ASI02), abuso de privilegios (ASI03), cadena de suministro (ASI04) y ejecución de código inesperada (ASI05). No convertir la slide en un repaso de las diez categorías.

## 7. Configurar los asistentes — 4:00

**Texto visible**

> Las reglas orientan. Los permisos limitan.
>
> **Configuración del agente:** harness y reglas · archivos de exclusión · permisos de herramientas · control de comandos.
>
> **Política de equipo:** herramientas y datos permitidos · condiciones del proveedor · supervisión y restricciones del cliente.
>
> Los secretos deben quedar fuera de su alcance.

**Notas del ponente**

- Explicar harness como conjunto de instrucciones, herramientas, permisos, contexto y mecanismos de ejecución que rodean al modelo.
- Mostrar ejemplos no sensibles de reglas, exclusiones, permisos de lectura/escritura y confirmaciones para comandos.
- AGENTS.md y equivalentes establecen pautas, pero no son barreras de seguridad.
- Diferenciar excluir un archivo del contexto de retirar el permiso real de acceso. Verificar el comportamiento de cada herramienta y aplicar controles en sistema de archivos, entorno o integración.
- Mantener secretos fuera de las carpetas y servicios accesibles al agente siempre que sea posible; no confiar solo en «no leas .env».
- Proponer un anexo interno con herramientas autorizadas, información permitida/restringida/prohibida, condiciones del proveedor, permisos, supervisión, respuesta y restricciones del cliente.
- No hace falta pedir autorización para cada uso rutinario si existe política aprobada y clasificación clara; escalar excepciones.

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
> La confianza con el cliente se gestiona con contrato, configuración y transparencia.

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
> Documentación oficial de privacidad y condiciones de proveedores  
> RGPD · LOPDGDD · AEPD  
> Real Decreto 311/2022 · Esquema Nacional de Seguridad  
> Reglamento europeo de IA (AI Act)

**Notas del ponente**

Diapositiva de consulta. En el repositorio quedan los enlaces a la Cheat Sheet y al Top 10 oficial. Como lectura complementaria en español, consultar el artículo de NeuralTrust. No desarrollar las diez amenazas durante la charla; utilizar el marco para seleccionar ejemplos relacionados con herramientas, permisos, contexto y ejecución de código.

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
