; (function () {
    new Swiper('.slider-licenses', {
        navigation: {
            nextEl: '.slider-licenses-next',
            prevEl: '.slider-licenses-prev'
        },
        // управление клавиатурой
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },
        watchOverflow: true,
        autoHeight: false,
        slidePerGroup: 1,
        initialSlide: 0,
        speed: 400,
        loop: false, // бесконечный слайд
        breakpoints: {
            // when window width is <= 320px
            320: {
                autoHeight: true,
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            520: {

                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 640px
            1024: {
                initialSlide: 1,
                centeredSlides: false,
                slidesPerView: 3,
                spaceBetween: 38

            }
        }
    });


})();

