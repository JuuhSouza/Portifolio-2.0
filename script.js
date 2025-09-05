//let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    //text.style.marginTop = value * 2 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    //hill1.style.top = value * 0.6 + 'px';
   

})

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickble:true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //responsividade breakpoint

  breakpoints: {
    0:{
        slidePerView: 1
    },
    620: {
      slidePerView: 2
    },
    1024:{
      slidePerView: 3
    }
  }

});