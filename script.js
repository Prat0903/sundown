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

function toggle() {
    var design = document.querySelector('#design');
    var project = document.querySelector('#project');
    var execution = document.querySelector('#execution');
    var description = document.querySelector('#description');
    var cover = document.querySelector('#cover-image');

    design.addEventListener('click', function () {
        description.innerHTML = '<p>Our design team is your first point of contact for any project. They create eye-catching, high-quality visuals that inspire and captivate your customers. We work closely with architects, interior designers, and other relevant stakeholders to ensure a seamless and memorable experience.</p>';
        cover.src = 'https://sundown-ivory.vercel.app/page4-1.webp';
        design.style.color = 'white';
        design.style.marginLeft = 0;
        project.style.marginLeft = '2vw';
        project.style.color = '#504a45';
        execution.style.marginLeft = '2vw';
        execution.style.color = '#504a45';
    })

    project.addEventListener('click', function () {
        description.innerHTML = '<p>Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.</p>';
        cover.src = 'https://sundown-ivory.vercel.app/page4-2.webp';
        project.style.color = 'white';
        project.style.marginLeft = 0;
        design.style.marginLeft = '2vw';
        design.style.color = '#504a45';
        execution.style.marginLeft = '2vw';
        execution.style.color = '#504a45';
    })

    execution.addEventListener('click', function () {
        description.innerHTML = '<p>We’re with you every step of the way, from the design initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.</p>';
        cover.src = 'https://sundown-ivory.vercel.app/page4-3.webp';
        execution.style.color = 'white';
        execution.style.marginLeft = 0;
        design.style.marginLeft = '2vw';
        design.style.color = '#504a45';
        project.style.marginLeft = '2vw';
        project.style.color = '#504a45';
    })
}

hoverAnimation();
loaderAnimation();
swiperAnimation();
menuAnimation();
toggle();