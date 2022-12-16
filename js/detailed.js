    let singlePageTitle = document.querySelector('.card-detailed__ttile')
    let singleImg = document.querySelector('.card-detailed__img')
    let singleText = document.querySelector('.card-detailed__desc')

function renderCard(){
    let cardId = JSON.parse(localStorage.getItem('cardId'))
    let Cards = JSON.parse(localStorage.getItem('cardData'))

    Cards.map(element => {
    if(element.id === cardId)  {
        singleImg.setAttribute('src', `https://xn----htbkerlri6b4b.uz/${element.img}`)
        singleImg.setAttribute('alt', "Чистый дом")
        singlePageTitle.textContent = element.title
        singleText.textContent = element.description
    }
    });
}
renderCard()