# Presentación · La previa cordobesa de la DevFest 2026

Presentación Reveal.js + Vite para GDG Córdoba.

- **Charla:** ¿Le puedo dar las claves? IA agéntica, código y secretos de cliente
- **Ponente:** Patricio Soriano · Responsable del Área de GIS y Desarrollo · Geoinnova
- **Fecha:** 27 de noviembre de 2026
- **Duración:** 25 minutos + 5 minutos de preguntas
- **Publicada:** https://sigdeletras.github.io/ai-nda/

## Estructura

Portada, 8 diapositivas de contenido, referencias y cierre. El texto visible y las notas se mantienen en:
- [Contenido y notas de las slides](CONTENIDO-SLIDES.md)
- Implementación: `src/slides.js`

Las notas del ponente se abren con `S`. Navega con cursores o barra espaciadora; `Esc` muestra el índice. La barra inferior permite saltar a cualquier diapositiva y muestra el título al pasar el cursor.

## Desarrollo

Requiere Node.js 20+ y npm.

```bash
npm install
npm run dev
```

Para compilar y previsualizar:

```bash
npm run build
npm run preview
```

Pruebas de navegador (requieren Google Chrome instalado):

```bash
npm run test:e2e
```

## Publicación

El workflow `../.github/workflows/deploy-presentation.yml` compila, audita dependencias y ejecuta pruebas de navegador. La publicación utiliza GitHub Pages y la base `/ai-nda/`.

