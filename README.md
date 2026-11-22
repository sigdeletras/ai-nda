# ¿Le puedo dar las claves? IA agéntica, código y secretos de cliente

Repositorio de preparación de la charla para **La previa cordobesa de la DevFest**, organizada por GDG Córdoba el **27 de noviembre de 2026**. Duración: **25 minutos + 5 minutos de preguntas**.

## Objetivo

Construir una charla práctica, independiente de proveedores y útil para equipos que desarrollan software con asistentes y agentes de programación basados en IA. La pregunta central es cómo aprovechar estas herramientas sin incumplir compromisos de confidencialidad, exponer credenciales ni tratar como seguro algo que no está protegido por controles efectivos.

La charla parte de la experiencia profesional del ponente y de una revisión interna sobre seguridad y uso de herramientas. No pretende convertirla en una auditoría pública ni presentar al ponente como especialista en ciberseguridad o asesor jurídico.

## Público y enfoque

Dirigida principalmente a desarrolladores, tech leads, CTOs y responsables de pymes que utilizan suscripciones comerciales de IA y trabajan con código, sistemas o información sujetos a obligaciones de confidencialidad.

- Priorizar medidas concretas y asumibles por equipos con recursos limitados.
- No exigir modelos locales ni infraestructura propia como condición para utilizar IA.
- Evitar el alarmismo, las comparativas comerciales extensas y los tecnicismos innecesarios.
- Distinguir las instrucciones que se dan al agente de los controles técnicos que realmente limitan sus acciones.
- No confundir una suscripción de pago, la ausencia de entrenamiento con los datos, la retención cero de datos (*Zero Data Retention*) y el procesamiento local: son garantías distintas.
- Contrastar con fuentes oficiales las afirmaciones técnicas, comerciales y normativas que puedan cambiar.

## Guion y presentación

- [Guion de la charla](docs/guion-inicial.md): estructura definitiva, tiempos y notas para la representación.
- [Presentación publicada](https://sigdeletras.github.io/ai-nda/).
- [Contenido y notas de las diapositivas](presentacion/CONTENIDO-SLIDES.md): referencia editorial sincronizada con la presentación.
- [Código de la presentación](presentacion/src/slides.js).

## Documentación de apoyo

- [SDD y factoría de software agéntica](docs/sdd-factoría-software-agéntica.md): especificaciones, orquestación, autonomía lights-on/lights-off y controles para delegar tareas.
- [Glosario de términos](docs/glosario.md): definiciones breves y distinciones clave.
- [Entorno de desarrollo seguro con IA agéntica](docs/entorno-desarrollo-seguro-ia-agentica.md): secretos, entornos, accesos, contexto, terminal, revisión y respuesta ante exposiciones. Combina la [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) (controles) con el [OWASP Top 10 for Agentic Applications 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) (taxonomía de amenazas).
- [SAST y SonarQube en la charla](docs/sast-sonarqube-charla.md): papel del análisis estático y encaje con CI, secretos y confidencialidad.
- [CI/CD y seguridad de los agentes](docs/ci-cd-ia-agentica.md): permisos de workflows, secretos, pull requests no confiables y validaciones automatizadas.
- [Gobernanza del uso de IA de terceros e ISO/IEC 42001](docs/gobernanza-uso-ia-terceros-iso-42001.md): evaluación de proveedores, gestión de riesgos, política de uso aceptable y supervisión.
- [Políticas de privacidad y tratamiento de datos de proveedores IA](docs/privacidad/PROVEEDORES-IA-POLITICAS-DATOS.md): comparativa inicial de modalidades empresariales, entrenamiento, retención, ZDR y fuentes oficiales.
- [Protección de datos y RGPD en el desarrollo agéntico](docs/proteccion-datos-rgpd-ia-agentica.md): criterios prácticos, anonimización y fuentes oficiales.
- [AI Act y desarrollo agéntico](docs/ai-act-ia-agentica.md): encaje en la charla, propuesta de diapositiva, notas y fuentes oficiales.

## Proyecto práctico: API REST con IA agéntica

Demo en [examples/api-rest-agentica](examples/api-rest-agentica/README.md), con FastAPI, JWT Bearer, CRUD con autorización por propietario, Swagger, SQLAlchemy/PostgreSQL, tests, Ruff, Bandit, Docker, reglas de Claude Code y CI con GitHub Actions.

Documentación de la demo:
- [Guía de ejecución](examples/api-rest-agentica/README.md)
- [Seguridad de la IA agéntica](examples/api-rest-agentica/docs/SEGURIDAD-IA-AGENTICA.md)
- [Configuración de VS Code y Claude Code](examples/api-rest-agentica/docs/CONFIGURACION-VSCODE-CLAUDE.md)
- [Guion de la demostración](examples/api-rest-agentica/docs/GUIA-DEMO.md)
- [Confidencialidad contractual y uso de IA](examples/api-rest-agentica/docs/CONTRATOS-CONFIDENCIALIDAD-IA.md)
- [Clasificación de información](examples/api-rest-agentica/docs/CLASIFICACION-INFORMACION.md)
- [Matriz de riesgos y respuesta](examples/api-rest-agentica/docs/MATRIZ-RIESGOS.md)
- [Despliegue en VPS](examples/api-rest-agentica/docs/DESPLIEGUE-VPS.md)

La CI está definida en [api-rest-agentica.yml](.github/workflows/api-rest-agentica.yml). El despliegue remoto no queda habilitado por defecto: requiere adaptar la infraestructura y configurar secretos y aprobaciones. La demo es educativa y no está certificada para producción.

## Criterios de rigor y confidencialidad

- No inventar incidentes, resultados de auditorías, capacidades de productos ni garantías contractuales.
- Separar hechos verificados, interpretación y recomendaciones prácticas.
- Usar fuentes oficiales para confirmar afirmaciones que dependan del proveedor, el plan, la configuración o la fecha.
- Formular los ejemplos de forma genérica y anonimizada. No incorporar información que permita identificar a clientes, proyectos o sistemas reales.
- **No guardar en el repositorio credenciales, tokens, claves, datos personales, código propietario ni documentación confidencial de clientes**, ni detalles sensibles de la revisión interna.
- Si una afirmación no se ha podido verificar, dejar constancia de la incertidumbre en lugar de presentarla como un hecho.

