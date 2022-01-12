const btnMenu = document.getElementById('btn-menu');
const btnInicio = document.getElementById('inicio');
const btnMoedas = document.getElementById('moedas');
const btnNivel = document.getElementById('nivel');
const menu_aluno = document.getElementById('menu_aluno')

function viewMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', viewMenu);
btnInicio.addEventListener('click', viewMenu);
btnMoedas.addEventListener('click', viewMenu);
btnNivel.addEventListener('click', viewMenu);
menu_aluno.addEventListener('click', viewMenu);