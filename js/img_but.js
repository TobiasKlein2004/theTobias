document.addEventListener('DOMContentLoaded', function() {
    let img1 = document.getElementById('img1');
    let img2 = document.getElementById('img2');
    let img_but1 = document.getElementById('img_but1');
    let img_but2 = document.getElementById('img_but2');
    document.querySelector('#img_but1').onclick = function() {
        img1.style.display = 'unset';
        img2.style.display = 'none';
        img_but1.style.backgroundColor = 'rgb(120, 120, 120)';
        img_but1.style.borderColor = 'rgb(120, 120, 120)';
        img_but2.style.backgroundColor = '#000';
        img_but2.style.borderColor = '#000';
    };
    document.querySelector('#img_but2').onclick = function() {
        img1.style.display = 'none';
        img2.style.display = 'unset';
        img_but2.style.backgroundColor = 'rgb(120, 120, 120)';
        img_but2.style.borderColor = 'rgb(120, 120, 120)';
        img_but1.style.backgroundColor = '#000';
        img_but1.style.borderColor = '#000';
    };
    document.querySelector('#logo').onclick = function() {
        window.location.href = 'https://tobias-klein.itch.io/balli';
    }
});