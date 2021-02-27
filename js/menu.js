var btnMenu = document.getElementById('btn-bars');
var nav = document.getElementById('nav');
btnMenu.addEventListener('click', function(){
  nav.classList.toggle('mostrar');
});