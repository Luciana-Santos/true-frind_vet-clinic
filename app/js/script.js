const openMenu = document.getElementById('open-menu');
const closeMenu = document.getElementById('close-menu');
const body = document.querySelector('body');
const menu = document.getElementById('menu-mobile');
const fadeElems = document.querySelectorAll('.has-fade');


function abrirMenu() {
  body.classList.remove('noscroll');
    menu.classList.add('ativo');
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    })
}

function fecharMenu() {
  body.classList.remove('noscroll');
    menu.classList.remove('ativo');
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
}


openMenu.addEventListener('click', abrirMenu);
closeMenu.addEventListener('click', fecharMenu);

