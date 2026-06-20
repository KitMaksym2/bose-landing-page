const links = document.querySelectorAll('.sidebar__container-navigation-text')
const input = document.querySelector('.header__burger-checkbox')
console.log(links)


links.forEach((link) => {
    link.addEventListener('click', () => {
        input.checked = false
    })
})