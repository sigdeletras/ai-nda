# Guion de demostración

Duración orientativa: 18–23 minutos, integrada en una charla de 40 minutos.

## 1. El agente tiene capacidad de actuar
Abrir el repositorio en VS Code y pedir a Claude Code que explique la arquitectura. Mostrar que puede leer archivos, modificar código y ejecutar tests. Preguntar qué permisos y credenciales tiene disponibles.

## 2. Reglas no son aislamiento
Revisar CLAUDE.md y .claude/settings.json. Explicar que las reglas orientan y las denegaciones limitan algunas operaciones, pero que el control más sólido es no proporcionar secretos ni acceso a producción. No utilizar secretos reales durante la demostración.

## 3. Crear y probar un recurso
Arrancar la API, abrir /docs, registrar dos usuarios ficticios y obtener tokens. Crear un proyecto con el primer usuario y demostrar que el segundo no puede leerlo ni modificarlo.

## 4. Calidad automatizada
Ejecutar:
- ruff check .
- ruff format --check .
- pytest
- bandit -r app

Mostrar resultados reales. Si una comprobación falla, no ocultar el fallo ni afirmar que la demo está validada.

## 5. CI y despliegue
Revisar el workflow y diferenciar validación de código de despliegue. Señalar dónde se aplican permisos mínimos y dónde se deben configurar los secretos. No realizar un despliegue en directo salvo que exista un entorno aislado y previamente probado.

## 6. Incidente simulado
Usar un valor ficticio detectado por revisión o escáner. Explicar que, ante una credencial real expuesta, primero se revoca o rota, después se evalúa el alcance y finalmente se corrigen repositorio e historial. No basta con borrar el archivo.

## Mensaje final
No basta con decirle al agente que sea seguro. Hay que reducir lo que puede ver y hacer, validar el resultado y conservar el control humano sobre las acciones de impacto.
