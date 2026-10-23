# Clasificación de información para usar IA

Matriz didáctica para decidir qué contexto compartir con un asistente o agente. La clasificación real debe adaptarse a la política de la organización y a los contratos aplicables.

| Categoría | Ejemplos | Criterio inicial para la demo |
|---|---|---|
| Pública o creada para el ejercicio | Código de ejemplo, documentación pública | Compartir si no contiene información añadida confidencial. |
| Interna | Procedimientos, notas técnicas, arquitectura interna | Revisar necesidad y política interna antes de compartir. |
| Confidencial de cliente | Código, diseños, incidencias o documentación protegida por contrato | No compartir hasta comprobar autorización y condiciones del proveedor. |
| Datos personales | Datos de usuarios, contactos, registros identificables | Preferir datos sintéticos; evaluar por separado obligaciones de protección de datos. |
| Secretos y credenciales | API keys, tokens, contraseñas, claves privadas, variables de entorno | No incluir en prompts ni repositorios. Usar secretos ficticios y mantenerlos fuera del alcance del agente. |
| Producción o acceso privilegiado | Configuración productiva, volcados de datos, credenciales operativas | Excluir de la demo y restringir técnicamente el acceso. |

## Regla práctica

Antes de compartir información, responder:

1. ¿Es necesaria para la tarea?
2. ¿Está permitido compartirla con esta herramienta y cuenta?
3. ¿Puedo reducirla, anonimizarla o sustituirla por datos sintéticos?
4. ¿Puede el agente acceder a más información o realizar más acciones de las necesarias?
5. ¿Qué evidencia tengo de los controles aplicados?

Si no está claro si la información está protegida o si el uso está autorizado, detenerse y consultar antes de enviarla.

## Aplicación al proyecto de ejemplo

- Utilizar únicamente usuarios, tokens, datos y configuraciones ficticios.
- No copiar código ni documentación de clientes reales.
- No incluir archivos .env, claves SSH ni tokens reales en el contexto.
- No conceder acceso a producción, al socket Docker ni a directorios ajenos al proyecto.
- Revisar los cambios del agente y ejecutar las pruebas antes de aceptar el resultado.

La clasificación no es una garantía técnica: debe acompañarse de controles de acceso, configuración y supervisión. Tampoco reemplaza el análisis del contrato ni la evaluación de protección de datos.
