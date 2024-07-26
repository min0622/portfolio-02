$(function () {

  // header_web
  $('.header_inner nav>ul>li').on({

    mouseover: function () {
      $('header').addClass('on');

      // 오버시, 밑줄발생
      $(this).find('.m').addClass('m_line')
      $('.header_inner nav .submenu, header::after').stop(true).slideDown();
    },

    mouseout: function () {
      $('header').removeClass('on');
      $(this).find('.m').removeClass('m_line')
      $('.header_inner nav .submenu, header::after').stop(true).slideUp(300);
    }
  })



  // header_mobile
  //sidemenu btn
  $('.menu').click(function () {
    $('.side_menu').stop(true).animate({ right: '0' }, 600);
    $('.side_bg').stop(true).delay(200).fadeIn();
  });
  $('.close').click(function () {
    $('.side_menu').stop(true).animate({ right: '-100%' }, 600);
    $('.side_bg').stop(true).fadeOut();
  });


  $('.side_menu>.side_inner>ul>li').on({
    mouseover: function () {
      $(this).find('.submenu_2').stop(true).slideDown(300)

    },

    mouseout: function () {
      $(this).find('.submenu_2').stop(true).slideUp()

    }
  });

  
  // header _스크롤
  $(function () {
    var prevScrollTop = 0;

    document.addEventListener("scroll", function () {

      var nowScrollTop = $(window).scrollTop(); //현재 스크롤 위치를 nowScrollTop 에 저장

      if (nowScrollTop > prevScrollTop) { $('header').addClass('active'); }
      // 스크롤 방향(Down) 내릴때 -> 헤더에 active 클래스 추가
      else { $('header').removeClass('active'); } // 스크롤 방향(Up) 올릴때 -> 헤더에 active 클래스 제거
      prevScrollTop = nowScrollTop;  // prevScroll, nowScrollTop 조건 판단 후, 현재 스크롤값을 prevScrollTop 에 저장

    });

  });





  // main
  $('.v_txt').stop(true).delay(1000).fadeOut(800);





  // scroll
  let spot = $('#section_1').offset().top;

  $(window).scroll(function () {

    // top_btn
    let top = $(window).scrollTop();

    if (top >= 1000) {
      $('.top_btn').stop(true).fadeIn();
    } else {

      $('.top_btn').stop(true).fadeOut();
    }


    $('.t_btn').click(function () {

      $(window).scrollTop(0);

    });




  });



  // menu_resize

  $(window).resize(function () {

    let size = innerWidth;
    console.log(size)

    $('.menu').click(function () {


      if (size <= 575) {
        $('.side_bg').css({ backgroundColor: 'transparent' });

      } else {
        $('.side_bg').stop(true).delay(200).fadeIn();
        $('.side_menu').stop(true).animate({ right: '0' }, 600);


      }


    });

    $('.close').click(function () {
      if (size <= 575) {
        $('.side_bg').css({ backgroundColor: 'transparent' });

      } else {
        $('.side_menu').stop(true).animate({ right: '-100%' }, 600);
        $('.side_bg').stop(true).fadeOut();

      }



    });











  });




  // gsap_main
  let mm = gsap.matchMedia();


  mm.add("(min-width: 769px)", () => {


    const ani = gsap.timeline();
    // ani.from('main .video_box', { xPercent: -50 })
    ani.from('main .video_box', { x:'0' })
    ani.to('main .video_box', { width: '100%', height: '100%', borderRadius: 120, duration: .5 })
      .to('main .video_box', { scale: 1.2 })
    ScrollTrigger.create({
      animation: ani,
      trigger: "main",
      start: "2% top",
      end: "+=800",
      scrub: true,
      pin: true,
      markers: false,
      anticipatePin: 1,


    });


  });

  mm.add("(max-width: 768px)", () => {

    const ani_mobile = gsap.timeline();
    // ani_mobile.from('main .video_box', { yPercent: -50 })
    ani_mobile.from('main .video_box', { y:'0'})
    ani_mobile.to('main .video_box', { width: '100%', height: '100%', borderRadius: 100 })
      .to('main .video_box', { scale: 1.2 })
    ScrollTrigger.create({
      animation: ani_mobile,
      trigger: "main",
      start: "2% top",
      end: "+=100",
      scrub: true,
      pin: true,
      markers: false,
      anticipatePin: 1



      
    });


  });





  // gsap_section_2

  const section_2 = document.querySelector("#section_2");
  const horizontal = document.querySelector("#horizontal");
  const sections = gsap.utils.toArray("#horizontal > section");

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: section_2,
      start: "top top",
      // start: "-16% top",
      end: () => "+=" + (horizontal.offsetWidth - innerWidth),
      pin: true,
      scrub: 1,
      snap: {
        snapTo: 1 / (sections.length - 1),
        inertia: false,
        // duration: { min: 0.1, max: 0.1 }
        duration: { min: 0.3, max: 0.3 }
      },
      invalidateOnRefresh: true,
      anticipatePin: 1,
      markers: false
    }
  });






  // section_3,4 arrow
  $('.tip').on({
    mouseover: function () {
      // $(this).css({opacity:'1'});
      $(this).find('.arrow').addClass('b_on')
    },
    mouseout: function () {
      // $(this).css({opacity:'.8'})
      $(this).find('.arrow').removeClass('b_on')

    }

  });


  $('.c_box').on({
    mouseover: function () {
      $(this).find('.c_arrow').addClass('b_on')
    },
    mouseout: function () {
      $(this).find('.c_arrow').removeClass('b_on')

    }

  });






  // // swiper
  // var swiper = new Swiper(".mySwiper", {
  //   slidesPerView: 1.2,
  //   spaceBetween: 20,
  //   centeredSlides: true,
  //   loop: true,

  //   breakpoints: {

  //     431: {
  //       slidesPerView: 1.2,
  //       spaceBetween: 30,
  //     },
  //     576: {
  //       slidesPerView: 1.5,
  //       spaceBetween: 50

  //     },
  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 40,

  //     },
  //     992: {
  //       slidesPerView: 2,
  //       spaceBetween: 70,

  //     },
  //     1020: {
  //       slidesPerView: 2.5,
  //       spaceBetween: 50,

  //     },
  //     1400: {
  //       slidesPerView: 2.5,
  //       spaceBetween: 140,
  //       loop: false

  //     },
  //     1600: {
  //       slidesPerView: 3,
  //       spaceBetween: 90,
  //       loop: false
  //     }
  //     // 1600 : {
  //     //   slidesPerView: 3, 
  //     //   spaceBetween: 90,
  //     //   loop:false
  //     // },
  //   },
  // });


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



// cursor
document.addEventListener('DOMContentLoaded', () => {

  const customCursor = document.querySelector('.custom-cursor');
  const step = document.querySelectorAll('.step')
  const circle = document.querySelector('.cursor_circle')
  const arrow = document.querySelector('.cursor_arrow')

  document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
  });


  step.forEach(stepList => {

    stepList.addEventListener('mouseover', () => {

      customCursor.classList.add('expand');
      circle.style.opacity = '1'
      arrow.style.opacity = '1'

    });
    stepList.addEventListener('mouseout', () => {

      customCursor.classList.remove('expand');
      circle.style.opacity = '0'
      arrow.style.opacity = '0'
    });



  });



});
