# Reglas del agente para este proyecto

## Objetivo
Desarrollar y mantener una API REST didáctica con FastAPI. Usar únicamente datos ficticios.

## Método
- Antes de cambios amplios, presentar un plan breve.
- Hacer cambios pequeños, explicar los archivos afectados y revisar el diff.
- Ejecutar pytest y Ruff después de cambios relevantes.
- No eliminar ni debilitar pruebas para conseguir que pasen.
- No afirmar que una prueba se ejecutó si no se ejecutó.
- No añadir dependencias sin explicar la necesidad.

## Seguridad
- No leer ni mostrar archivos .env, claves, tokens o directorios de secretos.
- No incluir credenciales en código, tests, logs, respuestas HTTP o documentación.
- No ejecutar comandos destructivos ni acceder a sistemas externos.
- No modificar workflows, Dockerfile o configuración de despliegue sin revisión explícita.
- No ejecutar migraciones ni operaciones contra producción.
- Mantener autenticación y autorización en las rutas protegidas.
- No usar datos reales de clientes ni volcados de bases de datos reales.
- No desactivar controles para resolver errores.

## Criterio de finalización
Informar de cambios, pruebas ejecutadas, resultados, riesgos pendientes y cualquier comprobación que no haya sido posible realizar.

Estas instrucciones orientan al agente; no sustituyen permisos, aislamiento del entorno ni controles del sistema operativo.
