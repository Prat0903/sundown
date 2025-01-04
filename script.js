const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function hoverAnimation() {
    const elems = document.querySelectorAll('.elem');
    const fixed = document.querySelector('#fixed-image');

    function applyLayout() {
        elems.forEach((elem) => {
            const image = elem.getAttribute('data-image');

            if (window.innerWidth > 600) {
                const imgElement = elem.querySelector('img');
                if (imgElement) {
                    imgElement.remove();
                }
                elem.addEventListener('mouseenter', () => {
                    fixed.style.backgroundImage = `url(${image})`;
                    fixed.style.display = 'block';
                });
                elem.addEventListener('mouseleave', () => {
                    fixed.style.display = 'none';
                });
            } else {

                if (!elem.querySelector('img')) {
                    const imgElement = document.createElement('img');
                    imgElement.src = image;
                    imgElement.alt = '';
                    elem.insertBefore(imgElement, elem.firstChild);
                }

                elem.removeEventListener('mouseenter', () => { });
                elem.removeEventListener('mouseleave', () => { });
            }
        });
    }

    applyLayout();

    window.addEventListener('resize', () => {
        applyLayout();
    });
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

function menuAnimation() {
    var menuicon = document.querySelector('#menu i');
    var full = document.querySelector('#full-scr');
    var navimg = document.querySelector('nav img');
    var flag = 0;

    menuicon.addEventListener('click', function () {
        if (flag == 0) {
            full.style.top = '0'
            navimg.style.opacity = 0;
            menuicon.classList.remove('ri-menu-line');
            menuicon.classList.add('ri-close-large-fill');
            menuicon.style.transform = 'rotate(180deg)'
            menuicon.style.transition = 'all ease 0.3s'
            flag = 1
        } else {
            full.style.top = '-100%';
            navimg.style.opacity = 1;
            menuicon.classList.remove('ri-close-large-fill');
            menuicon.classList.add('ri-menu-line');
            menuicon.style.transform = 'rotate(0deg)'
            menuicon.style.transition = 'all ease 0.3s'
            flag = 0;
        }
    })
}

hoverAnimation();
loaderAnimation();
swiperAnimation();
menuAnimation();
