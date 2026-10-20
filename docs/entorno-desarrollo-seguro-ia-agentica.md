# Entorno de desarrollo seguro con IA agéntica

Guía práctica para la charla **«¿Le puedo dar las claves? IA agéntica, código y secretos de cliente»**. Orientada a equipos pequeños y herramientas comerciales; no exige modelos locales ni infraestructura propia.

## Idea central

La seguridad del entorno no depende solo de lo que se le pide al agente. Hay que limitar técnicamente la información que puede leer, las acciones que puede ejecutar y los sistemas a los que puede acceder.

Distinguir:

- **Buenas prácticas generales:** gestión de secretos, separación de entornos, revisión de código, control de dependencias y respuesta a incidentes.
- **Riesgos que requieren revisar el uso de agentes:** contexto enviado al proveedor, lectura amplia de archivos, ejecución de terminal, herramientas conectadas y automatización de acciones.

## Controles prioritarios

### 1. Secretos y credenciales

- No guardar tokens, claves API, contraseñas ni certificados en el repositorio, prompts o documentación.
- Usar variables de entorno y archivos locales como `.env` cuando proceda; añadirlos a `.gitignore` y comprobar que no se versionan.
- Recordar que `.env` es un mecanismo de configuración, no un gestor de secretos: proteger sus permisos y limitar qué procesos pueden leerlo.
- En producción, preferir un gestor de secretos o el mecanismo seguro de la plataforma. Usar credenciales temporales y revocables cuando sea viable.
- Si una credencial se expone, revocarla o rotarla; borrar el texto visible no elimina necesariamente copias, registros o usos previos.

### 2. Separación de entornos

- Separar desarrollo local, pruebas, preproducción y producción.
- Usar cuentas, bases de datos, permisos y credenciales diferentes.
- Trabajar con datos sintéticos o muestras minimizadas; no copiar bases de datos reales a desarrollo sin justificación y autorización.
- Evitar que el agente tenga acceso de escritura a producción. Los despliegues y las migraciones deben tener una autorización y revisión explícitas.

### 3. Acceso a sistemas de clientes

- Utilizar cuentas individuales, MFA y mínimo privilegio; conceder acceso solo durante el tiempo necesario.
- Usar VPN cuando el acceso a la red privada del cliente lo requiera, conforme a sus políticas.
- La VPN protege el canal y facilita el acceso a una red; **no** impide que un agente transmita información a la que ya tiene acceso.
- No compartir credenciales personales ni introducir secretos de cliente en el contexto del agente.

### 4. Archivos, contexto y datos

- Compartir solo los archivos y fragmentos necesarios para la tarea.
- Revisar archivos de exclusión como `.cursorignore` o equivalentes, sin tratarlos como una frontera de seguridad.
- No asumir que `.gitignore` impide que una herramienta lea un archivo.
- Antes de proporcionar logs, capturas, volcados o respuestas de API, eliminar secretos y datos personales innecesarios.
- Preferir datos sintéticos. La seudonimización no equivale a anonimización y los datos seudonimizados siguen sujetos al RGPD.
- Revisar las condiciones del producto, plan y configuración antes de enviar información confidencial; no confundir pago, ausencia de entrenamiento, ZDR y procesamiento local.

### 5. Terminal, herramientas y aislamiento

- Revisar qué puede ejecutar el agente y qué acciones requieren confirmación.
- No conceder privilegios de administrador por comodidad.
- Inspeccionar comandos destructivos, scripts de instalación, migraciones, despliegues y operaciones sobre datos antes de ejecutarlos.
- Aislar tareas de riesgo mediante contenedores o entornos desechables bien configurados. Un contenedor mal configurado no garantiza aislamiento.
- Revisar extensiones, servidores MCP, dependencias y otras integraciones por su procedencia, permisos y acceso a red o archivos.

### 6. Código y cambios

- Trabajar con control de versiones y ramas de trabajo.
- Revisar el `diff` generado por el agente antes de integrarlo.
- Ejecutar pruebas, análisis estático y detección de secretos cuando estén disponibles.
- Exigir revisión humana para cambios de autenticación, autorización, gestión de secretos, migraciones y despliegues.
- Las instrucciones en `AGENTS.md`, `CLAUDE.md` u otros archivos ayudan a orientar al agente, pero no imponen por sí mismas restricciones técnicas.

### 7. Logs y trazas

Antes de compartir registros con un agente o un servicio externo:

1. Seleccionar solo el fragmento relevante.
2. Eliminar tokens, cabeceras de autorización, contraseñas y datos personales innecesarios.
3. Revisar texto libre, consultas, rutas, identificadores y respuestas que puedan revelar información de cliente.
4. Aplicar controles de acceso y retención al lugar donde se almacenan los logs.

Los logs son otra posible fuente de exposición, no una fuente segura por defecto.

### 8. Respuesta ante una exposición

1. **Contener:** detener la acción y evitar nuevas transmisiones.
2. **Revocar:** invalidar o rotar las credenciales afectadas.
3. **Evaluar:** identificar datos, sistemas, destinatarios, periodo y alcance potencial.
4. **Comunicar:** avisar al responsable interno y seguir el procedimiento contractual, de seguridad y de protección de datos aplicable.
5. **Corregir:** eliminar la causa y revisar permisos, registros y controles.

No afirmar que un dato se ha eliminado por completo sin conocer las capacidades y condiciones del servicio.

## Checklist para el equipo

- [ ] La herramienta y el uso están autorizados para el proyecto.
- [ ] No hay secretos innecesarios accesibles al agente.
- [ ] Desarrollo y producción están separados.
- [ ] Se utilizan datos sintéticos o minimizados siempre que sea posible.
- [ ] Los permisos de archivos, terminal, red e integraciones están limitados.
- [ ] Logs y contexto se revisan antes de compartirlos.
- [ ] Los cambios se inspeccionan y prueban antes de integrarlos.
- [ ] Existe un procedimiento para contener y comunicar exposiciones.

## Propuesta para las diapositivas

No dedicar una diapositiva a cada control. Agrupar el contenido en tres ideas:

1. **Limita el alcance:** secretos, entornos, permisos y accesos de cliente.
2. **Controla entradas y acciones:** contexto, logs, terminal, herramientas y confirmaciones.
3. **Revisa y responde:** Git, pruebas, revisión humana y procedimiento ante exposiciones.

Mensaje de cierre: **limitar accesos, minimizar datos y controlar acciones**.

## Fuentes de referencia

- [OWASP Cheat Sheet Series: Secrets Management](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [OWASP Cheat Sheet Series: Logging](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- [OWASP Cheat Sheet Series: Authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html)
- [GitHub Docs: About secret scanning](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)
- [AEPD: Seguridad de los tratamientos](https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/seguridad-de-los-tratamientos)

Consultar la documentación vigente de cada herramienta para comprobar el alcance real de sus permisos, exclusiones, confirmaciones y políticas de datos.
