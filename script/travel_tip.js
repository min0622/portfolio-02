
$(function () {

  // header_web
  $('.header_inner nav>ul>li').on({

    mouseover: function () {
      $('header').addClass('on');
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





  // 서브메뉴
  $('.side_menu>.side_inner>ul>li').click(function () {
    let submenu_2 = $(this).find('.submenu_2')

    //  li서브들 다올라감
    $('.submenu_2').not(submenu_2).slideUp().removeClass('show');

    // 선택된 li만 내려가게
    submenu_2.stop(true).slideToggle().addClass('show');

  });


  // scroll
  let spot = $('#item_list').offset().top;

  $(window).scroll(function () {

    // header_scrollfix
    if ($(window).scrollTop() > spot) {
      $('header').addClass('fix');
    } else {
      $('header').removeClass('fix');

    }



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



  // resize

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

    // 1200px이상에선 사라지게
    if (size > 1200) {
      $('.side').css({ display: 'none' })

    } else {
      $('.side').css({ display: 'block' })

    }

  });






});






//js
document.addEventListener('DOMContentLoaded', () => {

  //  header 스크롤시 숨김, 보임
  let prevScrollTop = 0; // 전역 변수로 선언

  document.addEventListener("scroll", function () {
    const nowScrollTop = $(window).scrollTop();

    if (nowScrollTop > prevScrollTop) {
      $('header').addClass('active');
    } else {
      $('header').removeClass('active');
    }

    prevScrollTop = nowScrollTop;
  });


});
