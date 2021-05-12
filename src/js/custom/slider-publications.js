; (function () {
    new Swiper('.slider-publications', {
        navigation: {
            nextEl: '.publications__next',
            prevEl: '.publications__prev'
        },
        // управление клавиатурой
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        autoHeight: true,
        slidePerGroup: 1,
        initialSlide: 0,
        loop: true, // бесконечный слайд
        speed: 700,
        breakpoints: {
            // when window width is <= 320px
            320: {
                slidesPerView: 1,

            },
            // when window width is <= 480px
            1400: {
                slidesPerView: 2,
                spaceBetween: 29

            }
        }
    });


})();