var crsr = document.querySelector(".cursor");
// var crsrBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    // crsrBlur.style.left = dets.x - 200 +"px";
    // crsrBlur.style.top = dets.y - 200 +"px";
})

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 4;
        crsr.style.border = "0.5px solid #fff";
        crsr.style.backgroundColor = "transparent";
        // crsr.transition.duration = "1000";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "1px solid #95C11E";
        crsr.style.backgroundColor = "#95C11E";
    })
})


gsap.to("#nav",{
    backgroundColor:"black",
    height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:".wrapper",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:".wrapper",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:3
    }
})

gsap.from(".about-us img,.about-us-in",{
    y:90,
    duration:1,
    opacity:0,
    stagger:0.1,
    scrollTrigger:{
        trigger:".about-us",
        scroller:".wrapper",
        start:"top 70%",
        end:"top 65%",
        // markers:true,
        scrub:2
    }
})

gsap.from(".image-views",{
    scale:0.8,
    duration:1,
    opacity:0,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".image-views",
        scroller:".wrapper",
        start:"top 70%",
        end:"top 65%",
        // markers:true,
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    duration:1.5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:".wrapper",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
        // markers:true
    }
})

gsap.from("#colon2",{
    y:70,
    x:70,
    duration:1.5,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:".wrapper",
        start:"top 55%",
        end:"top 45%",
        scrub:4,
        // markers:true
    }
})

gsap.from("#page4 h1",{
    opacity:0,
    y:70,
    duration:1,
    scrollTrigger:{
        trigger:"#page4",
        scroller:".wrapper",
        start:"top 65%",
        end:"top 45%",
        // markers:true
    }

})