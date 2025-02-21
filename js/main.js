// GSAP Modules -------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

/*
// GSAP demo animation ------------------------------------------------------
gsap.to("#Demo",{
    rotation : 360,
    duration : 2,
})*/

// GSAP matchMedia ------------------------------------------------------
let mm = gsap.matchMedia();
mm.add({
    isMobile: '(max-width: 799px)', 
    isDesktop: '(min-width: 800px)',
}, (context) => {
    let {isMobile, isDesktop} = context.conditions; 
}
)

// Scrolltrigger Section 1 ------------------------------------------------------

let tlIntro = gsap.timeline({
    scrollTrigger:{
        trigger:".Section1",
        markers: true,
        id:"Section1",
        start:"top 0%",
        end: "+=2000",
        pin: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
    }
})

tlIntro.to(".RectangleHaut",{
    
    height: '40vh',
    duration: 2,
})
.to(".RectangleBas",{
   
    height: '40vh',
    duration: 2,
})

tlIntro.to(".Text1Intro",{
    
    opacity: 1,
    duration: 8,
})
tlIntro.to(".Text2Intro",{
    
    opacity: 1,
    duration: 8,
})

// Section 2 -----------------------------------------------------
let tl1Section2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".Section2",
        markers: true,
        id:".Section2",
        start: "top 0%",
        end: "+=3000",
        pin: true,
        scrub: true,
        toggleActions: "play none reverse reset",
    }
})

tl1Section2.to(".Text1Sec2", {
    y:-450,
    opacity: 1,
    duration: 2,
})

.to(".Text2Sec2", {
    y:-400,
    opacity: 1,
    duration: 2,
})

.to(".Text3Sec2", {
    y:-350,
    opacity: 1,
    duration: 2,
})


// Timeline Section 3 -----------------------------------------------------
let timelineLogiciel1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".Section3",
        markers: true,
        id:".Section3",
        start: "top bottom",
        end: "+=2000",
        scrub: true,
    }
})

timelineLogiciel1.to(".Logiciel",{x:100,})
.to(".Logiciel",{y:200,})
.to(".Logiciel",{x:-100,})
.to(".Logiciel",{y:-10,})

let timelineLogiciel2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".Section3",
        markers: true,
        id:".Section3",
        start: "top bottom",
        end: "+=2000",
        scrub: true,
    }
});
timelineLogiciel2.to(".Figma", {x:-100})
.to(".Figma", {y:-200,})
.to(".Figma", {x:100,})
.to(".Figma", {y:10,})

let timelineLogiciel3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".Section3",
        markers: true,
        id:".Section3",
        start: "top bottom",
        end: "+=2000",
        scrub: true,
    }
});
timelineLogiciel3.to(".HTML", {x:-100})
.to(".HTML", {y:-200,})
.to(".HTML", {x:100,})
.to(".HTML", {y:10,})

let timelineLogiciel4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".Section3",
        markers: true,
        id:".Section3",
        start: "top bottom",
        end: "+=2000",
        scrub: true,
    }
});
timelineLogiciel4.to(".CSS", {x:-100})
.to(".CSS", {y:-200,})
.to(".CSS", {x:100,})
.to(".CSS", {y:10,})

let timelineLogiciel5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".Section3",
        markers: true,
        id:".Section3",
        start: "top bottom",
        end: "+=2000",
        scrub: true,
    }
});
timelineLogiciel5.to(".WordPress", {x:-100})
.to(".WordPress", {y:-200})
.to(".WordPress", {x:100,})
.to(".WordPress", {y:10,})
// Draggable Section 4 -----------------------------------------------------

let tlSection4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#Section4",
        markers: true,
        id:"Section4",
        start:"top 0%",
        end: "+=4000",
        pin: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
    }
})

tlSection4.to(".Images2",{
    
    opacity: 1,
    duration: 8,
})
tlSection4.to(".Images3",{
    
    opacity: 1,
    duration: 8,
})
// Draggable Section 5 -----------------------------------------------------
Draggable.create(".Logo2",{
    type:"x,y",
    bounds: ".Section5",
    dragResistance: 0.5,
})