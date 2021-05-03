// ;(function () {

//     if(document.querySelector('.licenses--page') || document.querySelector('.swiper-licenses') || document.querySelector('.specialists')) {

//         const minimizedImg = document.querySelectorAll('.minimized');
//         const imgOverlay = document.querySelectorAll('.img__overlay');
//         const body = document.getElementsByTagName('body')[0];
//         let out = '';
//         let div = document.createElement('div');
//             div.classList.add('overlay');


//         imgOverlay.forEach( (el, i) => {
//             el.addEventListener('click', () => {
//                 let path = minimizedImg[i].getAttribute('data-full');
//                 out += `<div class="magnify"><img class="full-size" src="${path}"></div>`;
//                 div.innerHTML = out;
//                 body.appendChild(div);
//                 body.classList.add('no-scroll');
//                 const magnify = document.querySelector('.magnify');
//                 magnify.classList.remove('modal--close');
//                 magnify.classList.add('modal--open');
//                 const scrollY = document.documentElement.style.getPropertyValue('--scroll-y'); // Определяем текущее расстояние от верха страницы
//                 body.style.top = `-${scrollY}`;
//             });
//         });

//         function imgFullsizeHide() {
//             out = '';
//             const magnify = document.querySelector('.magnify');
//             magnify.classList.add('modal--close');
//             magnify.classList.remove('modal--open');
//             setTimeout(() => {
//                 body.removeChild(div);
//                 body.classList.remove('no-scroll');
//                 const scrollY = body.style.top; // Восстанавливаем расположение ползунка прокрутки
//                 body.style.top = '';
//                 window.scrollTo(0, parseInt(scrollY || '0') * -1);
//             }, 400);
//         }

//         window.addEventListener('scroll', () => { // Отслеживаем текущее расстояние от верха страницы
//             document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
//         });

//         window.addEventListener('click', (e) => {
//             if (e.target.closest('.full-size')) {
//                 e.stopPropagation();
//             } 
//             if (e.target.closest('.overlay') && !e.target.closest('.full-size')) {
//                 if(document.querySelector('.magnify')) {
//                     imgFullsizeHide();
//                 }
//             }
//         });

//         window.addEventListener('keydown', (e) => {
//             if (e.code === 'Escape') {
//                 if(document.querySelector('.magnify')) {
//                     imgFullsizeHide();
//                 }
//             }
//         }); 
//     }

// })();
