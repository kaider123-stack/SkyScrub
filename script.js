document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-carousel]').forEach(c=>{
    const slides=[...c.querySelectorAll('.slide')];
    const prev=c.querySelector('.prev');
    const next=c.querySelector('.next');
    const dotsBox=c.querySelector('.dots');
    let i=0;
    let startX=0;
    slides.forEach((_,idx)=>{
      const d=document.createElement('span');
      d.className='dot'+(idx===0?' active':'');
      d.setAttribute('aria-label',`Go to slide ${idx+1}`);
      d.onclick=()=>show(idx);
      dotsBox.appendChild(d);
    });
    const dots=[...dotsBox.querySelectorAll('.dot')];
    function show(n){
      slides[i].classList.remove('active');
      dots[i].classList.remove('active');
      i=(n+slides.length)%slides.length;
      slides[i].classList.add('active');
      dots[i].classList.add('active');
    }
    prev.onclick=()=>show(i-1);
    next.onclick=()=>show(i+1);
    c.addEventListener('touchstart',e=>startX=e.changedTouches[0].screenX,{passive:true});
    c.addEventListener('touchend',e=>{
      const diff=e.changedTouches[0].screenX-startX;
      if(Math.abs(diff)>50) show(i+(diff<0?1:-1));
    },{passive:true});
    setInterval(()=>show(i+1),5000);
  });
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{
    if(e.isIntersecting)e.target.classList.add('visible');
  }),{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
});
