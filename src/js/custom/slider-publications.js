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
        slidesPerView: 1,
        slidePerGroup: 1,
        initialSlide: 0,
        loop: true, // бесконечный слайд
        speed: 700,
        effect: 'flip',
        flipEffect: {
            slideShadows: true,
            limitRotation: true // показ только активного слайда
        },

    });


})();