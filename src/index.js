import './styles/main.scss'

// 메뉴바 오픈
const menuBarsEl = document.querySelector('.menu-bars')
const headerEl = document.querySelector('#header')

menuBarsEl.addEventListener('click', onMenuBar);

function onMenuBar () {
    headerEl.classList.toggle('on')
}