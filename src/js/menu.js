import shopingcart from './cart.js';
import { showSlides, openMenu } from './Foodmenu.js'


export function loadContainer(pagename) {
    console.log(pagename);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', pagename);
    xhr.onload = function () {
        document.getElementById("container").innerHTML = this.response;
        if (pagename === "cart.html") {
            shopingcart()
        }
        if (pagename === "menu.html") {
            showSlides(0);
            openMenu();
        }

    };
    xhr.send();
}
window.loadContainer = loadContainer;
export function loadmenu() {
    // define all UI variable
    const navToggler = document.querySelector('.nav-toggler');
    const navMenu = document.querySelector('.site-navbar ul');
    const navLinks = document.querySelectorAll('.site-navbar a');

    // load all event listners
    allEventListeners();

    // functions of all event listners
    function allEventListeners() {
        // toggler icon click event
        navToggler.addEventListener('click', togglerClick);
        // nav links click event
        navLinks.forEach(elem => {
            elem.addEventListener('click', navLinkClick);
            if (elem.dataset.default) {
                loadContainer("home.html");
            }
        });
    }

    // togglerClick function
    function togglerClick() {
        navToggler.classList.toggle('toggler-open');
        navMenu.classList.toggle('open');
    }

    // navLinkClick function
    function navLinkClick(e) {
        if (navMenu.classList.contains('open')) {
            navToggler.click();
        }
        else {
            const pageName = e.target?.dataset?.page;
            if (pageName) {
                loadContainer(pageName);
            }
        }
    }




};

