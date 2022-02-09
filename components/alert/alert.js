const alertCloseBtn = document.querySelector('#alert-close');
const alertBody = document.querySelector('#alert-full-body');

alertCloseBtn.addEventListener('click',()=>{
    alertBody.style.display="none";
})