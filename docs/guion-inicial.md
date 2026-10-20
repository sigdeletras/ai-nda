# Guion inicial — ¿Le puedo dar las claves?
**Charla:** DevFest Córdoba 2026  
**Duración objetivo:** 40 minutos  
**Estado:** borrador inicial; actualizar cuando se acepten cambios de enfoque o contenido.

## Idea central
Usar IA agéntica para desarrollar software sin convertir la confidencialidad del cliente en una apuesta. El objetivo no es prohibir herramientas ni exigir modelos locales, sino tomar decisiones informadas y aplicar controles proporcionados.

## Estructura y tiempos

| Bloque | Tiempo | Objetivo |
|---|---:|---|
| 1. Apertura: la pregunta incómoda | 3 min | Presentar el dilema: ¿qué significa realmente dar acceso al agente? |
| 2. Qué puede ver y hacer un agente | 6 min | Explicar contexto, permisos, herramientas, terminal, repositorios y credenciales. |
| 3. Dónde viajan los datos | 6 min | Distinguir suscripción de pago, uso para entrenamiento, retención y Zero Data Retention. |
| 4. NDA y obligaciones reales | 5 min | Relacionar confidencialidad, datos personales y compromisos contractuales sin convertir la charla en asesoramiento jurídico. |
| 5. Controles que sí ayudan | 10 min | Aplicar mínimo privilegio, credenciales fuera del contexto, entornos de prueba, datos sintéticos y revisión de cambios. |
| 6. Incidentes: prevenir y responder | 4 min | Mostrar una pauta breve ante una exposición accidental: contener, revocar, evaluar y comunicar según el procedimiento. |
| 7. Cierre: reglas para el equipo | 6 min | Recapitular criterios prácticos y dejar una lista de decisiones aplicables. |
| **Total** | **40 min** | |

## Desarrollo por bloques

### 1. Apertura — 3 min
- Partir de la experiencia de una revisión interna de seguridad y uso de herramientas, sin revelar clientes, datos ni resultados confidenciales.
- Plantear la pregunta: «¿Le puedo dar las claves?» como una decisión sobre acceso, alcance y responsabilidad.
- Aclarar el enfoque: experiencia práctica de desarrollo y coordinación de equipos, no una auditoría pública ni asesoramiento jurídico.

**Slide:** título y pregunta central. Una idea visual; sin párrafos.

### 2. Qué puede ver y hacer un agente — 6 min
- Un asistente conversacional y un agente conectado al entorno de desarrollo no tienen el mismo alcance.
- Según la configuración, un agente puede leer archivos, modificar código, ejecutar comandos y utilizar herramientas o conexiones autorizadas.
- El alcance efectivo depende de permisos del sistema, configuración del editor, herramientas conectadas y confirmaciones requeridas.
- Las instrucciones del agente orientan su conducta, pero no sustituyen controles técnicos.

**Slides previstas (2):**
1. Asistente frente a agente: contexto, herramientas y acciones.
2. Mapa de accesos: repositorio, terminal, servicios y secretos.

### 3. Dónde viajan los datos — 6 min
- El código, los prompts, los archivos seleccionados y los resultados de herramientas pueden enviarse al proveedor para procesar la petición; el detalle depende del producto y de la configuración.
- Separar cuatro conceptos: suscripción de pago, uso de datos para entrenamiento, retención y Zero Data Retention (ZDR).
- No asumir que pagar implica ZDR ni que desactivar el entrenamiento significa que no se conservan datos.
- Revisar condiciones del producto, modalidad individual o empresarial, controles de administración y documentación oficial vigente.

**Slides previstas (2):**
1. Recorrido simplificado de los datos.
2. Cuatro conceptos que no deben confundirse.

### 4. NDA y obligaciones reales — 5 min
- Un NDA no es una configuración técnica ni una autorización automática para introducir información en cualquier servicio.
- Revisar qué información está protegida, quién puede tratarla, con qué finalidad y bajo qué condiciones.
- Si hay datos personales, valorar también RGPD, LOPDGDD y las instrucciones aplicables de la AEPD.
- La responsabilidad concreta depende del contrato, el tratamiento y las circunstancias; derivar las dudas jurídicas al responsable correspondiente.
- Introducir brevemente el marco europeo de IA y la normativa española solo en la medida en que ayuden a contextualizar responsabilidades; evitar una exposición normativa extensa.

**Slide prevista (1):** tres capas: contrato, protección de datos y controles técnicos.

### 5. Controles que sí ayudan — 10 min
Organizar las recomendaciones en tres grupos, evitando una diapositiva por cada práctica:

1. **Limita el alcance:** secretos fuera del repositorio y del contexto; separación de desarrollo, pruebas y producción; cuentas y permisos mínimos; acceso controlado a sistemas de clientes.
2. **Controla entradas y acciones:** revisar archivos y logs antes de compartirlos; usar datos sintéticos; configurar exclusiones sin tratarlas como barreras de seguridad; limitar terminal, red e integraciones; revisar comandos y acciones sensibles.
3. **Revisa antes de integrar:** trabajar con Git, inspeccionar el diff, ejecutar pruebas y análisis disponibles y exigir revisión humana para cambios críticos y despliegues.

Puntos que conviene verbalizar:
- Un archivo `.env` no es un gestor de secretos; `.gitignore` no impide que el agente lea un archivo.
- Una VPN no impide por sí sola que se transmitan datos accesibles desde el equipo.
- Las instrucciones en `AGENTS.md`, `CLAUDE.md` u otros archivos orientan al agente, pero no sustituyen permisos, aislamiento y controles técnicos.
- Revisar dependencias, extensiones y servidores MCP antes de concederles acceso.
- No compartir logs completos por defecto: pueden contener tokens, datos personales o información confidencial.

**Slides previstas (3):**
1. Limita el alcance: secretos, entornos y accesos.
2. Controla entradas y acciones: contexto, logs y terminal.
3. Revisa antes de integrar: Git, pruebas y aprobación humana.

Documento de apoyo: [Entorno de desarrollo seguro con IA agéntica](entorno-desarrollo-seguro-ia-agentica.md).

### 6. Incidentes: prevenir y responder — 4 min
- Ejemplo hipotético y no atribuible: una credencial aparece en el contexto o se envía a un servicio no autorizado.
- Detener la exposición y revocar o rotar la credencial afectada.
- Determinar qué información pudo quedar expuesta, dónde y durante cuánto tiempo; conservar la información necesaria para investigar.
- Notificar al responsable interno y seguir los procedimientos contractuales y de protección de datos aplicables.
- No prometer que borrar un mensaje elimina todas las copias o registros del proveedor.

**Slide prevista (1):** contener → revocar → evaluar → comunicar.

### 7. Cierre — 6 min
- Reforzar tres ideas: saber qué puede hacer el agente, conocer las condiciones del servicio y limitar técnicamente los accesos.
- Proponer una lista breve para equipos: herramienta autorizada, datos permitidos, credenciales, permisos, revisión y respuesta ante incidentes.
- Cerrar volviendo a la pregunta inicial: no se trata de confiar ciegamente ni de prohibir por defecto, sino de decidir qué acceso se concede y con qué límites.

**Slide prevista (1):** lista de comprobación y cierre.

## Presupuesto de diapositivas
Objetivo inicial: **11 slides aproximadamente**, con margen para reducirlas:
1. Título y pregunta.
2. Asistente frente a agente.
3. Mapa de accesos.
4. Recorrido de los datos.
5. Pago, entrenamiento, retención y ZDR.
6. NDA, protección de datos y controles.
7. Limita el alcance.
8. Controla entradas y acciones.
9. Revisa antes de integrar.
10. Respuesta ante una exposición.
11. Lista de comprobación y cierre.

Una slide debe comunicar una idea principal. Preferir esquemas, flujos y listas breves a bloques de texto. Las fuentes y matices técnicos pueden quedar en notas del ponente o en documentos de apoyo.

## Criterios para mantener el guion
- La duración total objetivo es 40 minutos; reservar los 5 minutos restantes del hueco de 45 para transiciones, preguntas o desviaciones.
- No añadir una slide por cada término o normativa.
- Contrastar con fuentes oficiales las afirmaciones sobre proveedores, normativa y fechas de aplicación antes de cerrar las diapositivas.
- Usar ejemplos hipotéticos o debidamente anonimizados; no divulgar información de clientes ni resultados de auditorías.
- Mantener el enfoque independiente de proveedores y aplicable a equipos con recursos limitados.
- Actualizar este documento cuando se acepten decisiones de contenido; distinguir propuestas pendientes de cambios acordados.

## Decisiones pendientes
- Confirmar si habrá demostración en directo. Si se incluye, debe salir del tiempo asignado a los bloques existentes, no añadirse por encima de los 40 minutos.
- Elegir un único ejemplo práctico que conecte permisos, datos y credenciales.
- Verificar las fuentes oficiales de los proveedores y la normativa antes de preparar las slides definitivas.
