
// ; (function () {
//     new Swiper('.slider-specialists', {
//         navigation: {
//             nextEl: '.prev',
//             prevEl: '.next'
//         },

//         autoHeight: true,
//         slidesPerView: 1, // колличество слайдов для показа
//         //         //     watchOverflow: true,
//         //         //     spaceBetween: 30,
//         slidePerGroup: 1, // колличество пролистываемых слайдов
//         centeredSlides: true,
//         // initialSlide: 0, // стартовый слайд
//         lopp: true, // бесконечный слайд
//         speed: 700, // скорость пролистывания

//         //
//         // effect: 'fade', // эфект прозрачность
//         // fadeEffect: {
//         //     crossFade: true
//         // },
//         //
//         effect: 'flip',
//         flipEffect: {
//             slideShadows: true,
//             limitRotation: true // показ только активного слайда
//         },

//         //
//         // breakpoints: {
//         //     320: {
//         //         slidesPerViev: 1,
//         //     },
//         //     768: {
//         //         slidesPerViev: 2,
//         //     },
//         // },
//         // });
//         //         //колличество пролистываемых слайдов
//         //         slidesPerGroup: 1,
//         //         // активный слайд отсчет с 0
//         //         initialSlide: 0,
//         //         autoHeight: true,
//         //         loop: true,
//         //         centeredSlides: false,
//         //         //Отключение функционала, если слайдов меньше чем нужно
//         //         watchOverflow: true,
//         //         //колличество слайдов для показа
//         // breakpoints: {
//         //     320: {
//         //         //колличество слайдов для показа
//         //         slidesPerView: 1,
//         //     },
//         //     768: {
//         //         //колличество слайдов для показа
//         //         slidesPerView: 2,
//         //     }

//         // },
//         //
//         // управление клавиатурой
//         keyboard: {
//             enabled: true,
//             onlyInViewport: true,
//             pageUpDown: true,
//         },
//     });

// })();

; (function () {
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


})();