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



  // sidemenu side_inner
  // $('.side_menu>.side_inner>ul>li').click(function(){

  //    $(this).find('.submenu_2').stop(true).slideToggle();

  // });



  $('.side_menu>.side_inner>ul>li').on({
    mouseover: function () {
      $(this).find('.submenu_2').stop(true).slideDown(300)

    },

    mouseout: function () {
      $(this).find('.submenu_2').stop(true).slideUp()

    }
  });





  // section_3
  $('.t_box_inner').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    responsive: [

          {
            breakpoint: 1201,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 681,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
          centerPadding: '80px'
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
          centerPadding: '37px'
            }
          }

        ]

  });






  // $('#section_3 .t_box_inner').slick({

  //   dots: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [

  //     {
  //       breakpoint: 1201,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1
  //       }
  //     },
  //     // {
  //     //   breakpoint: 991,
  //     //   settings: {


  //     //     slidesToShow: 1,
  //     //     slidesToScroll: 1,
  //     //     centerMode: true,
  //     //     centerPadding: '200px',
  //     //     infinite: true

 
  //     //   }
  //     // },
  //     {
  //       breakpoint: 890,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         centerMode: true,
  //         centerPadding: '120px',


  //       }
  //     },
  //     // {
  //     //   breakpoint: 767,
  //     //   settings: {
  //     //     slidesToShow: 1,
  //     //     slidesToScroll: 1,
  //     //     infinite: true,
  //     //     centerMode: true,
  //     //     centerPadding: '100px'


  //     //   }
  //     // },
  //     // {
  //     //   breakpoint: 680,
  //     //   settings: {
  //     //     slidesToShow: 1,
  //     //     slidesToScroll: 1,
  //     //     infinite: true,
  //     //     centerMode: true,
  //     //     centerPadding: '60px'


  //     //   }
  //     // },

  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         centerMode: true,
  //         centerPadding: '20px'


  //       }
  //     },
  //     {
  //       breakpoint: 430,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         infinite: true,
  //         centerMode: true,
  //         centerPadding: '10px'


  //       }
  //     }

  //   ]
  // });




  // scroll
  let spot = $('#section_1').offset().top;

  $(window).scroll(function () {

    // header_scrollfix
    // if ($(window).scrollTop() > spot) {
    //   $('header').addClass('fix');
    //   // $('header').css({backgroundColor:'rgba(255,255,255,.3)', backdropFilter: 'blur(50px)'});
    // } else {
    //   $('header').removeClass('fix');
    //   // $('header').css({backgroundColor:'#fff'});

    // }



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





    // if (top >= 50) {
    //   $('.video_box').addClass('big')
    // } else {

    //   $('.video_box').removeClass('big')
    // }


   


  });



  // resize

  $(window).resize(function () {

    let size = innerWidth;
    console.log(size)

    $('.menu').click(function () {


      if (size <= 575) {
        $('.side_bg').css({ backgroundColor: 'transparent' });

        // $('.side_menu').stop(true).fadeIn();

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

