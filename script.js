const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function hoverAnimation() {
    var elemContainer = document.querySelector('#elem-container')
    var fixed = document.querySelector('#fixed-image');

    elemContainer.addEventListener('mouseenter', function () {
        fixed.style.display = 'block';
    })

    elemContainer.addEventListener('mouseleave', function () {
        fixed.style.display = 'none';
    })

    var elems = document.querySelectorAll('.elem');
    elems.forEach((elem) => {
        elem.addEventListener('mouseenter', function () {
            var image = elem.getAttribute('data-image')
            fixed.style.backgroundImage = `url(${image})`;
        })
    })
}

function loaderAnimation() {
    var loader = document.querySelector('#loader');
    setTimeout(() => {
        loader.style.top = '-100%';
    }, 4000)
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 4,
        centeredSlides: false,
        spaceBetween: 50,
        grabCursor: true,
    });
}

hoverAnimation();
loaderAnimation();
swiperAnimation();
