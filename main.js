/* Abre e fecha o menu quando clicar no  icone.  */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click',() => {
        nav.classList.toggle('show')
    })
}

/* Quando clicar em um item do menu, esconde o menu. */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.remove('show')
    })
}

/* Adiciona  sombra quando de scroll na página. */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if(window.scrollY >= navHeight) {
        //scroll é maior que a altura do header
        header.classList.add('scroll')
    } else {
        //nemor que a altura do header
        header.classList.remove('scroll')
    }
})