import './styles/main.scss'

// 메뉴바 오픈
const menuBarsEl = document.querySelector('.menu-bars')
const headerEl = document.querySelector('#header')
const headerInnerEl = document.querySelector('#header inner')

menuBarsEl.addEventListener('click', onMenuBar)

function onMenuBar (event) {
    event.stopPropagation()
    if (headerEl.classList.contains('on')) {
        headerEl.classList.remove('on')
    } else {
        headerEl.classList.add('on')
    }
}

headerInnerEl.addEventListener('click', function(event) {
    event.stopPropagation()
})
window.addEventListener('click', function() {
    headerEl.classList.remove('on')
});