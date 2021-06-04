"use strict";
// ФИКСИРУЕМ HEADER ПРИ СКРОЛЕ
; (function () {


    window.onscroll = () => {
        let block1 = document.querySelector('.header__bottom');
        if (window.scrollY >= 130) {
            block1.classList.add('header__bottom-new');
        }
        else if (window.scrollY < 130) {
            block1.classList.remove('header__bottom-new');
        }
    };

})();

// ЗАПРЕТ СКРОЛА БОДИ ПРИ ОТКРЫТОМ ГАМБУРГЕРЕ
"use strict";
; (function () {
    let panel = document.querySelector('html');
    document.querySelector('.menu__btn').addEventListener('click', e => {
        panel.classList.toggle('no-scroll');
    });


})();



