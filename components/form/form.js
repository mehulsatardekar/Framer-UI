const sliderInput = document.querySelector('#rangeSlider');
const sliderValue = document.querySelector('#rangeSliderText');

sliderInput.addEventListener('input',()=> sliderValue.innerText = sliderInput.value)