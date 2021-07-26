window.showSlides = showSlides;
window.currentSlide = currentSlide;
window.plusSlides = plusSlides;
window.openMenu = openMenu;

// Image slider
var slideIndex = 1;

export function plusSlides(n) {
    showSlides(slideIndex += n);
}
export function currentSlide(n) {
    showSlides(slideIndex = n);
}
export function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides && slides.length > 0) {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

}
export function attachMenus() {
    let anchors = document.querySelectorAll('.nav-menu-bar > a');
    anchors.forEach(anchor => {
        anchor.addEventListener('click', (ev) => {
            ev.preventDefault();
            const id = ev.target.dataset.id;
            openMenu(id);
        });
    })
}
// Tabbed Menu
export function openMenu(menuName) {
    var i, x;
    x = document.getElementsByClassName("menu");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    } {
        document.getElementById(menuName).style.display = "block";
    }
}

