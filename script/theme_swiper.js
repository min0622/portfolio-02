$(function(){

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        breakpoints: {

    
          765: {
            loop: false
          },
          1119: {
            slidesPerView: 'auto',
            spaceBetween: 16,
            loop: false
    
          },
          1740: {
            slidesPerView: 'auto',

            spaceBetween: 32,
            loop: false
          }
        
        }
       
      });


});
