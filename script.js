document.addEventListener('DOMContentLoaded',()=>{document.querySelectorAll('[data-carousel]').forEach(carousel=>{const slides=[...carousel.querySelectorAll('.slide')];const prev=carousel.querySelector('.prev');const next=carousel.querySelector('.next');const dotsBox=carousel.querySelector('.dots');let index=0;slides.forEach((_,i)=>{const dot=document.createElement('span');dot.className='dot'+(i===0?' active':'');dot.addEventListener('click',()=>show(i));dotsBox.appendChild(dot)});const dots=[...dotsBox.querySelectorAll('.dot')];function show(n){slides[index].classList.remove('active');dots[index].classList.remove('active');index=(n+slides.length)%slides.length;slides[index].classList.add('active');dots[index].classList.add('active')}prev.addEventListener('click',()=>show(index-1));next.addEventListener('click',()=>show(index+1))});const form=document.getElementById('contactForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value;const email=document.getElementById('email').value;const product=document.getElementById('product').value;const message=document.getElementById('message').value;const subject=encodeURIComponent(`SkyScrub Enquiry - ${product}`);const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProduct: ${product}\n\nMessage:\n${message}`);window.location.href=`mailto:9rmq48mjx7@privaterelay.appleid.com?subject=${subject}&body=${body}`})}});
const revealItems=document.querySelectorAll('.reveal');
const revealObserver=new IntersectionObserver((entries)=>{entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible')}})},{threshold:.15});
revealItems.forEach((item)=>revealObserver.observe(item));

const hubToggle = document.getElementById('hubToggle');
const hubMenu = document.getElementById('hubMenu');

if (hubToggle && hubMenu) {
  hubToggle.addEventListener('click', () => {
    hubMenu.classList.toggle('open');
  });

  document.addEventListener('click', (event) => {
    const hub = document.getElementById('contactHub');
    if (hub && !hub.contains(event.target)) {
      hubMenu.classList.remove('open');
    }
  });
}
