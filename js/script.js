document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#Home_Button').onclick = function() {
        window.location.href = 'index.html';
    };
    document.querySelector('#Balli_Button').onclick = function() {
        window.location.href = 'balli.html';
    };
    document.querySelector('#Stuff_Button').onclick = function() {
        window.location.href = 'stuff.html';
    };
    document.querySelector('#About_Button').onclick = function() {
        window.location.href = 'about.html';
    };
    document.querySelector('#balli_sec').onclick = function() {
        let balli_sec = document.getElementById('balli_sec');
        balli_sec.style.backgroundColor = '#fff';
        balli_sec.style.marginLeft = '-80%';
        setTimeout(() => {
            window.location.href = 'balli.html';
        }, 1000);
    };
});