$(function () {

   // 웹메뉴
   function webMenu() {
    $('.header_inner nav>ul>li').on({

      mouseover: function () {
        // 가상공간 내려오게
        $('header').addClass('on');

        // 밑줄발생
        $(this).find('.m').addClass('m_line');

        // 서브메뉴들 슬라이드 다운
        $('.header_inner nav .submenu, header::after').stop(true).slideDown();
      },

      mouseout: function () {
        $('header').removeClass('on');
        $(this).find('.m').removeClass('m_line');
        $('.header_inner nav .submenu, header::after').stop(true).slideUp(300);
      }
    });
  };
  webMenu();



  // header_mobile
  //모바일 사이드ㄴ메뉴
  function mobileMenu() {
    $('.menu').click(function () {
      $('.side_menu').stop(true).animate({ right: '0' }, 600);
      $('body').css({ overflow: 'hidden' });

      let size = window.innerWidth;
      if (size <= 575) {
        $('.side_bg').css({ backgroundColor: 'transparent' });
      } else {
        $('.side_bg').stop(true).delay(200).fadeIn();
        $('.side_bg').css({ backgroundColor: 'rgba(0, 0, 0, .6)' });

      }

    });

    $('.close').click(function () {
      $('.side_menu').stop(true).animate({ right: '-100%' }, 600);
      $('.side_bg').stop(true).fadeOut(function(){
        $('.side_bg').css({ backgroundColor: 'transparent'});
      });
      $('body').css({ overflow: 'visible' });

    });
  };
  mobileMenu();



  // 모바일 사이드메뉴_서브메뉴
  function mobile_sideMenu() {

    $('.side_menu>.side_inner>ul>li').click(function () {
      let submenuList = $(this).find('.submenu_2'); // 클릭한 서브메뉴(submenuList)

      //  li서브들 다올라감  >   $('.submenu_2').not(submenuList) : 클릭한 서브메뉴(submenuList)를 제외한 나머지 서브메뉴들
      $('.submenu_2').not(submenuList).slideUp().removeClass('show');

      // 선택된 li만 내려가게
      submenuList.stop(true).slideToggle().addClass('show');

    });
  };
  mobile_sideMenu();




  // scroll
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


  // 사이드메뉴_resize
  $(window).resize(function () {

    let size = innerWidth;

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

  window.addEventListener("scroll", function () {
    const nowScrollTop = window.scrollY; // 현재 스크롤 위치를 nowScrollTop에 저장
    const header = document.querySelector('header');
    if (nowScrollTop > prevScrollTop) {
      header.classList.add('active'); // 스크롤 방향(Down) 내릴 때 -> 헤더에 active 클래스 추가
    } else {
     header.classList.remove('active'); // 스크롤 방향(Up) 올릴 때 -> 헤더에 active 클래스 제거
    }

    prevScrollTop = nowScrollTop; // 현재 스크롤 값을 prevScrollTop에 저장
  });

});
