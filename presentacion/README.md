# Presentación · DevFest Córdoba 2026

Presentación Reveal.js + Vite. Contenido y notas: `src/slides.js`. Estilos: `src/styles.css`. Inicialización y ejercicio: `src/main.js`.

## Requisitos
Node.js 20+ y npm.

## Windows / PowerShell
```powershell
cd presentacion
npm install
npm run dev
```
Abre la URL local indicada por Vite. Para comprobar la versión de publicación:
```powershell
npm run build
npm run preview
```

Las notas del ponente se abren con `S`. Navega con cursores o barra espaciadora; `Esc` muestra el índice.

## Publicación
El workflow `../.github/workflows/deploy-presentation.yml` publica `presentacion/dist` en GitHub Pages. Base configurada: `/ai-nda/`.

El ejercicio de permisos es una simulación local: no ejecuta comandos, no lee ficheros ni modifica el repositorio.
