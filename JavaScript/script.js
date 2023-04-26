var slides = document.querySelector('.slider-items').children;
var prevSlide = document.querySelector('.left-slide');
var nextSlide = document.querySelector('.right-slide');
var totalSlide = slides.length;
var index = 0;



nextSlide.onclick = () => {
    next('next');
}
prevSlide.onclick = () => {
    next('prev');
}

function next(direction) {
    if(direction == 'next') {
        index++;
        if(index == totalSlide) {
        index = 0;
        }
    }
    else {
        if(index == 0) {
            index = totalSlide - 1
        } else {
            index--
        }
    }

    for(i=0; i<slides.length; i++) {
        slides[i].classList.remove('active')
    }
    {
        slides[index].classList.add('active')
    }
}