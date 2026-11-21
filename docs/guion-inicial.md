# Guion — ¿Le puedo dar las claves?
**Subtítulo:** IA agéntica, código y secretos de cliente  
**Ponente:** Patricio Soriano · Responsable del Área de GIS y Desarrollo · Geoinnova  
**Evento:** La previa cordobesa de la DevFest · GDG Córdoba  
**Fecha:** 27 de noviembre de 2026  
**Duración:** 25 minutos de charla + 5 minutos de preguntas  
**Estado:** guion acordado para preparar y ensayar la presentación.

## Idea central

Podemos utilizar herramientas comerciales de IA para desarrollar software sin poner en riesgo la confidencialidad de los clientes, siempre que sepamos qué información compartimos, qué capacidades concedemos a los agentes y qué controles aplicamos.

La charla parte de una experiencia profesional de revisión interna. No pretende exponer información de clientes ni presentar al ponente como especialista en ciberseguridad o asesor jurídico.

## Estructura y tiempos

| Slide | Contenido | Tiempo |
|---|---|---:|
| 1 | El caso Jira | 2:30 |
| 2 | Qué firmamos: NDA y marco legal | 3:00 |
| 3 | Qué es un agente y por qué es un riesgo | 3:00 |
| 4 | Nuestro contexto | 1:30 |
| 5 | Qué prometen los proveedores | 4:00 |
| 6 | Configuración segura del software, con o sin IA | 3:30 |
| 7 | Configurar los asistentes de IA | 4:00 |
| 8 | Conclusiones | 3:30 |
| | **Total** | **25:00** |

La portada, las referencias y la diapositiva final no tienen desarrollo propio: se utilizan para presentar, dejar fuentes disponibles y cerrar. Las preguntas se reservan para los 5 minutos posteriores.

---

## Portada

**Título:** ¿Le puedo dar las claves?  
**Subtítulo:** IA agéntica, código y secretos de cliente

Patricio Soriano  
Responsable del Área de GIS y Desarrollo · Geoinnova

La previa cordobesa de la DevFest · GDG Córdoba  
27 de noviembre de 2026

**Apoyo para la presentación**
- Abrir con la pregunta del título.
- Presentar brevemente el tema: el uso cotidiano de agentes de programación y la responsabilidad sobre la información a la que damos acceso.

## 1. El caso Jira — 2:30

**Contenido de la slide**
- Quién soy y qué es Geoinnova.
- Revisión interna del uso de herramientas de IA en la empresa.
- Hallazgo: se estaba utilizando la API de Jira en un contexto que suponía un incumplimiento de un compromiso de confidencialidad.
- Pregunta de transición: **¿Qué información le estamos dando a la IA sin darnos cuenta?**

**Notas para la representación**
- Presentar brevemente el perfil: geógrafo y desarrollador, responsable del Área de GIS y Desarrollo en Geoinnova.
- Explicar que la charla nace de una revisión interna del uso de herramientas, no de una investigación sobre un proveedor concreto.
- Contar el caso Jira únicamente con el nivel de detalle autorizado. No identificar al cliente, proyecto, contrato, personas ni circunstancias que permitan reconstruir el incidente.
- No atribuir al proveedor un uso concreto de los datos si no está documentado.
- La idea no es señalar a quien utilizó la herramienta: el problema es que el equipo puede desconocer qué información sale de su entorno y qué compromisos ha asumido la empresa.
- Transición: antes de hablar de herramientas, hay que recordar qué hemos comprometido con nuestros clientes.

## 2. Qué firmamos: NDA y marco legal — 3:00

**Contenido de la slide**
- NDA y compromisos de confidencialidad.
- RGPD y protección de datos.
- Esquema Nacional de Seguridad (RD 311/2022), cuando resulte aplicable.
- Reglamento europeo de IA: alfabetización en IA y gestión de riesgos.
- Cláusulas habituales y adaptación al uso de herramientas de IA.

**Notas para la representación**
- Explicar que un NDA protege información definida como confidencial y establece obligaciones para quien la recibe. También puede haber compromisos equivalentes en contratos de prestación de servicios.
- No confundir confidencialidad contractual con protección de datos personales: el RGPD añade obligaciones específicas cuando se tratan datos personales.
- Mencionar el ENS como marco aplicable al sector público y a los sistemas incluidos en su ámbito, también relevante para proveedores que trabajan con Administraciones.
- Situar el Reglamento europeo de IA sin convertir la slide en un calendario normativo. Destacar la alfabetización en IA y que las obligaciones dependen del papel y del caso de uso. Verificar fechas y alcance antes del ensayo final.
- Mostrar ejemplos de cláusulas habituales: definición amplia de información confidencial, prohibición de divulgación a terceros, notificación de incidentes y devolución o destrucción de información.
- Presentar como criterio de revisión —no como cláusula jurídica definitiva— una previsión específica para IA: no introducir información confidencial en herramientas de terceros sin autorización y sin garantías adecuadas sobre tratamiento, entrenamiento, retención y acceso.
- Aclarar que pagar una suscripción no modifica automáticamente las obligaciones contractuales.
- No ofrecer asesoramiento jurídico. La interpretación y redacción de cláusulas corresponde a los responsables legales y contractuales.
- Utilizar las imágenes de NDA y referencias normativas como apoyo visual, sin leer artículos completos.

**Mensaje clave:** el contrato establece obligaciones; no configura técnicamente el agente ni impide por sí mismo una exposición.

## 3. Qué es un agente y por qué es un riesgo — 3:00

**Contenido de la slide**
- Lee archivos y repositorios.
- Ejecuta comandos en terminal.
- Utiliza herramientas y llama a APIs.
- Accede a servicios y credenciales disponibles en su entorno.
- Del agente a la factoría de software.

**Notas para la representación**
- Diferenciar un chatbot, al que se le proporciona texto, de un agente conectado al entorno de desarrollo y autorizado para realizar acciones.
- Explicar que sus capacidades dependen de la herramienta, el sistema operativo, los permisos, las integraciones y la configuración.
- Un agente puede encontrar información en archivos que el desarrollador no ha incluido expresamente en el prompt.
- Ejemplos de información que puede quedar a su alcance: archivos `.env`, tokens, código propietario, configuraciones y datos de clientes.
- No afirmar que todo lo que ve se envía necesariamente al proveedor. Explicar que el contexto necesario para procesar una tarea puede transmitirse al servicio, según el producto y su funcionamiento.
- Introducir la evolución hacia flujos de trabajo más estructurados: especificaciones, tareas, varios agentes, herramientas y validaciones. No desarrollar aquí SDD ni factoría; reservarlo para el contexto y los controles.
- Transición: el riesgo no depende solo del modelo, sino de cómo lo incorporamos al trabajo diario.

## 4. Nuestro contexto — 1:30

**Contenido de la slide**
- Empresas medianas sin infraestructura ni modelos propios.
- Herramientas de uso diario: Claude Code/CLI, Codex, Cursor y similares.
- Suscripciones comerciales de pago.
- Desarrollo real con repositorios, servicios y datos de clientes.

**Notas para la representación**
- Describir el escenario habitual de muchas pymes: equipos que utilizan servicios comerciales porque son accesibles y productivos, sin operar modelos ni infraestructura de IA propios.
- No plantear como requisito el despliegue local ni una infraestructura específica.
- La charla se centra en herramientas y modalidades empresariales o comerciales adecuadas para un uso profesional; no en cuentas gratuitas o personales.
- Evitar comparativas de marcas. Los nombres son ejemplos de categorías de herramientas, no recomendaciones ni avales.
- La cuestión es cómo trabajar con garantías razonables dentro de ese contexto.

## 5. Qué prometen los proveedores — 4:00

**Contenido de la slide**
- Uso de la información: entrenamiento, retención y ubicación/procesamiento.
- Diferencias entre productos, planes y configuraciones empresariales.
- Qué significa Zero Data Retention (ZDR) y qué no cubre.
- Qué comprobar antes de contratar.

**Notas para la representación**
- Utilizar la tabla comparativa y las capturas de páginas oficiales como apoyo. No leer fila por fila.
- Explicar tres cuestiones distintas:
  1. **Entrenamiento:** si los datos se utilizan para entrenar o mejorar modelos.
  2. **Retención:** durante cuánto tiempo se conservan prompts, archivos, resultados, registros o datos de uso.
  3. **ZDR:** modalidad o garantía específica de no retención de determinados datos, sujeta a alcance, producto y excepciones.
- Aclarar que una política de no entrenamiento no equivale a no retención.
- Una suscripción de pago no implica automáticamente ZDR, procesamiento local ni las mismas garantías para todos los productos del proveedor.
- La ubicación del procesamiento y las condiciones de transferencias internacionales deben revisarse en la documentación contractual y de privacidad aplicable.
- Indicar que las condiciones cambian y que la tabla representa lo publicado en fuentes oficiales en la fecha de consulta que figure en el documento de investigación.
- Cerrar con una lista de comprobación: producto exacto, tipo de plan, uso para entrenamiento, retención, subencargados/terceros, ubicación y transferencias, controles administrativos y compromisos contractuales.
- No convertir la slide en una clasificación de proveedores: lo importante es saber qué condiciones estamos aceptando.

**Mensaje clave:** no basta con conocer la marca ni con pagar; hay que comprobar el producto, el plan y sus condiciones concretas.

## 6. Configuración segura del software, con o sin IA — 3:30

**Contenido de la slide**
- Gestión de secretos y variables de entorno.
- Mínimo privilegio y tokens con alcance limitado.
- Separación de entornos.
- Buenas prácticas de seguridad del proyecto.
- Referencia: OWASP AI Agent Security Cheat Sheet.

**Notas para la representación**
- Explicar que son medidas de seguridad del desarrollo que ya eran necesarias antes de la IA; los agentes hacen más importante aplicarlas de forma consistente.
- **Secretos:** no guardar credenciales en el repositorio ni incorporarlas al contexto. Utilizar gestores de secretos o mecanismos seguros de inyección de variables. Un `.env` no es un gestor de secretos y que esté en `.gitignore` no impide que el agente lo lea.
- **Mínimo privilegio:** tokens separados por finalidad, permisos mínimos, caducidad y alcance limitado. Evitar credenciales personales o de producción en tareas de desarrollo.
- **Entornos:** separar desarrollo, pruebas y producción; utilizar datos sintéticos o anonimizados cuando sea posible.
- **Proyecto:** revisar cambios, dependencias, extensiones e integraciones; controlar terminal, herramientas y servicios MCP.
- Distinguir controles de acceso y ejecución de controles de calidad. SAST, análisis de dependencias y detección de secretos ayudan a encontrar problemas, pero no impiden por sí solos que un agente lea o transmita información.
- Se puede citar SonarQube como ejemplo de SAST y Gitleaks como detector de secretos, sin dedicar tiempo a explicar herramientas.
- Utilizar OWASP AI Agent Security Cheat Sheet como referencia para reforzar el mínimo privilegio, la validación de entradas y acciones, el aislamiento y la supervisión.
- No intentar enumerar toda la guía. Seleccionar solo las medidas que el equipo puede aplicar.

**Mensaje clave:** primero hay que proteger el entorno; después, configurar el agente para que trabaje dentro de esos límites.

## 7. Configurar los asistentes de IA — 4:00

**Contenido de la slide**
- Configuración específica según proveedor y herramienta (*harness*).
- Archivos de exclusión y reglas del agente.
- Permisos de acceso a carpetas y control de comandos.
- Secretos fuera de su alcance.
- Anexo o política interna de uso de IA.

**Notas para la representación**
- Explicar *harness* como el conjunto de instrucciones, herramientas, permisos, contexto y mecanismos de ejecución que rodean al modelo.
- Mostrar ejemplos reales y no sensibles de configuración: reglas del proyecto, exclusiones, permisos de lectura/escritura y confirmaciones para comandos.
- Los ficheros de instrucciones —por ejemplo, `AGENTS.md` o equivalentes— ayudan a establecer pautas, convenciones y límites de trabajo. No son una barrera de seguridad si el sistema permite al agente realizar la acción.
- Mostrar la diferencia entre excluir un archivo del contexto y retirar realmente el permiso de acceso. La exclusión debe verificarse en la herramienta concreta; el control efectivo debe aplicarse en el sistema de archivos, el entorno o la integración.
- Mantener los secretos fuera de las carpetas y servicios accesibles al agente siempre que sea posible. No confiar únicamente en instrucciones del tipo «no leas el archivo .env».
- Proponer un anexo interno de uso de IA que defina:
  - herramientas y modalidades autorizadas;
  - información permitida, restringida y prohibida;
  - condiciones mínimas del proveedor;
  - permisos y supervisión humana;
  - procedimiento de notificación y respuesta;
  - restricciones específicas que pueda establecer el cliente.
- No hace falta pedir autorización para cada uso rutinario si existe una política aprobada y una clasificación de información clara. Sí debe escalarse cuando el dato, el proveedor o la acción excedan lo autorizado.
- Diferenciar la política organizativa de los controles técnicos: ambas capas son necesarias.

**Mensaje clave:** las reglas orientan al agente; los permisos del sistema son los que limitan lo que puede hacer.

## 8. Conclusiones — 3:30

**Contenido de la slide: lista de comprobación**
1. ¿La herramienta y el plan están autorizados?
2. ¿Puedo introducir esta información?
3. ¿Qué permisos y credenciales necesita realmente el agente?
4. ¿Están separados los entornos y protegidos los secretos?
5. ¿Revisamos los cambios y las acciones de impacto?
6. ¿Sabemos cómo actuar si se produce una exposición?

**Frase final**

> La confianza con el cliente se gestiona con contrato, configuración y transparencia.

**Notas para la representación**
- Recuperar la pregunta inicial: «¿Le puedo dar las claves?». La respuesta no es un sí o un no universal: depende de qué claves, para qué tarea, con qué herramienta y bajo qué controles.
- Repasar la lista sin desarrollar de nuevo cada bloque.
- Recordar que no se trata de prohibir la IA ni de exigir infraestructura propia, sino de establecer límites proporcionados al riesgo.
- Si se produce una exposición: contener, revocar o rotar credenciales, evaluar el alcance y comunicar a los responsables conforme al procedimiento aplicable.
- Cerrar con la frase final y dejar paso a las preguntas.

## Referencias

Diapositiva de consulta, sin explicación extensa. Incluir enlaces o referencias legibles a:
- OWASP AI Agent Security Cheat Sheet.
- Documentación oficial de privacidad y condiciones de los proveedores incluidos en la comparativa.
- RGPD y normativa española aplicable.
- Real Decreto 311/2022, Esquema Nacional de Seguridad.
- Reglamento europeo de IA.
- Documentación técnica de las herramientas mostradas en los ejemplos.

Las referencias deben corresponder a las afirmaciones efectivamente utilizadas en las slides. Comprobar enlaces, vigencia y fecha de consulta antes de cerrar la presentación.

## Cierre y agradecimientos

Patricio Soriano · Geoinnova  
GDG Córdoba · La previa cordobesa de la DevFest  
27 de noviembre de 2026

Dejar visible el título de la charla y los enlaces al material del proyecto, si procede.

---

## Criterios para el ensayo

- Ensayar con cronómetro: 25 minutos de exposición y 5 minutos de preguntas.
- Mantener el caso Jira anonimizado y limitado a los hechos que se pueden compartir.
- Priorizar los mensajes clave de cada slide; las notas son ayudas para la representación, no texto para leer literalmente.
- No añadir una demostración en directo salvo que sustituya contenido y se pueda ensayar dentro del tiempo.
- Verificar antes del ensayo las fechas y referencias normativas, así como las condiciones vigentes de cada proveedor.
- Mantener las capturas y la tabla de proveedores alineadas con las fuentes oficiales y la fecha de consulta.
- Evitar que las slides 6 y 7 se solapen: la 6 explica controles técnicos del entorno; la 7, configuración y gobernanza de los asistentes.
