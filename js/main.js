"use strict"
let carouselInner = document.querySelector('.carousel-inner')

fetch('https://developer1.pythonanywhere.com/main/announcement-list')
.then(res=>res.json())
.then(data =>{
        data ? renderCarousel(data) : ''
    }
).catch()

function renderCarousel(data){
    carouselInner.innerHTML = '';
    let k = 0;

    data.forEach((item)=>{
        ++k
        carouselInner.innerHTML += 
        `<div class="carousel-item ${k === 1 ? 'active' : ''}">
            <img src="https://developer1.pythonanywhere.com/${item.img1}" class="d-block w-100 h-100 carousel-img" alt="Чистый дом">
            <div class="carousel-caption d-none d-md-block">
            <h5>${item.title}</h5>
            <p>${item.description}</p>
            </div>
        </div>`
    })
}