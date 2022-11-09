let cardList = document.querySelector('.humans-list');



fetch('https://developer1.pythonanywhere.com/main/get-contact')
.then(res=>res.json())
.then(data =>{
    renderHumans(data);
    }
).catch((err)=> console.log(err))


function renderHumans(data){
    cardList.innerHTML = '';
    let k = 0;

    data.forEach((item)=>{

    cardList.innerHTML += 
        `
        <li class="humans-card__item">
            <img class="humans-card__img" src="https://developer1.pythonanywhere.com/${item.img ? item.img : './img/search.png '}" alt="">
            <span class="humans-rating"><i class="fas fa-star"></i><span class="rating-num">${item.Rating}</span></span>
            <h3 class="humans-name">${item.Fullname}</h3>
            <p class="humans-descreption">The task: ${item.the_task}</p>
        </li>
        `

    })
}