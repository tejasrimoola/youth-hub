// JavaScript to set the active class dynamically
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});