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



  // 서브메뉴
  $('.side_menu>.side_inner>ul>li').click(function () {
    let submenu_2 = $(this).find('.submenu_2')

    //  li서브들 다올라감
    $('.submenu_2').not(submenu_2).slideUp().removeClass('show');

    // 선택된 li만 내려가게
    submenu_2.stop(true).slideToggle().addClass('show');

  });




  // scroll

  // let spot = $('#section_1').offset().top;


  $(window).scroll(function () {

    // top_btn
    let top = $(window).scrollTop();

    if (top >= 1200) {
      $('.top_btn').stop(true).fadeIn(300);
    } else {

      $('.top_btn').stop(true).fadeOut(300);
    }


    $('.t_btn').click(function () {

      $(window).scrollTop(0);

    });







  });



  // menu_resize

  $(window).resize(function () {

    let size = innerWidth;
    // console.log(size)

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


});
// jquery





// js
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


   
//  header 스크롤시 숨김, 보임
  let prevScrollTop = 0; // 전역 변수로 선언

  document.addEventListener("scroll", function () {
    const nowScrollTop = $(window).scrollTop(); // 현재 스크롤 위치를 nowScrollTop에 저장
  
    if (nowScrollTop > prevScrollTop) {
      $('header').addClass('active'); // 스크롤 방향(Down) 내릴 때 -> 헤더에 active 클래스 추가
    } else {
      $('header').removeClass('active'); // 스크롤 방향(Up) 올릴 때 -> 헤더에 active 클래스 제거
    }
  
    prevScrollTop = nowScrollTop; // 현재 스크롤 값을 prevScrollTop에 저장
  });
  



});
