const slider = document.querySelector('.slider__input');
const sliderImg = document.querySelector('.slider__image');

document.addEventListener('DOMContentLoaded', function() {
    function changeImgSize() {
        const sliderValue = slider.value;
        console.log(sliderValue);
        const newImgWidth = slider.value + '%';
        sliderImg.style.width = newImgWidth;
    }
    const debounceSlider = _.debounce(changeImgSize, 300)

    slider.addEventListener('input', debounceSlider) 
})


