document.addEventListener('DOMContentLoaded', function() {
    var url = window.location.pathname;
    let sections = document.getElementById('content');
    let balli_sec = document.getElementById('balli_sec');
    document.querySelector('#Home_Button').onclick = function() {
        window.location.href = 'index.html';
    };
    document.querySelector('#Balli_Button').onclick = function() {
        if (url == "/index.html") {
            balli_sec.style.marginLeft = '-80%';
            setTimeout(() => {
                window.location.href = 'balli.html';
            }, 500);
        } else {
            window.location.href = 'balli.html';
        }
    };
    document.querySelector('#Stuff_Button').onclick = function() {
        window.location.href = 'stuff.html';
    };
    document.querySelector('#About_Button').onclick = function() {
        window.location.href = 'about.html';
    };
    document.querySelector('#balli_sec').onclick = function() {
        balli_sec.style.backgroundColor = '#f3ca40';
        balli_sec.style.marginLeft = '-80%';
        setTimeout(() => {
            window.location.href = 'balli.html';
        }, 500);
    };
});