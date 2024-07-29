$(function(){


  // swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    centeredSlides: false,
    loop: true,

    breakpoints: {
      576: {
        spaceBetween: 50,
        centeredSlides: false,

      },
      1020: {
        spaceBetween: 40,
        centeredSlides: false,

      },
      1201: {
        slidesPerView: 'auto',
        spaceBetween: 60,
        centeredSlides: true,
        loop: false
      }

    }
  });

});