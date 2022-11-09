let cardListBtn = document.querySelector('.servicePage-list__item-link');
let popup = document.querySelector('.popup');
let openMContainer = document.querySelector('.modal-container');
let modalBtn = document.querySelector('.modal-btn');
let modalTitle = document.querySelector('.modal-title');
let modalClose = document.querySelector('.modal-container')

function openModal(){
    popup.classList.add('open-popup');
    openMContainer.classList.add('modal-container__event');
}
function closeModal(){
    popup.classList.remove('open-popup');
    openMContainer.classList.remove('modal-container-open');
    modalClose.classList.remove('modal-container__event');
}
function openModalList(e){
    modalTitle.textContent = `${e.target.textContent}`;
    popup.classList.add('open-popup');
    openModal();         
    openMContainer.classList.add('modal-container-open');
}

cardListBtn.addEventListener('click', openModalList);
// modalBtn.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);
