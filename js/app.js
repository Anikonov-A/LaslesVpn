$(document).ready(function () {
    $('.slide-one').owlCarousel({
        loop: true,
        nav: true,
        autoplay: true,
        autoplayTimeout: 2000,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            },
            1100: {
                items: 5
            }
        }
    });
});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay: {
        delay: 2000,
        reverseDirection:true,
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        991: {
            slidesPerView: 3,
            spaceBetween: 50
        }
    }

});
