let navbarOpenBtn = document.querySelector('.site-navbar__bars')
let navbarList = document.querySelector('.site__navbar-list')

function navbarOpen(){
    navbarList.classList.toggle('navbar__list-open')
}
navbarOpenBtn.addEventListener('click', navbarOpen);