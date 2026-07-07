const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

function sendMessage(event) {
  event.preventDefault();
  document.getElementById('form-note').textContent = 'Interest submitted. Connect this form to Formspree, Google Forms, or your Hostinger form backend to receive messages.';
  event.target.reset();
}
