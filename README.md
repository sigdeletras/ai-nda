# ¿Le puedo dar las claves? IA agéntica, código y secretos de cliente

Repositorio de trabajo para preparar la charla del **DevFest Córdoba 2026**, con una duración objetivo de **40 minutos** dentro de un espacio de 45.

## Objetivo

Construir una charla práctica, independiente de proveedores y útil para equipos que desarrollan software con asistentes y agentes de programación basados en IA. La pregunta central es cómo aprovechar estas herramientas sin incumplir compromisos de confidencialidad, exponer credenciales ni tratar como seguro algo que no está protegido por controles efectivos.

La charla parte de la experiencia profesional del ponente y de una auditoría interna sobre seguridad y uso de herramientas. No pretende convertirla en una auditoría pública ni presentar al ponente como especialista en ciberseguridad o asesor jurídico.

## Público y enfoque

Dirigida principalmente a desarrolladores, tech leads, CTOs y responsables de pymes que utilizan suscripciones comerciales de IA y trabajan con código, sistemas o información sujetos a obligaciones de confidencialidad.

- Priorizar medidas concretas y asumibles por equipos con recursos limitados.
- No exigir modelos locales ni infraestructura propia como condición para utilizar IA.
- Evitar el alarmismo, las comparativas comerciales extensas y los tecnicismos innecesarios.
- Distinguir las instrucciones que se dan al agente de los controles técnicos que realmente limitan sus acciones.
- No confundir una suscripción de pago, la ausencia de entrenamiento con los datos, la retención cero de datos (*Zero Data Retention*) y el procesamiento local: son garantías distintas.
- Contrastar con fuentes oficiales las afirmaciones técnicas, comerciales y normativas que puedan cambiar.

## Contenidos que se desarrollarán

1. **Qué puede hacer un agente de programación:** acceso al repositorio, terminal, archivos, herramientas, servicios y credenciales; permisos y límites reales.
2. **Qué ocurre con los datos:** tratamiento, retención, uso para entrenamiento, condiciones del proveedor y diferencias entre productos, planes y configuraciones.
3. **Confidencialidad y obligaciones:** NDA, contratos con clientes, protección de datos y responsabilidades; explicar los límites sin ofrecer asesoramiento jurídico.
4. **Medidas prácticas:** mínimo privilegio, gestión de secretos, separación de entornos, datos sintéticos, revisión de cambios y reglas de agentes.
5. **Prevención y respuesta:** reducir la probabilidad de exposición accidental, reconocer un incidente, contenerlo y escalarlo.
6. **Criterios para el equipo:** una pauta de decisión proporcionada al riesgo, aplicable sin depender de un proveedor concreto.

## Documentación de trabajo

- [Guion inicial](docs/guion-inicial.md): estructura, tiempos, slides previstas y decisiones pendientes.
- [Glosario de términos](docs/glosario.md): definiciones breves y distinciones clave; se ampliará a medida que avance el guion.
- [Entorno de desarrollo seguro con IA agéntica](docs/entorno-desarrollo-seguro-ia-agentica.md): secretos, entornos, accesos, contexto, terminal, revisión y respuesta ante exposiciones. Usa la [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) como referencia principal para estructurar las slides de seguridad.
- [Protección de datos y RGPD en el desarrollo agéntico](docs/proteccion-datos-rgpd-ia-agentica.md): criterios prácticos, anonimización y fuentes oficiales; incluye una propuesta de slide.
- [AI Act y desarrollo agéntico](docs/ai-act-ia-agentica.md): encaje en la charla, propuesta de diapositiva, notas para el ponente y fuentes oficiales.

## Qué se almacenará en este repositorio

- Estructura y guion de la charla, narrativa, tiempos y transiciones.
- Argumentos, ejemplos genéricos, casos hipotéticos identificados como tales y mensajes clave.
- Investigación y referencias a documentación oficial de proveedores, normativa y otras fuentes fiables, con fecha de consulta cuando sea relevante.
- Criterios y listas de comprobación para decidir qué puede compartirse con una herramienta de IA y bajo qué condiciones.
- Diseño de demostraciones seguras, sin secretos ni datos reales de clientes.
- Borradores de diapositivas, notas del ponente y materiales para el ensayo.
- Decisiones editoriales y pendientes de validación.

El trabajo se organizará progresivamente por fases: **estructura → narrativa → contenido → demostración → diapositivas → ensayo**. En cada iteración se abordará la fase o el entregable solicitado, manteniendo las decisiones previas que sigan vigentes.

## Criterios de rigor y confidencialidad

- No inventar incidentes, resultados de auditorías, capacidades de productos ni garantías contractuales.
- Separar hechos verificados, interpretación y recomendaciones prácticas.
- Usar fuentes oficiales para confirmar afirmaciones que dependan del proveedor, el plan, la configuración o la fecha.
- Formular los ejemplos de forma genérica y anonimizada. No incorporar información que permita identificar a clientes, proyectos o sistemas reales.
- **No guardar en el repositorio credenciales, tokens, claves, datos personales, código propietario ni documentación confidencial de clientes**, ni detalles sensibles de la auditoría interna.
- Si una afirmación no se ha podido verificar, dejar constancia de la incertidumbre en lugar de presentarla como un hecho.

## Estado

Repositorio de preparación en evolución. El guion y los documentos de apoyo se actualizarán conforme se acepten decisiones de contenido.
