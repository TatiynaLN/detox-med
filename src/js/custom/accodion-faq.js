// ;(function () {

//     let accordItems = document.querySelectorAll('.accordion ul li h3'),
//         active = document.getElementsByClassName('accordion__item__title--active');

//     Array.from(accordItems).forEach( item => {
//         item.addEventListener('click', function() {
//         if (active.length > 0 && active[0] !== this) 
//             active[0].classList.remove('accordion__item__title--active'); 

//             this.classList.toggle('accordion__item__title--active');
//         });
//     });

// })();
; (function () {

    let accordItems = document.querySelectorAll('.accordion ul li h3');

    Array.from(accordItems).forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('accordion__item__title--active');
        });
    });

})();