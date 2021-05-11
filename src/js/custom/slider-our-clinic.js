; (function () {
    new Swiper('.slider-our-clinic', {
        navigation: {
            nextEl: '.our-clinic-next',
            prevEl: '.our-clinic-prev'
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            // возможность перетаскивать скрол
            draggable: true,
        },
        // управление клавиатурой
        keyboard: {
            enabled: true,
            onlyInViewport: true,
            pageUpDown: true,
        },

        // slidesPerView: 3,
        slidePerGroup: 1,
        initialSlide: 0,
        loop: false, // бесконечный слайд
        speed: 400,
        spaceBetween: 38,
        breakpoints: {
            // when window width is <= 320px
            320: {
                autoHeight: true,
                slidesPerView: 1,
                spaceBetween: 10
            },
            // when window width is <= 480px
            620: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is <= 640px
            1200: {
                initialSlide: 1,
                // centeredSlides: true,
                autoHeight: false,
                slidesPerColumn: 2, // мультирядность
                slidesPerView: 3,
                spaceBetween: 30

            }
        }
    });


})();
