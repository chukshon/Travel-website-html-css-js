const openMenu = document.querySelector('#open__menu')
const navMenu = document.querySelector('#nav__menu')
const overLay = document.querySelector('#overlay')
const closeMenu = document.querySelector('#close__menu')
const navLinks = document.querySelectorAll('#nav__links')
const headerTop = document.querySelector('#header__top')

openMenu.addEventListener('click', () => {
  navMenu.classList.add('active')
  overLay.classList.add('active')
})

closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active')
  overLay.classList.remove('active')
})

navLinks.forEach((e) => {
  e.addEventListener('click', () => {
    navMenu.classList.remove('active')
    overLay.classList.remove('active')
  })
})

window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    headerTop.classList.add('active')
  } else {
    headerTop.classList.remove('active')
  }
})
