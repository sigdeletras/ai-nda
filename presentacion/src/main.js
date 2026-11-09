import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes/notes.esm.js';
import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import './styles.css';
import { slides } from './slides.js';

document.querySelector('#slides').innerHTML = slides.map((slide) => slide.html).join('');
const deck = new Reveal({
  hash: true, hashOneBasedIndex: true, slideNumber: 'c/t', progress: true,
  controls: true, keyboard: true, overview: true, center: true,
  transition: 'fade', backgroundTransition: 'fade',
  width: 1600, height: 900, margin: 0.06, minScale: 0.35, maxScale: 1.5,
  plugins: [RevealNotes]
});
await deck.initialize();

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
