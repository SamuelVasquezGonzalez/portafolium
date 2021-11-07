window.addEventListener("scroll", function(){
    header = document.querySelector(".cabeza");
    logo = document.querySelector(".samsamuellogo");
    men = document.querySelector(".menu");
    iCon = document.querySelector(".fa-bars");
    subir = document.querySelector(".arriba");
    header.classList.toggle("head-an",window.scrollY>800);
    header.classList.toggle("head-w",window.scrollY>1780);
    subir.classList.toggle("visible",window.scrollY>1400);
    logo.classList.toggle("logo2",window.scrollY>1780);
    men.classList.toggle("men",window.scrollY>1780);
    iCon.classList.toggle("fa-bars2",window.scrollY>1780);
});

let menu = document.querySelector("#menu");
let more = document.querySelector("#more");

more.addEventListener('click', function(){

    menu.classList.toggle('toggle');

});