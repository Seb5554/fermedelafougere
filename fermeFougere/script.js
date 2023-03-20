const btnMenu = document.querySelector ('.logoMenu');
const menu = document.querySelector ('.liste-nav');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active')
})

const allLinks = document.querySelectorAll ('.item-nav')

allLinks.forEach (item => {
    item.addEventListener ('click', () => {
        menu.classList.toggle('active')
    })
})
