$(function(){

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
     start: "-15% top",
     end: "+=150",
     scrub: true,
     pin: true,
     markers: false,
     markers: true,
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

    
});