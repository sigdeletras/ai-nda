import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import 'reveal.js/dist/reset.css';
import 'reveal.js/dist/reveal.css';
import './styles.css';
import { slides } from './slides.js';

document.querySelector('#slides').innerHTML = slides.map((slide) => slide.html).join('');
function getDeckSize() {
  const portraitPhone = window.matchMedia('(max-width: 600px) and (orientation: portrait)').matches;
  return portraitPhone
    ? { width: window.innerWidth, height: window.innerHeight, margin: 0.02, minScale: 0.85, center: true }
    : { width: 1920, height: 1080, margin: 0, minScale: 0.2, center: false };
}

const deck = new Reveal({
  hash: true, hashOneBasedIndex: true, slideNumber: false, progress: false,
  controls: true, keyboard: true, overview: true, scrollActivationWidth: null,
  transition: 'fade', backgroundTransition: 'fade',
  ...getDeckSize(), maxScale: 1.5,
  plugins: [RevealNotes]
});

// Recalcular el lienzo al cambiar orientación o tamaño de ventana.
let resizeFrame;
window.addEventListener('resize', () => {
  cancelAnimationFrame(resizeFrame);
  resizeFrame = requestAnimationFrame(() => deck.configure(getDeckSize()));
}, { passive: true });

// Navegación inferior: un segmento accesible por cada diapositiva.
const navigation = document.createElement('nav');
navigation.className = 'slide-progress';
navigation.setAttribute('aria-label', 'Navegación por diapositivas');
navigation.setAttribute('aria-roledescription', 'Progreso de la presentación');

const visited = new Set();
const segments = slides.map((slide, index) => {
  const template = document.createElement('template');
  template.innerHTML = slide.html;
  const heading = template.content.querySelector('h1, h2');
  const title = (heading?.textContent || `Diapositiva ${index + 1}`)
    .replace(/\s+/g, ' ')
    .trim();

  const segment = document.createElement('button');
  segment.type = 'button';
  segment.className = 'slide-progress__segment';
  segment.dataset.title = title;
  segment.setAttribute('aria-label', `Ir a diapositiva ${index + 1}: ${title}`);
  segment.title = `${index + 1}. ${title}`;
  segment.addEventListener('click', () => deck.slide(index));
  navigation.append(segment);
  return segment;
});
document.body.append(navigation);

function updateSlideProgress(index) {
  visited.add(index);
  document.documentElement.dataset.cover = index === 0 ? 'true' : 'false';
  document.documentElement.dataset.accent = deck.getSlides()[index]?.dataset.accent || 'blue';
  segments.forEach((segment, segmentIndex) => {
    const active = segmentIndex === index;
    segment.classList.toggle('is-active', active);
    segment.classList.toggle('is-visited', visited.has(segmentIndex) && !active);
    if (active) segment.setAttribute('aria-current', 'step');
    else segment.removeAttribute('aria-current');
  });
}

deck.on('ready', (event) => updateSlideProgress(event.indexh));
deck.on('slidechanged', (event) => updateSlideProgress(event.indexh));
void deck.initialize();

document.querySelector('#evaluate')?.addEventListener('click', () => {
  const selected = [...document.querySelectorAll('.options input:checked')].map((el) => el.value);
  const missing = ['read', 'tests'].filter((v) => !selected.includes(v));
  const feedback = document.querySelector('#feedback');
  const messages = [];
  if (selected.includes('env')) messages.push('Retira el acceso al .env y a las credenciales.');
  if (selected.includes('push')) messages.push('Evita el push directo: usa pull request y revisión.');
  if (missing.length) messages.push('Valora habilitar lectura y tests aislados para esta tarea.');
  feedback.textContent = messages.length ? messages.join(' ') : 'Decisión proporcionada: lectura y tests aislados; sin secretos ni publicación directa.';
  feedback.dataset.status = messages.length ? 'warning' : 'ok';
});
