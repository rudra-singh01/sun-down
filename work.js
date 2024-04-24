const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function hamburger(){
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
}
hamburger()

window.addEventListener('scroll',reveal);
function reveal() {
    var reveals = document.querySelectorAll('.scroll');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}