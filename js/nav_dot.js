document.addEventListener('DOMContentLoaded', function() {
    let url = window.location.pathname;
    let nav_dots = document.getElementsByClassName('dot');
    let nav_dot1 = document.getElementById('nav_dot1');
    let nav_dot2 = document.getElementById('nav_dot2');
    let nav_dot3 = document.getElementById('nav_dot3');
    let nav_dot4 = document.getElementById('nav_dot4');
    if (url == "/index.html") {
        nav_dot1.style.backgroundColor = 'yellow';
        nav_dot2.style.backgroundColor = 'black';
        nav_dot3.style.backgroundColor = 'black';
        nav_dot4.style.backgroundColor = 'black';
    } else if (url == "/balli.html") {
        nav_dot1.style.backgroundColor = 'black';
        nav_dot2.style.backgroundColor = 'yellow';
        nav_dot3.style.backgroundColor = 'black';
        nav_dot4.style.backgroundColor = 'black';
    } else if (url == "/stuff.html") {
        nav_dot1.style.backgroundColor = 'black';
        nav_dot2.style.backgroundColor = 'black';
        nav_dot3.style.backgroundColor = 'yellow';
        nav_dot4.style.backgroundColor = 'black';
    } else {
        nav_dot1.style.backgroundColor = 'black';
        nav_dot2.style.backgroundColor = 'black';
        nav_dot3.style.backgroundColor = 'black';
        nav_dot4.style.backgroundColor = 'yellow';
    }
});