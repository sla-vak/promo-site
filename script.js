let button = document.querySelector('button');
let body = document.querySelector('body');
let header = document.querySelector('header');
let h1 = document.querySelector('h1');

button.onclick = function () {
    body.classList.toggle('dark-theme');
    header.classList.toggle('dark-theme');
    h1.classList.toggle('dark-theme');
}