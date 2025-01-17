// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);


// GSAP demo animation
gsap.to("#Demo",{
    rotation : 360,
    duration : 2,
})

Draggable.create("#Demo");

