const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function elemetanimation() {

    var elm = document.querySelector("#element-container")
    var fixed = document.querySelector("#fixed-img")
    elm.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })

    elm.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elm");
    elems.forEach(function (dets) {
        dets.addEventListener("mouseenter", function () {
            var change = dets.getAttribute("data-img")
            fixed.style.backgroundImage = `url(${change})`
        })
    })
}
elemetanimation()

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 200
});


var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var hello = 0
menu.addEventListener("click", function () {
    if (hello == 0) {
        full.style.top = "0"
        navimg.style.opacity = "0"
        hello = 1
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = "1"
        hello = 0
    }
})


var loader = document.querySelector("#loader")
setTimeout(function () {
    loader.style.top = "-100%"
}, 4000)

