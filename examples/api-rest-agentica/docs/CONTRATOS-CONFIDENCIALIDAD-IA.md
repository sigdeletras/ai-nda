# Confidencialidad contractual y uso de IA

Guía operativa para equipos que usan asistentes o agentes de programación. No sustituye la revisión del contrato ni el asesoramiento jurídico.

## Antes de usar una herramienta

- [ ] Identificar el NDA, contrato principal y anexos aplicables al proyecto.
- [ ] Determinar qué información está protegida: código, arquitectura, documentación, datos, incidencias, credenciales u otra información.
- [ ] Comprobar si se permite compartir esa información con proveedores externos y si existen condiciones o autorizaciones específicas.
- [ ] Revisar las obligaciones relevantes del proveedor de IA: tratamiento, retención, entrenamiento, subencargados, ubicación y transferencias, según el producto y plan concretos.
- [ ] Confirmar que la cuenta, el plan y la configuración utilizados son los aprobados para el trabajo.
- [ ] Aplicar minimización: enviar solo el contexto necesario; sustituir datos reales por datos sintéticos cuando sea viable.
- [ ] Limitar los permisos del agente y evitar credenciales, acceso a producción o datos de clientes que no necesite.
- [ ] Definir revisión humana, registro de la decisión y persona responsable.
- [ ] Acordar qué hacer ante una exposición accidental y a quién comunicarla.

## Preguntas que deben resolverse

1. ¿Qué información del cliente se introduciría en el prompt, archivos de contexto o herramientas?
2. ¿El contrato permite ese tratamiento o exige autorización previa?
3. ¿Qué garantías ofrece el proveedor para este producto y configuración concretos?
4. ¿Qué controles técnicos impiden el acceso innecesario a datos, secretos y sistemas?
5. ¿Cómo se comprobará y documentará la decisión?

Si una respuesta esencial no está clara, no introducir información protegida hasta escalar la consulta a la persona responsable del contrato, seguridad o protección de datos, según corresponda.

## Registro mínimo de la decisión

- Proyecto o identificador interno:
- Finalidad de uso:
- Herramienta, producto y tipo de cuenta:
- Categorías de información tratada:
- Base de autorización o cláusula revisada (referencia interna, no copiar el contrato):
- Controles aplicados:
- Responsable y fecha de revisión:
- Condiciones o límites:
- Fecha de revisión siguiente, si procede:

No registrar prompts con información confidencial ni copiar cláusulas contractuales completas en este repositorio.

## Distinciones importantes

- Un NDA no equivale a una autorización automática para usar cualquier proveedor externo.
- Una suscripción de pago no implica por sí sola retención cero ni ausencia de tratamiento.
- Que el proveedor no utilice datos para entrenar no significa que no los procese o retenga.
- Las obligaciones de confidencialidad y las de protección de datos personales están relacionadas, pero no son equivalentes.
- Las instrucciones del agente ayudan a orientar su conducta; no sustituyen permisos, aislamiento ni controles técnicos.

## Para la demo

Usar únicamente el escenario ficticio de la charla. La lista sirve para enseñar qué debe comprobar el equipo, no para concluir que un contrato real permite o prohíbe un uso concreto.
