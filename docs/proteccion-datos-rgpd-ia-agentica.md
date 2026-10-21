# Protección de datos personales en el desarrollo agéntico con IA

Guía práctica para la charla **«¿Le puedo dar las claves? IA agéntica, código y secretos de cliente»**. No es asesoramiento jurídico; los tratamientos concretos deben revisarse con la persona responsable de privacidad o el DPD, cuando corresponda.

## Idea clave

El RGPD no prohíbe enviar datos personales a una herramienta de IA de forma automática ni permite hacerlo por el mero hecho de pagar una suscripción. Antes de introducirlos hay que justificar el tratamiento, limitar los datos y comprobar las condiciones del proveedor, el contrato y las medidas de seguridad. Con agentes, hay que revisar también qué archivos, herramientas, registros y sistemas pueden leer o transmitir.

## Qué datos se pueden enviar

No existe una lista universal de datos permitidos: depende de la finalidad, la base jurídica, las obligaciones con el cliente, el riesgo y las condiciones del servicio.

- **Preferible:** datos sintéticos, ejemplos ficticios, esquemas de tablas, código genérico y fragmentos mínimos sin información real.
- **Solo tras comprobar y autorizar el uso:** datos personales ordinarios estrictamente necesarios para una finalidad legítima, con base jurídica, transparencia y garantías adecuadas.
- **Especial cautela:** categorías especiales (por ejemplo, salud, biometría usada para identificar, opiniones políticas) y datos relativos a condenas e infracciones penales. Su tratamiento está sujeto a requisitos adicionales (RGPD, arts. 9 y 10).
- **No enviar por defecto:** expedientes reales, volcados de producción, datos identificativos, información de clientes o registros completos cuando la tarea pueda resolverse con una muestra sintética o reducida. Revisar también logs, prompts, capturas, adjuntos y contexto que el agente incorpora automáticamente.

La autorización interna o del cliente no sustituye por sí sola la necesidad de cumplir el RGPD. Tampoco debe asumirse que un dato es anónimo porque se hayan quitado el nombre y el DNI.

## Cómo preparar datos para trabajar con IA

1. **Reducir:** compartir únicamente los campos y filas imprescindibles; recortar el contexto y excluir datos ajenos a la tarea.
2. **Sustituir:** cambiar nombres, correos, teléfonos, direcciones, identificadores y valores libres por datos ficticios. Usar datos sintéticos cuando sea viable.
3. **Generalizar:** reducir precisión temporal o geográfica, agrupar valores o eliminar atributos raros que permitan reconocer a alguien.
4. **Separar:** si se necesita vincular registros, mantener la tabla de correspondencias fuera de la herramienta y con acceso restringido.
5. **Comprobar:** valorar si alguien podría volver a identificar a una persona combinando los datos con otras fuentes. Revisar texto libre, metadatos y casos singulares.

**Diferencia importante:**
- **Anonimización:** la persona deja de ser identificable por medios razonablemente probables. Si es efectiva, la información deja de ser dato personal a efectos del RGPD.
- **Seudonimización:** se sustituyen identificadores, pero la reidentificación sigue siendo posible con información adicional. Los datos siguen sujetos al RGPD.

Quitar identificadores directos no garantiza anonimización. Coordenadas precisas, fechas, combinaciones de atributos o texto libre pueden permitir la reidentificación.

## Comprobaciones antes de usar un proveedor externo

- ¿Hay una finalidad definida y una base jurídica válida? ¿El uso es compatible con la información dada a las personas?
- ¿El cliente y los contratos permiten este tratamiento y el uso de subencargados?
- Si el proveedor trata datos por cuenta de la organización, ¿se ha revisado el contrato de encargado del tratamiento (art. 28), las instrucciones, la confidencialidad, la seguridad y la eliminación?
- ¿Dónde se procesan los datos y hay transferencias internacionales? ¿Qué garantías se aplican?
- ¿Qué retención, uso para mejora/entrenamiento, acceso humano y controles de borrado establece el plan concreto?
- ¿Qué permisos tiene el agente? Limitar acceso a repositorios, terminal, navegador, bases de datos, archivos y secretos. Revisar antes de enviar y antes de ejecutar cambios.

No confundir **no usar los datos para entrenar**, **retención limitada o nula (ZDR)** y **procesamiento local**: son garantías distintas. Verificar las condiciones vigentes del producto y plan contratados; una preferencia escrita en las instrucciones del agente no sustituye un control técnico o contractual.

## Si se produce una exposición accidental

1. Detener la acción y limitar el acceso o la transmisión adicional.
2. Registrar qué datos se expusieron, a qué servicio, cuándo y con qué alcance; conservar evidencias sin difundirlas más.
3. Avisar de inmediato al responsable interno y al cliente según el procedimiento acordado. No decidir unilateralmente que el incidente no es relevante.
4. Evaluar con la persona responsable de privacidad si constituye una violación de seguridad de datos personales y si procede notificar a la autoridad de control en el plazo aplicable —el RGPD establece, cuando proceda, un máximo de 72 horas desde que se tiene constancia— y comunicarlo a las personas afectadas cuando corresponda (arts. 33 y 34).

## Marco normativo y fuentes oficiales

### Qué significa cada referencia

- **RGPD:** Reglamento General de Protección de Datos de la Unión Europea. Establece las reglas comunes sobre el tratamiento de datos personales, los derechos de las personas y las obligaciones de responsables y encargados.
- **LOPDGDD:** Ley Orgánica española que adapta y complementa el marco del RGPD en España e incorpora, entre otras materias, garantías de derechos digitales. No sustituye al RGPD: ambos deben leerse conjuntamente.
- **Guías de la AEPD:** documentos orientativos de la Agencia Española de Protección de Datos que explican cómo interpretar y aplicar la normativa en situaciones concretas, por ejemplo, anonimización, seguridad o uso de IA. Ayudan a aplicar los requisitos, pero no sustituyen la ley ni el análisis del caso concreto.

### Normativa y recursos

- [Reglamento General de Protección de Datos (RGPD), Reglamento (UE) 2016/679 — EUR-Lex](https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX:32016R0679)
- [Ley Orgánica 3/2018, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD) — BOE](https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673)
- [AEPD: Adecuación al RGPD de tratamientos que incorporan IA (PDF)](https://www.aepd.es/guias/adecuacion-rgpd-ia.pdf) — **Pendiente de revisión**.
- [AEPD: Orientaciones sobre el uso de la inteligencia artificial agéntica (PDF)](https://www.aepd.es/guias/orientaciones-ia-agentica.pdf) — **Pendiente de revisión**.
- [AEPD: Política de uso de inteligencia artificial generativa](https://www.aepd.es/documento/politica-iag-aepd.pdf) — **Pendiente de revisión**.
- [AEPD: Exactitud, idoneidad y calidad de los datos en tratamientos con IA](https://www.aepd.es/guias-y-herramientas/guias) — localizar la publicación concreta y verificar su vigencia; **pendiente de revisión**.
- [AEPD: Guías y herramientas sobre IA](https://www.aepd.es/guias-y-herramientas/guias) — catálogo para localizar otras publicaciones de uso profesional; **pendiente de revisión**.

## Propuesta para una slide

### RGPD y agentes de IA: ¿qué datos puedo enviar?

**No hay una lista universal de datos permitidos.** Depende de la finalidad, la base jurídica, el contrato y las garantías del proveedor.

- **Por defecto:** datos sintéticos y código genérico; aplicar minimización.
- **Si son datos personales:** justificar el tratamiento, revisar contrato/proveedor y compartir solo lo imprescindible.
- **Anonimizar antes de enviar:** eliminar o generalizar identificadores y atributos indirectos; comprobar riesgo de reidentificación.
- **Ojo:** seudonimizar no es anonimizar; los datos seudonimizados siguen siendo datos personales.
- **Con agentes:** controlar también archivos, logs, herramientas y permisos a los que acceden.

**Regla práctica:** si la tarea funciona con datos ficticios, no uses datos reales.

*Referencias en notas: RGPD arts. 5, 6, 9, 10, 25, 28, 32–34; LOPDGDD; guías y FAQ de la AEPD enlazadas arriba.*
