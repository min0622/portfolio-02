document.addEventListener('DOMContentLoaded', () => {

    var swiper = new Swiper('.mySwiper', {
        slidesPerView: 'auto',
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
