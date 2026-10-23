# VS Code y Claude Code

## Preparación

- Abrir la carpeta examples/api-rest-agentica como raíz del espacio de trabajo.
- Instalar Claude Code siguiendo la documentación oficial y autenticarse con el método autorizado para la organización.
- Mantener el proyecto sin credenciales reales y con datos sintéticos.
- Revisar CLAUDE.md y .claude/settings.json antes de empezar.
- No activar modos que omitan comprobaciones de permisos.
- No compartir el directorio personal, claves SSH, socket Docker ni archivos de producción con el entorno del agente.

## Tareas sugeridas para la demo

### Explorar
«Resume la arquitectura, los endpoints y las pruebas. No modifiques archivos ni ejecutes comandos todavía».

### Implementar
«Añade una prueba negativa para el acceso de un usuario a un proyecto ajeno. Explica el test antes de modificar código».

### Auditar
«Revisa autenticación, autorización, gestión de secretos y logs. No muestres valores sensibles. Separa hallazgos confirmados de hipótesis y señala qué comprobaciones manuales faltan».

### Revisar cambios
«Resume el diff, ejecuta pytest y Ruff, y lista los riesgos pendientes. No modifiques workflows ni despliegue».

## Evidencia a mostrar

- Qué archivos ha leído el agente.
- Qué comandos propone o ejecuta.
- Cuándo pide autorización y qué bloquea la configuración.
- Qué tests se han ejecutado realmente.
- Qué debe revisar una persona antes de aceptar los cambios.

Las instrucciones del proyecto son orientación. La protección efectiva depende también de permisos, aislamiento, conectividad y ausencia de secretos accesibles.
