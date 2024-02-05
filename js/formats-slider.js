const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: '.pagination',
    bulletClass: 'pagination-button',
    bulletActiveClass: 'pagination-button.active',
    clickable: true,
  },
  navigation: {
    nextEl: '.carousel-button.right',
    prevEl: '.carousel-button.left',
  },
});