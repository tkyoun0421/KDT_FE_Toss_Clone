import './styles/main.scss'

// 메뉴바 오픈
const menuBarsEl = document.querySelector('.menu-bars')
const headerEl = document.querySelector('#header')

menuBarsEl.addEventListener('click', onMenuBar)

headerEl.addEventListener('click', function(event) {
    event.stopPropagation()
})

window.addEventListener('click', function() {
    headerEl.classList.remove('on')
})

function onMenuBar (event) {
    event.stopPropagation()
    if (headerEl.classList.contains('on')) {
        hideMenuBar()
    } else {
        showMenuBar()
    }
}

// 스크롤다운 시 header border-bottom 추가
window.addEventListener('scroll', function() {
    if(window.scrollY !== 0) {
        if(!headerEl.classList.contains('on')) {
            addHeaderBorderBtm()
        }
    } else {
        removeHeaderBorderBtm()
    }
})

function showMenuBar() {
    headerEl.classList.add('on')
}

function hideMenuBar() {
    headerEl.classList.remove('on')
}

function addHeaderBorderBtm() {
    headerEl.classList.add('scroll')
}

function removeHeaderBorderBtm() {
    headerEl.classList.remove('scroll')
}

// 새로고침시 스크롤 맨 위로 이동
window.onload = () => {
    setTimeout(() => {scrollTo(0,0)},100);
}

// 
const sectionEls = [...document.querySelectorAll('.sec')]
const option = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
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

