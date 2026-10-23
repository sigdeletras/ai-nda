# Despliegue en VPS

## Principio

El despliegue es una operación privilegiada. Claude Code puede preparar y revisar la configuración, pero no debe disponer de la clave SSH de producción ni ejecutar despliegues sin aprobación humana.

## Preparación

1. Crear una VPS actualizada y un usuario de despliegue sin acceso administrativo general.
2. Configurar firewall, SSH por clave, TLS mediante proxy inverso y copias de seguridad.
3. Instalar Docker desde la fuente oficial y restringir quién puede usar su socket.
4. Configurar variables y secretos fuera del repositorio.
5. Usar un registro de imágenes y etiquetas inmutables o digest.
6. Proteger la rama principal y revisar los cambios de workflows.

## GitHub Actions

El workflow de CI valida código y construye la imagen; no recibe secretos de producción. El despliegue debe ser un flujo separado, ligado a una versión aprobada y a un entorno de GitHub con revisores si la configuración disponible lo permite.

Antes de habilitar un despliegue automático:
- Fijar las acciones de terceros a SHA completos revisados.
- Definir permisos mínimos para GITHUB_TOKEN.
- Guardar credenciales en el entorno de producción.
- No exponer secretos a código de pull requests no confiables.
- Usar una clave SSH específica, con alcance limitado.
- Evitar comandos remotos arbitrarios y revisar el script de despliegue.
- Probar rollback y comprobación de salud.

## Limitación de esta demo

El repositorio incluye CI y una guía operativa, pero no configura por defecto un despliegue remoto. Los nombres de host, usuarios, claves, registro y rutas dependen de la infraestructura real y deben establecerse de forma explícita. No guardar esos valores sensibles en el repositorio.

## Verificación posterior

- La API responde en el endpoint de salud.
- Swagger solo se expone detrás de TLS y según la política del servicio.
- La base de datos no está publicada directamente a Internet.
- Los logs no contienen tokens ni contraseñas.
- La imagen se ejecuta sin root y sin capacidades Linux innecesarias.
- Existe un procedimiento probado de recuperación.
