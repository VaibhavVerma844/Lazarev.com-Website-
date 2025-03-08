function locomotiveanimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    // // --- RED PANEL ---
    // gsap.from(".line-1", {
    //     scrollTrigger: {
    //         trigger: ".line-1",
    //         scroller: ".main",
    //         scrub: true,
    //         start: "top bottom",
    //         end: "top top"
    //     },
    //     scaleX: 0,
    //     transformOrigin: "left center",
    //     ease: "none"
    // });

    // // --- ORANGE PANEL ---
    // gsap.from(".line-2", {
    //     scrollTrigger: {
    //         trigger: ".orange",
    //         scroller: ".smooth-scroll",
    //         scrub: true,
    //         pin: true,
    //         start: "top top",
    //         end: "+=100%"
    //     },
    //     scaleX: 0,
    //     transformOrigin: "left center",
    //     ease: "none"
    // });

    // // --- PURPLE/GREEN PANEL ---
    // var tl = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: ".purple",
    //         scroller: ".smooth-scroll",
    //         scrub: true,
    //         pin: true,
    //         start: "top top",
    //         end: "+=100%"
    //     }
    // });

    // tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
    //     .from(
    //         ".line-3",
    //         { scaleX: 0, transformOrigin: "left center", ease: "none" },
    //         0
    //     )
    //     .to(".purple", { backgroundColor: "#28a92b" }, 0);

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

locomotiveanimation()





function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".nav_bottom", {
            height: "21vh"
        })
        tl.to("nav .navlinks h5", {
            display: "block"
        })
        tl.to(".navlinks h5 span", {
            y: 0,
            stagger: {
                amount: 0.5
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".navlinks h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to("nav .navlinks h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".nav_bottom", {
            height: 0,
            duration: 0.3
        })
    })
}
navAnimation()

var right = document.querySelector(".right-container")
var img = document.querySelector(".right-container img")

img.addEventListener("mouseenter", function () {
    img.computedStyleMap.opacity = 1;
})

function page2Animation() {
    var Images = document.querySelectorAll(".right-container")
    Images.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })

        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })

        elem.addEventListener("mousemove", function (dets) {

            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 150
            })
        })
    })
}

page2Animation()


function page3videoanimation() {
    var page3 = document.querySelector(".page3-container")
    var video = document.querySelector(".page-3 video")

    page3.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0) scaleY(0)",
            opacity: 0,
            borderRadius: "50%"
        })
    })
}
page3videoanimation()


function videoAnimation() {
    var video = document.querySelectorAll(".section .right")

    video.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1;
            elem.childNodes[3].play();
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0;
            elem.childNodes[3].load();
        })
    })
}

videoAnimation()


function scroller() {
    gsap.from(".bottom7-parts h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".bottom7-2",
            scroller: ".main",
            // markers:true,
            start: "top 80%",
            end: "top 10%",
            scrub: true
        }
    })
}

scroller()



function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from(".page-1", {
        opacity: 0,
        duration: 0.5,
        delay: 0.2
    })
    tl.from(".page-1", {
        transform: "scaleX(0.7) scaleY(0)",
        borderRadius: '100px',
        duration: 2,
        ease: "expo.out"

    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from(".page-1 h1, .page-1 p, .page-1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}

loadingAnimation()