const active = document.querySelector('.menu-icon');
const noAnimation = document.querySelectorAll('.no-animations')

active.addEventListener('click',()=>{
    active.classList.toggle('active');
    noAnimation.forEach(line => {
      line.classList.remove('no-animations');
      
    }); 
})