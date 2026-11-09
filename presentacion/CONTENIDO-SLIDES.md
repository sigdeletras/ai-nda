# Texto de las diapositivas

Documento de trabajo para revisar la narrativa y el contenido de la presentación **«¿Le puedo dar las claves? IA agéntica, código y secretos de cliente»**.

- **Presentación:** [ver versión publicada](https://sigdeletras.github.io/ai-nda/)
- **Implementación:** `presentacion/src/slides.js`
- **Duración prevista:** 45 minutos
- **Estado:** borrador inicial; texto y notas pendientes de revisión.

Este documento recoge el texto visible y las notas del ponente de cada diapositiva. Es la referencia editorial para revisar el contenido. Los cambios aprobados deben trasladarse también a `slides.js`; editar este documento por sí solo no modifica la presentación.

---

## 01. Apertura

**Texto visible**

> DEVFEST CÓRDOBA · 2026  
> ¿Le puedo dar las claves?  
> IA agéntica, código y secretos de cliente  
> Patricio Soriano · Geoinnova

**Notas del ponente**

Abrir con la pregunta del título. No es una charla sobre cómo usar mejor un asistente, sino sobre qué autorizamos cuando conectamos un agente a nuestro entorno. Presentar el punto de partida como experiencia profesional, sin revelar clientes ni datos sensibles.

## 02. La pregunta

**Texto visible**

> ¿Qué le damos cuando le damos acceso?
>
> **01 · Contexto**  
> Código, documentos y conversaciones.
>
> **02 · Capacidad**  
> Leer, modificar, ejecutar y conectarse.
>
> **03 · Confianza**  
> Datos propios y compromisos con terceros.

**Notas del ponente**

Del chat que responde al agente que opera. El riesgo depende del contexto, las herramientas y los permisos, no solo del modelo.

## 03. Capacidades del agente

**Texto visible**

> Un agente no solo genera código
>
> **01 · LEER** — Repositorio · ficheros · documentación  
> **02 · MODIFICAR** — Código · configuración · tests  
> **03 · EJECUTAR** — Terminal · scripts · herramientas  
> **04 · CONECTARSE** — APIs · servicios · repositorios

**Notas del ponente**

Las capacidades varían según producto, modo, configuración e integraciones. Preguntar qué herramientas están habilitadas y con qué identidad se ejecutan.

## 04. Superficie de exposición

**Texto visible**

> El riesgo aparece en las conexiones
>
> Agente → Herramientas → Identidad → Entorno
>
> - El terminal hereda el contexto de ejecución.
> - Un token amplía el alcance de una acción.
> - El repositorio puede contener secretos y datos de cliente.

**Notas del ponente**

El agente decide o propone, la herramienta ejecuta, la identidad aporta permisos y el entorno contiene recursos. No presentar al modelo como único punto de control.

## 05. Instrucciones y controles

**Texto visible**

> Una regla escrita no es un permiso técnico
>
> **INSTRUCCIÓN**  
> «No leas .env»  
> Orienta el comportamiento.  
> No impide por sí sola el acceso.
>
> **CONTROL EFECTIVO**  
> Sin acceso al secreto  
> El proceso no puede leerlo.  
> Permiso aplicado por el entorno.

**Notas del ponente**

AGENTS.md y reglas de herramientas orientan, pero no sustituyen permisos del sistema operativo, aislamiento, gestión de secretos ni controles del proveedor.

## 06. Datos y proveedores

**Texto visible**

> «Es de pago» no responde a la pregunta de privacidad
>
> - **Entrenamiento:** ¿Se usan los datos para mejorar modelos?
> - **Retención:** ¿Durante cuánto tiempo se conservan?
> - **ZDR:** ¿Qué datos quedan fuera de retención?
> - **Residencia y acceso:** ¿Dónde se procesan y quién accede?
> - **Contrato:** ¿Qué compromisos son exigibles?

**Notas del ponente**

Son dimensiones distintas. Comprobar producto, modalidad, configuración y condiciones aplicables. No equiparar ausencia de entrenamiento con ausencia de retención, ZDR con procesamiento local ni suscripción de pago con garantía universal.

## 07. Confidencialidad

**Texto visible**

> El NDA no desaparece cuando entra la IA
>
> **La obligación sigue siendo nuestra.**
>
> Comprobar si el tratamiento por el proveedor y sus subencargados está permitido y bajo qué condiciones.
>
> NDA · Contrato · RGPD · Política interna

**Notas del ponente**

No dar asesoramiento jurídico. Antes de introducir información de cliente, revisar contrato, compromisos de confidencialidad, instrucciones del cliente y condiciones del proveedor. Si no está claro, no introducir el dato hasta resolverlo.

## 08. Clasificación de la información

**Texto visible**

> No todos los datos tienen el mismo riesgo
>
> **01 · Público**  
> Documentación abierta y ejemplos públicos.  
> Menor sensibilidad.
>
> **02 · Interno**  
> Código propio y documentación interna.  
> Revisar política.
>
> **03 · Confidencial**  
> Código de cliente, credenciales y datos personales.  
> Restringir / excluir.

**Notas del ponente**

Proponer una clasificación sencilla y adaptable. Un repositorio puede mezclar categorías. Los secretos deben quedar fuera del contexto del agente siempre que sea posible.

## 09. Controles prácticos

**Texto visible**

> Reducir el alcance antes de confiar
>
> **01 · MÍNIMO PRIVILEGIO** — Permisos y tokens limitados.  
> **02 · SEPARAR ENTORNOS** — Desarrollo y pruebas sin producción.  
> **03 · DATOS SINTÉTICOS** — Ejemplos útiles, sin datos reales.  
> **04 · REVISIÓN HUMANA** — Confirmar cambios y operaciones sensibles.

**Notas del ponente**

Medidas aplicables sin desplegar modelos locales: credenciales de alcance reducido, variables de entorno controladas, entornos de prueba, datos sintéticos, revisión de diffs y aprobación para operaciones externas.

## 10. Ejercicio: permisos del agente

**Texto visible**

> ¿Qué permisos le darías?
>
> Un agente debe corregir un test que falla en un repositorio de desarrollo.
>
> - Leer el repositorio. *(Seleccionado por defecto)*
> - Ejecutar tests aislados. *(Seleccionado por defecto)*
> - Leer el fichero .env.
> - Hacer push directo a main.
>
> **Evaluar permisos**
>
> SIMULACIÓN · SIN OPERACIONES REALES

**Comportamiento de la diapositiva**

El público selecciona permisos y evalúa la decisión. El ejercicio es local y simulado: no invoca herramientas, no lee ficheros ni modifica el repositorio.

**Notas del ponente**

Pedir al público que decida. Criterio esperado: lectura y tests aislados, sí; acceso a .env y push directo a main, no. El ejercicio no invoca herramientas ni modifica ficheros.

## 11. CI/CD y calidad

**Texto visible**

> El agente propone. El pipeline verifica.
>
> **01 · Agente** — Genera cambios  
> → **02 · Pull request** — Revisión y trazabilidad  
> → **03 · CI** — Tests · lint · SAST  
> → **04 · Integración** — Aprobación humana
>
> SonarQube, análisis de dependencias y detección de secretos complementan la revisión.

**Notas del ponente**

El agente no es autoridad final. El pipeline debe usar permisos mínimos y no exponer secretos a workflows de contribuciones no confiables. SAST aporta detección, no garantiza ausencia de vulnerabilidades.

## 12. Respuesta ante una exposición

**Texto visible**

> Contener primero. Investigar después.
>
> **01 · Revocar** — Token, clave o sesión.  
> **02 · Contener** — Detener el flujo y limitar accesos.  
> **03 · Evaluar** — Qué dato, dónde y quién pudo acceder.  
> **04 · Comunicar** — Activar procedimiento interno y contractual.  
> **05 · Corregir** — Eliminar la causa y revisar controles.

**Notas del ponente**

Si se filtra una credencial, revocarla y rotarla. Preservar evidencias, determinar alcance y activar procedimientos internos y obligaciones que correspondan. No improvisar notificaciones ni plazos.

## 13. Ideas para llevarse

**Texto visible**

> Usar agentes con criterio es diseñar límites
>
> - **Conoce** qué puede leer, ejecutar y modificar.
> - **Limita** permisos, credenciales y contexto.
> - **Verifica** proveedor, contrato y configuración.
> - **Supervisa** cambios, pipelines y operaciones sensibles.

**Notas del ponente**

No se trata de prohibir la IA ni de exigir infraestructura propia. Se trata de decidir qué información y capacidades necesita cada tarea, y aplicar controles proporcionados.

## 14. Cierre y preguntas

**Texto visible**

> DEVFEST CÓRDOBA · 2026  
> ¿Le puedo dar las claves?
>
> La pregunta no es si el agente es de confianza.  
> Es qué acceso necesita realmente.
>
> Preguntas

**Notas del ponente**

Dejar espacio para preguntas. Tener a mano los materiales del repositorio sobre permisos, privacidad, RGPD, AI Act, SAST y CI/CD. No prometer respuestas jurídicas.

---

## Criterios para revisar cada diapositiva

Al proponer cambios, revisar:

1. **Idea principal:** una sola idea que el público pueda recordar.
2. **Precisión:** afirmaciones técnicas, comerciales o normativas contrastadas con fuentes oficiales cuando corresponda.
3. **Aplicabilidad:** medida o ejemplo útil para un equipo de desarrollo.
4. **Carga visual:** texto breve; ampliar la explicación en las notas del ponente.
5. **Coherencia:** mantener el hilo entre capacidades, exposición, obligaciones y controles.
6. **Confidencialidad:** utilizar ejemplos ficticios o anonimizados.

## Flujo de actualización

1. Revisar y editar el texto en este documento.
2. Validar la narrativa, precisión y duración.
3. Trasladar los cambios aprobados a `presentacion/src/slides.js`.
4. Revisar las notas y las interacciones afectadas.
5. Ejecutar las comprobaciones y publicar mediante GitHub Actions.

**Importante:** este Markdown es la referencia editorial, no una fuente que la presentación lea automáticamente. Mantener sincronizados ambos ficheros hasta que se decida automatizar esa relación.
