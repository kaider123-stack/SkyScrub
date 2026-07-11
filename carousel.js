document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.sky-carousel');
  if (!carousel) return;
  const track = carousel.querySelector('.sky-carousel-track');
  const slides = [...carousel.querySelectorAll('.sky-slide')];
  const dots = [...carousel.querySelectorAll('.sky-dot')];
  const prev = carousel.querySelector('.sky-prev');
  const next = carousel.querySelector('.sky-next');
  let index = 0;
  let timer;
  const show = (newIndex) => {
    index = (newIndex + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  };
  const start = () => { clearInterval(timer); timer = setInterval(() => show(index + 1), 6000); };
  prev?.addEventListener('click', () => { show(index - 1); start(); });
  next?.addEventListener('click', () => { show(index + 1); start(); });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { show(i); start(); }));
  let touchStart = null;
  carousel.addEventListener('touchstart', e => touchStart = e.changedTouches[0].clientX, {passive:true});
  carousel.addEventListener('touchend', e => {
    if (touchStart === null) return;
    const diff = e.changedTouches[0].clientX - touchStart;
    if (Math.abs(diff) > 45) show(index + (diff < 0 ? 1 : -1));
    touchStart = null; start();
  }, {passive:true});
  carousel.addEventListener('mouseenter', () => clearInterval(timer));
  carousel.addEventListener('mouseleave', start);
  show(0); start();
});
