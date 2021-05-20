; (function () {
    if (document.querySelector('.reviews-top')) {
        new Swiper('.slider-reviews', {
            navigation: {
                nextEl: '.reviews-next',
                prevEl: '.reviews-prev'
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
                    slidesPerView: 1.2,
                    spaceBetween: 10
                },
                // when window width is <= 480px
                620: {
                    slidesPerView: 2.2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3.2,
                    spaceBetween: 20
                },
                900: {
                    slidesPerView: 3.5,
                    spaceBetween: 20
                },
                // when window width is <= 640px
                1200: {
                    initialSlide: 1,
                    // centeredSlides: true,
                    autoHeight: false,
                    slidesPerView: 4,
                    spaceBetween: 30

                }
            }
        });

    }
})();
