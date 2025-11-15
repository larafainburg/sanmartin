// Scroll suave para los links del menú
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;

    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Manejo simple del formulario (por ahora solo feedback en pantalla)
const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email) {
      statusEl.textContent = 'Completá al menos nombre y email.';
      statusEl.style.color = '#f97373';
      return;
    }

    // Acá podrías hacer un fetch a n8n, Make, etc.
    // Por ahora solo mostramos un mensaje de confirmación.
    statusEl.textContent = '¡Gracias! Tu mensaje fue registrado. Te vamos a contactar.';
    statusEl.style.color = '#a5f3fc';

    form.reset();
  });
}
