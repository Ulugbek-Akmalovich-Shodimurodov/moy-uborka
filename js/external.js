const elCardTempalate = document.querySelector("#product-template");
const elCardList  = document.querySelector('.portfolio-cards__list')

let cardList = document.querySelector('.servicePage-list')

let cardListBtn = document.querySelector('.servicePage-list__item-link');
let popup = document.querySelector('.popup');
let openMContainer = document.querySelector('.modal-container');

let modalBtn = document.querySelector('#modal-btn__zakaz');
let modalTitle = document.querySelector('.modal-title');
let modalClose = document.querySelector('.modal-container')
let orderId;

/* form input */
let modalForm = document.querySelector('.modal-form')
let elFirstName = document.querySelector('#title')
let elLastName = document.querySelector('#ltitle')
let elPhoneNum = document.querySelector('#tel')
let elPassData = document.querySelector('#passport')


function portfolioCard(portfolioData){

    const elProductCard = elCardTempalate.cloneNode(true).content;

    
    const listItem = elProductCard.querySelector('.servicePage-list__item')
    listItem.setAttribute('id', portfolioData.id)

    const cardImg = elProductCard.querySelector('.service-card__img');

    const cardTitle = elProductCard.querySelector('.servicePage-list__title');
    cardTitle.textContent = portfolioData.title;

    const cardDesc = elProductCard.querySelector('.servicePage-list__text');
    cardDesc.textContent = portfolioData.description

    return elProductCard;
}

const renderFunction = (array = portfolioData) => {
    cardList.innerHTML = "";
    array.map((item) => {
        const elNewCard = portfolioCard(item)
        cardList.append(elNewCard);
    })
}

// Fetch get

fetch('https://serviceproject2.herokuapp.com/main/get-external-blog')
.then(res=>res.json())
.then(data =>{
        renderFunction(data);
    }
).catch((err)=> console.log(err))


// open modal

function openModal(){
    popup.classList.add('open-popup');
    openMContainer.classList.add('modal-container__event');
}

function openModalList(e){
    popup.classList.add('open-popup');
    openModal();         
    openMContainer.classList.add('modal-container-open');
}

// close modal

function closeModal(){
    popup.classList.remove('open-popup');
    openMContainer.classList.remove('modal-container-open');
    modalClose.classList.remove('modal-container__event');
}


// card zakazat btn func 

cardList.addEventListener('click', (e)=>{
    console.log(e.target.parentElement.parentElement.id);

    orderId = e.target.parentElement.parentElement.id
    
    openModalList()
})

// post qilish

async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data)
    });
    return response.json();
  }

  // zakazat modal

modalBtn.addEventListener('click', (e)=>{
    e.preventDefault();

    let data = {
        name: elFirstName.value.trim() ,
        surname: elLastName.value.trim() ,
        phone_number: elPhoneNum.value.trim() ,
        address: elPassData.value.trim() ,
        order: orderId
    }

    postData('https://serviceproject2.herokuapp.com/client/external-client-create', data)
    .then((data) => {
      console.log(data);
    });

    closeModal();

    modalForm.reset()



})


  
 