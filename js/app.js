const toggleMenu = document.querySelectorAll(".js-toggle-menu")
const navbar = document.querySelector(".js-navbar")

toggleMenu.forEach(elm => {
  elm.addEventListener("click", function () {
    const isActive = this.classList.contains('nav-header__icon--active')
    const disabledIconElm = document.querySelector('.nav-header__icon:not(.nav-header__icon--active)')

    if (isActive) {
      this.classList.toggle('nav-header__icon--active')
      disabledIconElm.classList.toggle('nav-header__icon--active')
    }

    navbar.classList.toggle('menu-mobile')
  })
})