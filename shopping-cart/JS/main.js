//sticky navbar
const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});






    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        // Toggles the menu icon (e.g., from menu to 'X')
        menu.classList.toggle('bx-x');
        // Toggles the .open class on the navbar to show/hide it
        navbar.classList.toggle('open');
    };