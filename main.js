
function slide1() {
    window.location.href = "index.html";
}
function slide2() {
    window.location.href = "slide2.html";
}
function slide3() {
    window.location.href = "slide3.html";
}
function slide4() {
    window.location.href = "slide4.html";
}
function slide5() {
    window.location.href = "slide5.html";
}

document.addEventListener("DOMContentLoaded", function () {

    if (window.location.href.indexOf("index.html") > -1) {
        const circles = document.querySelectorAll('.circle');
        circles[0].classList.add('black');
    }
    if (window.location.href.indexOf("slide2.html") > -1) {
        const circles = document.querySelectorAll('.circle');
        circles[1].classList.add('black');
    }

    if (window.location.href.indexOf("slide3.html") > -1) {
        const circles = document.querySelectorAll('.circle');
        circles[2].classList.add('black');
    }
    if (window.location.href.indexOf("slide4.html") > -1) {
        const circles = document.querySelectorAll('.circle');
        circles[3].classList.add('black');
    }
    if (window.location.href.indexOf("slide5.html") > -1) {
        const circles = document.querySelectorAll('.circle');
        circles[4].classList.add('black');
    }
});



