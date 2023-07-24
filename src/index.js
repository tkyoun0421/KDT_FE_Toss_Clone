import './styles/main.scss'

// 메뉴바 오픈
const menuBarsEl = document.querySelector('.menu-bars')
const headerEl = document.querySelector('#header')

menuBarsEl.addEventListener('click', onMenuBar)

function onMenuBar (event) {
    event.stopPropagation()
    if (headerEl.classList.contains('on')) {
        headerEl.classList.remove('on')
    } else {
        headerEl.classList.add('on')
    }
}

// 새로 고침시 맨 위로
// window.onload = () => {
//     setTimeout(() => {scrollTo(0,0)},100);
// }

headerEl.addEventListener('click', function(event) {
    event.stopPropagation()
})

window.addEventListener('click', function() {
    headerEl.classList.remove('on')
});

// Intersection Observer
const sectionEls = [...document.querySelectorAll('.sec')]
const option = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('on')
        }
    })
}

const observer = new IntersectionObserver(callback, option)
sectionEls.forEach(item => observer.observe(item))