// simple modal buttons
const modal = document.querySelector('#modalExample');
const modalCloseBtn = document.querySelector('#modalCloseBtn');
const showModalBtn = document.querySelector('#showModalBtn');

// footer modal buttons
const modal2 = document.querySelector('#modalFooterExample1');
const modalCloseBtn2 = document.querySelector('#modalFooterCloseBtn1');
const showModalBtn2 = document.querySelector('#showModalBtn1');


// simple modal listeners
showModalBtn.addEventListener('click',()=> modal.classList.remove('hide'));
modalCloseBtn.addEventListener('click',()=> modal.classList.add('hide'));

// footer modal listeners
showModalBtn2.addEventListener('click',()=> modal2.classList.remove('hide'));
modalCloseBtn2.addEventListener('click',()=> modal2.classList.add('hide'));

// hides modal when click outside
window.addEventListener('click',(e)=> (e.target === modal)? modal.classList.add('hide'):'')