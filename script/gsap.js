$(function () {

  // gsap_main

  let mm = gsap.matchMedia();

  mm.add("(min-width: 1601px)", () => {

    const ani = gsap.timeline();
    ani.from('main .video_box', { overflow: 'hidden' })
    ani.to('main .video_box', { width: '100%', height: '110%', overflow: 'hidden' })
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


  mm.add("(min-width: 1201px) and (max-width:1600px)", () => {

    const ani = gsap.timeline();
    ani.from('main .video_box', { overflow: 'hidden' })
    ani.to('main .video_box', { width: '100%', height: '93%', overflow: 'hidden' })
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
    ani_mobile.from('main .video_box', { overflow: 'hidden' })
    ani_mobile.to('main .video_box', { width: '100%', height: '100%', overflow: 'hidden' })
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
    ani_mobile.from('main .video_box', { overflow: 'hidden' })
    ani_mobile.to('main .video_box', { width: '100%', height: '100%', overflow: 'hidden' })
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
      end: () => "+=" + (horizontal.offsetWidth - innerWidth),
      pin: true,
      scrub: 1,
      snap: {
        snapTo: 1 / (sections.length - 1),
        inertia: false,
        duration: { min: 0.3, max: 0.3 }
      },
      invalidateOnRefresh: true,
      anticipatePin: 1,
      markers: false
    }
  });


});
