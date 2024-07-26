$(function(){

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
  
        var nowScrollTop = $(window).scrollTop(); 
        if (nowScrollTop > prevScrollTop) { $('header').addClass('active'); }
       
        else { $('header').removeClass('active'); } 
        prevScrollTop = nowScrollTop;  
  
      });
  
    });
  
      // 더보기버튼
  $('.swiper-slide').on({
    mouseover: function () {
      $(this).find('.i_right ').addClass('b_on')
    },
    mouseout: function () {
      $(this).find('.i_right ').removeClass('b_on')

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




    // section_slide
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 'auto',
        spaceBetween: 16,
        breakpoints: {

    
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

  
  
    // scroll
    let spot = $('#trend').offset().top;
  
    $(window).scroll(function () {
  
  
      // top_btn
      let top = $(window).scrollTop();
      // console.log(top)
  
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









});

document.addEventListener('DOMContentLoaded',()=>{
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


})

