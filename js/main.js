// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);


// GSAP demo animation
gsap.to("#Demo",{
    rotation : 360,
    duration : 2,
})

Draggable.create("#Demo");

gsap.to(".Text1",{
    duration: 5,
    motionPath: {
        path: "M20.0349 1C13.3683 1.83333 0.234948 8.5 1.03495 28.5C1.83495 48.5 14.0349 49.5 20.0349 47.5C43.2349 41.1 41.7016 32.1667 38.0349 28.5C25.3683 18.8333 2.03494 13.5 10.0349 69.5C10.0349 96.7 16.7016 100.833 20.0349 99.5C28.0349 100.167 42.8349 98.9 38.0349 88.5C32.0349 75.5 10.0349 49 10.0349 122.5C10.0349 148.1 22.7016 155.167 29.0349 155.5C35.0349 154.5 45.2349 149.5 38.0349 137.5C29.0349 122.5 0.0349445 147 10.0349 170",
    }
})

let timelineText2 = gsap.timeline();

timelineText2.to(".Text2",{x:100,})
.to(".Text2",{y:100,})
.to(".Text2",{x:-100,})
.to(".Text2",{y:-100,})