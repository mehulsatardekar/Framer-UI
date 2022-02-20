const cardsCloseBtn = document.querySelector('#card-close-btn');
const cardBody = document.querySelector('#card-body');

cardsCloseBtn.addEventListener('click',()=>{
    cardBody.style.display="none";
})