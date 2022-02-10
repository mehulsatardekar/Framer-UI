const floatBtn = document.querySelector('#btn-float');
const expFloatBtn = document.querySelector('#exp-hide-float-btn');
expFloatBtn.addEventListener('click',()=>{
    floatBtn.classList.toggle('hide');
    if(expFloatBtn.innerHTML == "Show Button"){
        expFloatBtn.innerHTML ='Hide Button';
    }else{
        expFloatBtn.innerHTML ='Show Button'
    }
})