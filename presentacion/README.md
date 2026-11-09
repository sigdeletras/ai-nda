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
Abre la URL local indicada por Vite (con la base `/ai-nda/`). Para comprobar la versión de publicación:
```powershell
npm run build
npm run preview
```

Pruebas de navegador (requieren Google Chrome instalado):
```powershell
npm run test:e2e
```

Las notas del ponente se abren con `S`. Navega con cursores o barra espaciadora; `Esc` muestra el índice. La barra inferior permite saltar a cualquier diapositiva: cada segmento muestra su título al pasar el cursor. La cabecera mantiene el título de la charla visible; el contador se sitúa arriba a la derecha y los controles abajo a la derecha, separados del pie y de la barra segmentada. El diseño adapta tipografía, rejillas y controles a pantallas estrechas, aunque conviene validar las diapositivas con más contenido en móvil.

## Publicación
El workflow `../.github/workflows/deploy-presentation.yml` compila, audita dependencias y ejecuta pruebas de navegador. La publicación utiliza GitHub Pages y la base `/ai-nda/`.

El ejercicio de permisos es una simulación local: no ejecuta comandos, no lee ficheros ni modifica el repositorio.
