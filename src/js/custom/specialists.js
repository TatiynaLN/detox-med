

; (function () {
    if (document.querySelector('.specialists')) {
        new Swiper('.slider-specialists', {
            navigation: {
                nextEl: '.next',
                prevEl: '.prev'
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

    }
})();