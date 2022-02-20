
// Button listeners
const toastExample1 = document.querySelector('#toastExample1');
const toastExample2 = document.querySelector('#toastExample2');
const toastExample3 = document.querySelector('#toastExample3');

// toast-body listeners
const toastContainerExampleLeft = document.querySelector('#toastExampleLeft');
const toastContainerExampleCenter = document.querySelector('#toastExampleCenter');
const toastContainerExampleRight = document.querySelector('#toastExampleRight');

// toast-close-button listeners
const toastExampleLeftCloseBtn= document.querySelector('#toastExampleLeftCloseBtn')
const toastExampleRightCloseBtn= document.querySelector('#toastExampleRightCloseBtn')
const toastExampleCenterCloseBtn= document.querySelector('#toastExampleCenterCloseBtn')


toastExample1.addEventListener('click',()=>{
 
    toastContainerExampleLeft.classList.remove('hide')
    setTimeout(()=>{
        toastContainerExampleLeft.classList.add('hide')
   },3000)
})

toastExample3.addEventListener('click',()=>{
 
    toastContainerExampleRight.classList.remove('hide')
    setTimeout(()=>{
        toastContainerExampleRight.classList.add('hide')
   },3000)
})

toastExample2.addEventListener('click',()=>{
 
    toastContainerExampleCenter.classList.remove('hide')
    setTimeout(()=>{
        toastContainerExampleCenter.classList.add('hide')
   },3000)
})



toastExampleLeftCloseBtn.addEventListener('click',()=> toastContainerExampleLeft.classList.add('hide'))

toastExampleRightCloseBtn.addEventListener('click',()=>toastContainerExampleRight.classList.add('hide'))

toastExampleCenterCloseBtn.addEventListener('click',()=>toastContainerExampleCenter.classList.add('hide'))


