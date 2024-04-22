const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var menu = document.querySelector("nav h3")
var full = document.querySelector("#full-scr")
var navimg = document.querySelector("nav img")
var main = document.querySelector(".cardss")
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