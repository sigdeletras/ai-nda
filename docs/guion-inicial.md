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
| 2. Qué puede ver y hacer un agente | 5 min | Explicar contexto, permisos, herramientas, terminal, repositorios y credenciales. |
| 3. Del agente a la factoría: SDD y autonomía | 4 min | Explicar especificaciones, tareas, orquestación y grados de intervención humana. |
| 4. Dónde viajan los datos | 5 min | Distinguir suscripción de pago, uso para entrenamiento, retención y Zero Data Retention. |
| 5. NDA y obligaciones reales | 5 min | Relacionar confidencialidad, datos personales y compromisos contractuales sin convertir la charla en asesoramiento jurídico. |
| 6. Controles que sí ayudan | 9 min | Aplicar mínimo privilegio, credenciales fuera del contexto, entornos de prueba, datos sintéticos y revisión de cambios. |
| 7. Incidentes: prevenir y responder | 4 min | Mostrar una pauta breve ante una exposición accidental: contener, revocar, evaluar y comunicar según el procedimiento. |
| 8. Cierre: reglas para el equipo | 5 min | Recapitular criterios prácticos y dejar una lista de decisiones aplicables. |
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

### 3. Del agente a la factoría: SDD y autonomía — 4 min

- La evolución no es solo disponer de un agente con más herramientas: es organizar el trabajo para delegar tareas y decisiones dentro de un proceso repetible.
- **SDD:** convertir una demanda en especificación, plan, tareas y criterios de aceptación antes de implementar.
- **Factoría de software:** coordinar etapas y agentes —análisis, planificación, implementación, pruebas y revisión— con trazabilidad y recuperación.
- **Lights-on:** supervisión humana durante el flujo. **Lights-off:** ejecución rutinaria sin supervisión continua, dentro de límites y puertas de control.
- La autonomía debe asignarse por tarea según verificabilidad e impacto. Lights-off no significa ausencia de responsabilidad ni despliegue automático.
- Mantener controles técnicos independientes: permisos mínimos, aislamiento, CI, pruebas y aprobación para acciones de alto impacto.

**Slides previstas (2):**
1. Demanda → especificación → plan/tareas → implementación.
2. Lights-on frente a lights-off: qué decisiones se delegan y cuáles se reservan.

Consultar [SDD y factoría de software agéntica](sdd-factoría-software-agéntica.md).

### 4. Dónde viajan los datos — 5 min
- El código, los prompts, los archivos seleccionados y los resultados de herramientas pueden enviarse al proveedor para procesar la petición; el detalle depende del producto y de la configuración.
- Separar cuatro conceptos: suscripción de pago, uso de datos para entrenamiento, retención y Zero Data Retention (ZDR).
- No asumir que pagar implica ZDR ni que desactivar el entrenamiento significa que no se conservan datos.
- Revisar condiciones del producto, modalidad individual o empresarial, controles de administración y documentación oficial vigente.

**Slides previstas (2):**
1. Recorrido simplificado de los datos.
2. Cuatro conceptos que no deben confundirse.

### 5. NDA y obligaciones reales — 5 min
- Un NDA no es una configuración técnica ni una autorización automática para introducir información en cualquier servicio.
- Revisar qué información está protegida, quién puede tratarla, con qué finalidad y bajo qué condiciones.
- Si hay datos personales, valorar también RGPD, LOPDGDD y las instrucciones aplicables de la AEPD.
- La responsabilidad concreta depende del contrato, el tratamiento y las circunstancias; derivar las dudas jurídicas al responsable correspondiente.
- Un NDA no resuelve por sí solo si se puede enviar información a un proveedor: hay que concretar qué información puede tratarse, con qué herramienta y bajo qué garantías.
- En contratos de desarrollo, acordar el uso autorizado de IA, las condiciones del proveedor (entrenamiento, retención y acceso de terceros), los permisos de agentes, la revisión humana de entregables y la respuesta ante incidentes.
- No hace falta prohibir toda IA ni pedir autorización para cada prompt. Es más práctico fijar una regla general y exigir aprobación para datos o acciones de mayor riesgo.
- Distinguir obligaciones contractuales y controles técnicos: una cláusula que prohíba exponer secretos no impide que el agente lea un archivo accesible o ejecute una operación.
- El AI Act no convierte automáticamente en sistema de alto riesgo un proyecto por usar IA para programar. Analizar su aplicabilidad según la finalidad y el papel de cada parte cuando la IA forme parte del producto.
- Incluir solo una referencia breve a alfabetización en IA, transparencia cuando sea exigible y asignación de responsabilidades. No existe una obligación general de declarar que se usó IA para escribir código.
- Si hay datos personales, valorar también RGPD, LOPDGDD y las instrucciones aplicables de la AEPD. Derivar las dudas jurídicas al responsable correspondiente.

**Slide prevista (1):** tres capas: contrato, protección de datos y controles técnicos. Añadir una lista visual breve: uso permitido · datos y proveedor · permisos del agente · validación · incidentes.

**Nota del ponente:** presentar las cláusulas como criterios para revisar con asesoría jurídica, no como asesoramiento legal ni como texto contractual definitivo. La empresa debe poder demostrar los controles técnicos que respaldan sus compromisos.

### 6. Controles que sí ayudan — 9 min
Tomar como referencia principal la [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html), que ofrece un marco específico para agentes. Seleccionar sus principios relevantes para el desarrollo cotidiano, sin intentar resumir toda la guía.

Organizar las recomendaciones en tres grupos:

1. **Limita el alcance:** herramientas y permisos mínimos, secretos fuera del repositorio y del contexto, separación de desarrollo/pruebas/producción y acceso de solo lectura cuando sea suficiente.
2. **Controla entradas y acciones:** tratar archivos y resultados externos como datos no confiables; reducir y sanear contexto y logs; limitar terminal e integraciones; requerir aprobación para acciones de impacto.
3. **Verifica y responde:** revisar el diff, ejecutar pruebas, registrar acciones relevantes sin secretos y contar con un procedimiento ante exposiciones.

Puntos que conviene verbalizar:
- Un archivo `.env` no es un gestor de secretos; `.gitignore` no impide que el agente lea un archivo.
- Una VPN no impide por sí sola que se transmitan datos accesibles desde el equipo.
- Las instrucciones en `AGENTS.md`, `CLAUDE.md` u otros archivos orientan al agente, pero no sustituyen permisos, aislamiento y controles técnicos.
- Revisar dependencias, extensiones y servidores MCP antes de concederles acceso.
- Incorporar análisis estático (SAST) y detección de secretos al pipeline cuando resulte proporcionado. SonarQube puede servir como ejemplo de análisis del código; Bandit cubre patrones de riesgo en Python y Gitleaks busca secretos expuestos.
- Distinguir estos controles: el SAST busca determinados defectos y vulnerabilidades; no limita lo que el agente puede leer ni evita que envíe información al proveedor. La CI puede bloquear la integración si se configuran condiciones de aceptación.
- Una confirmación humana debe referirse a la acción concreta; no sustituye la validación de permisos en el componente que la ejecuta.
- El agente puede desencadenar procesos posteriores: revisar permisos de workflows, secretos disponibles para cada job y separación entre validación y despliegue. Un cambio en el pipeline también debe revisarse.
- Tratar el código de pull requests como no confiable; evitar que workflows que lo ejecutan dispongan de secretos o permisos de escritura innecesarios. Revisar especialmente el uso de pull_request_target.
- La CI puede combinar tests, SAST, detección de secretos, análisis de dependencias y escaneo de imágenes. Son controles complementarios y no garantizan por sí solos la seguridad.
- En la demo del repositorio, el workflow existente ya reúne Gitleaks, Ruff, pip-audit, pytest, Bandit y Trivy. No afirmar que SonarQube está integrado: se mantiene como ejemplo de SAST.

**Slides previstas (3):**
1. **Limita el alcance:** permisos, herramientas, secretos y entornos.
2. **Controla entradas y acciones:** prompt injection, contexto, logs y terminal.
3. **Verifica y responde:** revisión humana, pruebas y controles automatizados. Mostrar el flujo agente → SAST/detección de secretos/tests → CI y condiciones de aceptación → revisión antes de integrar. SonarQube es un ejemplo, no una garantía de seguridad.

Dedicar 3–4 minutos a esta idea dentro de los 10 minutos del bloque, sin ampliar la duración total. Consultar [SAST y SonarQube en la charla](sast-sonarqube-charla.md) y [CI/CD y seguridad de los agentes](ci-cd-ia-agentica.md) para el alcance, los matices y la relación con el workflow de la demo.

Documentos de apoyo: [Entorno de desarrollo seguro con IA agéntica](entorno-desarrollo-seguro-ia-agentica.md) y [Gobernanza del uso de IA de terceros](gobernanza-uso-ia-terceros-iso-42001.md).

### 7. Incidentes: prevenir y responder — 4 min
- Ejemplo hipotético y no atribuible: una credencial aparece en el contexto o se envía a un servicio no autorizado.
- Detener la exposición y revocar o rotar la credencial afectada.
- Determinar qué información pudo quedar expuesta, dónde y durante cuánto tiempo; conservar la información necesaria para investigar.
- Notificar al responsable interno y seguir los procedimientos contractuales y de protección de datos aplicables.
- No prometer que borrar un mensaje elimina todas las copias o registros del proveedor.

**Slide prevista (1):** contener → revocar → evaluar → comunicar.

### 8. Cierre — 5 min
- Reforzar tres ideas: saber qué puede hacer el agente, conocer las condiciones del servicio y limitar técnicamente los accesos.
- Proponer una lista breve para equipos: herramienta autorizada, datos permitidos, credenciales, permisos, revisión y respuesta ante incidentes.
- Cerrar volviendo a la pregunta inicial: no se trata de confiar ciegamente ni de prohibir por defecto, sino de decidir qué acceso se concede y con qué límites.

**Slide prevista (1):** lista de comprobación y cierre.

## Presupuesto de diapositivas
Objetivo actualizado: **16 diapositivas**, con margen para reducirlas:
1. Apertura.
2. Perfil del ponente.
3. Capacidades del agente.
4. SDD: demanda, especificación, plan y tareas.
5. Factoría: lights-on y lights-off.
6. Superficie de exposición.
7. Instrucciones frente a controles.
8. Datos y proveedores.
9. Confidencialidad.
10. Clasificación de la información.
11. Controles prácticos.
12. Ejercicio de permisos.
13. CI/CD y calidad.
14. Respuesta ante una exposición.
15. Ideas para llevarse.
16. Cierre y preguntas.

Una slide debe comunicar una idea principal. Preferir esquemas, flujos y listas breves a bloques de texto. Las fuentes y matices técnicos pueden quedar en notas del ponente o en documentos de apoyo.

## Criterios para mantener el guion
- La duración total objetivo es 40 minutos; reservar los 5 minutos restantes del hueco de 45 para transiciones, preguntas o desviaciones.
- No añadir una slide por cada término o normativa. La ISO/IEC 42001 debe funcionar como marco de referencia, no como un bloque normativo extenso.
- Contrastar con fuentes oficiales las afirmaciones sobre proveedores, normativa y fechas de aplicación antes de cerrar las diapositivas.
- Usar ejemplos hipotéticos o debidamente anonimizados; no divulgar información de clientes ni resultados de auditorías.
- Mantener el enfoque independiente de proveedores y aplicable a equipos con recursos limitados.
- Actualizar este documento cuando se acepten decisiones de contenido; distinguir propuestas pendientes de cambios acordados.

## Decisiones pendientes
- Confirmar si habrá demostración en directo. Si se incluye, debe salir del tiempo asignado a los bloques existentes, no añadirse por encima de los 40 minutos.
- Elegir un único ejemplo práctico que conecte permisos, datos y credenciales.
- Verificar las fuentes oficiales de los proveedores y la normativa antes de preparar las slides definitivas.
