let elNavbarBtn = document.querySelector('.site__navbar-list')

elNavbarBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    console.log(e.target.id);
    switch (+e.target.id) {
        case 1:
            window.location.href = '../index.html'  
            break;
    
        default:
            break;
    }
})