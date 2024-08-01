$(function () {

  // gsap_main

  // 575기준으로 잡기


  let mm = gsap.matchMedia();


  // mm.add("(min-width: 576px)", () => {
  // mm.add("(min-width: 991px)", () => {
  mm.add("(min-width: 1601px)", () => {


    const ani = gsap.timeline();
    ani.from('main .video_box', { overflow:'hidden',borderRadius: 120 })
    ani.to('main .video_box', { width: '100%', height: '110%' ,overflow:'hidden' })
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


  // 이상함 작동안되네 체크하기!! > 991 css도 같이 보기
  mm.add("(min-width: 1201px) and (max-width:1600px)", () => {
  // mm.add("(min-width: 1101px) and (max-width:1600px)", () => {


    const ani = gsap.timeline();
    ani.from('main .video_box', { overflow:'hidden', borderRadius: 110 })
    ani.to('main .video_box', { width: '100%', height: '93%' ,overflow:'hidden' })
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







    mm.add("(min-width:768px) and (max-width:1200px)", () => {

    const ani_mobile = gsap.timeline();
    ani_mobile.from('main .video_box', {overflow:'hidden'})
    ani_mobile.to('main .video_box', { width: '100%',  height: '100%',overflow:'hidden' })
      .to('main .video_box', { scale: 1.2 })
    ScrollTrigger.create({
      animation: ani_mobile,
      trigger: "main",
      start: "2% top",
      end: "+=800",
      scrub: true,
      pin: true,
      markers: false,
      anticipatePin: 1


    });


  });
    mm.add("(max-width:767px)", () => {

    const ani_mobile = gsap.timeline();
    ani_mobile.from('main .video_box', {overflow:'hidden'})
    ani_mobile.to('main .video_box', { width: '100%',  height: '100%',overflow:'hidden' })
      .to('main .video_box', { scale: 1.2 })
    ScrollTrigger.create({
      animation: ani_mobile,
      trigger: "main",
      start: "top top",
      end: "+=350",
      scrub: true,
      pin: true,
      markers: false,
      anticipatePin: 1


    });


  });



  // mm.add("(min-width: 1024px) and (max-width:1100px)", () => {


  //   const ani = gsap.timeline();
  //   ani.from('main .video_box', { overflow:'hidden', borderRadius: 110 })
  //   // ani.to('main .video_box', { width: '100%', height: '80%' ,overflow:'hidden' })
  //   ani.to('main .video_box', { width: '100%', height: '80%' ,overflow:'hidden' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani,
  //     trigger: "main",
  //     start: "2% top",
  //     end: "+=800",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1,


  //   });


  // });
  // mm.add("(min-width: 992px) and (max-width:1023px)", () => {


  //   const ani = gsap.timeline();
  //   ani.from('main .video_box', { overflow:'hidden', borderRadius: 110 })
  //   ani.to('main .video_box', { width: '100%', height: '55%' ,overflow:'hidden' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani,
  //     trigger: "main",
  //     start: "2% top",
  //     end: "+=800",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1,


  //   });


  // });

  // mm.add("(min-width: 768px) and (max-width:991px)", () => {


  //   const ani = gsap.timeline();
  //   ani.from('main .video_box', { overflow:'hidden', borderRadius: 100 })
  //   // ani.to('main .video_box', { width: '100%', height: '48%' ,overflow:'hidden' })
  //   ani.to('main .video_box', { width: '100%', height: '100%' ,overflow:'hidden' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani,
  //     trigger: "main",
  //     start: "2% top",
  //     end: "+=800",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1,


  //   });


  // });





  // mm.add("(min-width: 576px) and (max-width:767px)", () => {

  //   const ani_mobile = gsap.timeline();
  //   ani_mobile.from('main .video_box', {overflow:'hidden', borderRadius: 100})
  //   ani_mobile.to('main .video_box', { width: '100%',  height: '50%',overflow:'hidden' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani_mobile,
  //     trigger: "main",
  //     start: "top top",
  //     end: "+=350",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1


  //   });


  // });


  // mm.add("(min-width: 431px) and (max-width:575px)", () => {

  //   const ani_mobile = gsap.timeline();
  //   ani_mobile.from('main .video_box', {overflow:'hidden', borderRadius: 80})
  //   ani_mobile.to('main .video_box', { width: '100%',  height: '40%',overflow:'hidden' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani_mobile,
  //     trigger: "main",
  //     start: "top top",
  //     end: "+=350",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1


  //   });


  // });

  // mm.add("(max-width:430px)", () => {

  //   const ani_mobile = gsap.timeline();
  //   ani_mobile.from('main .video_box', {overflow:'hidden', borderRadius: 60})
  //   ani_mobile.to('main .video_box', { width: '100%',  height: '45%',overflow:'hidden' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani_mobile,
  //     trigger: "main",
  //     start: "top top",
  //     end: "+=350",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1


  //   });


  // });


            



  



  // mm.add("(max-width: 575px)", () => {

  //   const ani_mobile = gsap.timeline();
  //   ani_mobile.from('main .video_box', {overflow:'hidden', borderRadius: 60})
  //   ani_mobile.to('main .video_box', { width: '100%',  height: '90%',overflow:'hidden' })
  //   // ani_mobile.to('main .video_box', { width: '100%', height: '100%' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani_mobile,
  //     trigger: "main",
  //     start: "top top",
  //     end: "+=350",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1




  //   });


  // });







  // 2
  // let mm = gsap.matchMedia();


  // mm.add("(min-width: 576px)", () => {


  //   const ani = gsap.timeline();
  //   ani.from('main .video_box', { height: 'fit-content' ,  borderRadius: 120 })
  //   ani.to('main .video_box', { width: '100%', height: '100%' })
  //   // ani.to('main .video_box', { width: '100%', height: '100%',  duration: .5 })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani,
  //     trigger: "main",
  //     start: "2% top",
  //     end: "+=800",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1,


  //   });


  // });





  // mm.add("(max-width: 575px)", () => {

  //   const ani_mobile = gsap.timeline();
  //   ani_mobile.from('main .video_box', { borderRadius: 60})
  //   ani_mobile.to('main .video_box', { width: '100%',  height: '90vh' })
  //   // ani_mobile.to('main .video_box', { width: '100%', height: '100%' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani_mobile,
  //     trigger: "main",
  //     start: "top top",
  //     end: "+=350",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1




  //   });


  // });





  // 1
  // let mm = gsap.matchMedia();


  // mm.add("(min-width: 576px)", () => {


  //   const ani = gsap.timeline();
  //   ani.from('main .video_box', {  borderRadius: 120 })
  //   ani.to('main .video_box', { width: '100%', height: '100%',  duration: .5 })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani,
  //     trigger: "main",
  //     start: "2% top",
  //     end: "+=800",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1,


  //   });


  // });

  // mm.add("(max-width: 575px)", () => {

  //   const ani_mobile = gsap.timeline();
  //   ani_mobile.from('main .video_box', { borderRadius: 60})
  //   ani_mobile.to('main .video_box', { width: '100%', height: '100%' })
  //     .to('main .video_box', { scale: 1.2 })
  //   ScrollTrigger.create({
  //     animation: ani_mobile,
  //     trigger: "main",
  //     start: "top top",
  //     end: "+=350",
  //     scrub: true,
  //     pin: true,
  //     markers: false,
  //     anticipatePin: 1




  //   });


  // });



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


});
