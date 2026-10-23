# Matriz de riesgos de la demo

| Riesgo | Probabilidad a reducir mediante | Impacto | Controles |
|---|---|---|---|
| Código sensible enviado al proveedor | Clasificación previa y revisión del contexto | Confidencialidad contractual | Política de uso, proveedor aprobado, datos sintéticos |
| Secreto leído por el agente | No dejarlo disponible y aplicar permisos | Compromiso de sistemas | Entorno aislado, exclusiones, mínimo privilegio |
| Comando peligroso | Restringir ejecución y revisar cambios | Pérdida o alteración de datos | Aprobación, entorno de prueba, copias de seguridad |
| Fallo de autorización en CRUD | Pruebas por propietario y revisión | Acceso indebido | Consultas filtradas por usuario, tests negativos |
| Workflow modificado para exfiltrar secretos | Proteger rama y revisar workflow | Compromiso de CI/CD | Permisos mínimos, revisión obligatoria, secretos de entorno |
| Credencial filtrada en Git | Prevención y detección de secretos | Acceso no autorizado | Gitleaks en CI, rotación y análisis de historial |
| Prompt injection en contenido externo | Instrucciones maliciosas en issues, archivos o webs que intentan dirigir al agente | Ejecución o divulgación no autorizada | Contenido no confiable, permisos mínimos, red restringida y revisión humana |
| Dependencia vulnerable | Paquetes o imagen base con vulnerabilidades conocidas | Compromiso de la aplicación | pip-audit y Trivy en CI |
| Confianza excesiva en tests | Revisar cobertura y diseño de casos | Vulnerabilidad no detectada | Revisión humana y pruebas independientes |

## Protocolo ante exposición

1. Identificar qué secreto o dato se ha expuesto y dónde.
2. Revocar o rotar primero la credencial afectada.
3. Revisar accesos, logs y posibles usos no autorizados.
4. Restringir o retirar el contenido expuesto y evaluar copias e historial.
5. Evaluar obligaciones contractuales y, si procede, de protección de datos con las personas responsables.
6. Documentar el incidente y corregir la causa.
7. Verificar que la credencial antigua ya no funciona.

No incorporar ejemplos de incidentes reales ni datos de clientes en este repositorio.
