$(function(){

  // header_web
$('.header_inner nav>ul>li').on({

  mouseover:function(){
    $('header').addClass('on');
    $(this).css({borderBottom:'3px solid #5F9DF7'});
    $('.header_inner nav .submenu, header::after').stop(true).slideDown();
  },
  
  mouseout:function(){
    $('header').removeClass('on');
    $(this).css({borderBottom:'none'});
    $('.header_inner nav .submenu, header::after').stop(true).slideUp(300);
  }
})



  // header_mobile
//sidemenu btn
$('.menu').click(function(){
 $('.side_menu').stop(true).animate({right:'0'},600)
});
$('.close').click(function(){
 $('.side_menu').stop(true).animate({right:'-100%'},600)
});



// sidemenu side_inner
$('.side_menu>.side_inner>ul>li').on({
 mouseover:function(){
   $(this).find('.submenu_2').stop(true).slideDown(200)
 },

 mouseout:function(){
   $(this).find('.submenu_2').stop(true).slideUp()

 }
});





// section_3
$('#section_3 .t_box').slick({
  // 포지션 레프트:0 일떄 아래것들 사용안함
//   centerMode: true,
//  centerPadding: '0',



  // 포지션 레프트 적용! 아래것들 사용함!!
//   centerMode: true,
//  centerPadding: '100px',


    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      // {
      //   breakpoint: 1401,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //     // infinite: true,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {


          // slidesToShow: 1,
          // slidesToScroll: 1,

          
                    slidesToShow: 1,
                    slidesToScroll: 1,
            centerMode: true,
           centerPadding: '200px',
           infinite: true

          // slidesToShow: 2,
          // slidesToScroll: 1,



//           slidesToShow: 1,
//           slidesToScroll: 1,
//   centerMode: true,
//  centerPadding: '200px'
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
  centerMode: true,
 centerPadding: '120px',


        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
  centerMode: true,
 centerPadding: '100px'


        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
  centerMode: true,
 centerPadding: '60px'


        }
      },

      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
  centerMode: true,
 centerPadding: '20px'


        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
  centerMode: true,
 centerPadding: '10px'


        }
      }
    
    ]
  });



});

