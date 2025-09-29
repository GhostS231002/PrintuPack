
const navbar = document.querySelector('.navbar');
const links = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

function onScroll(){
  const threshold = 30;
  if(window.scrollY > threshold){
    navbar.classList.add('solid');
    navbar.classList.remove('transparent');
  }else{
    navbar.classList.add('transparent');
    navbar.classList.remove('solid');
  }
}
window.addEventListener('scroll', onScroll);
onScroll();

if(burger){
  burger.addEventListener('click', ()=> links.classList.toggle('show'));
}

document.addEventListener('DOMContentLoaded', ()=>{
  const imgs = document.querySelectorAll('img[data-src]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e=>{
      if(e.isIntersecting){
        const el = e.target; el.src = el.dataset.src; el.removeAttribute('data-src'); obs.unobserve(el);
      }
    })
  });
  imgs.forEach(i=>obs.observe(i));
});

window.whatsAppLink = (phone, text='Hola, vengo de la web PRINTUPACK') =>
  `https://wa.me/${phone.replace(/\D/g,'')}?text=${encodeURIComponent(text)}`;
