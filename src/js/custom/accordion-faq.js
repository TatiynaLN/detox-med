// ; (function () {

//     if (document.querySelector('.questions')) {
//         let accordItemsTitle = document.querySelectorAll('.accordion-first .accordion__item h3');
//         let accordItems = document.querySelectorAll('.accordion-first .accordion__item');
//         let accordItemsContent = document.querySelectorAll('.accordion-first .accordion__item p');

//         function openCard() {

//             let activeInitial = accordItemsContent[0].getBoundingClientRect().height;
//             accordItems[0].style.minHeight = `${activeInitial + 90}px`;
//             accordItems[0].classList.add('accordion__item--active');
//             // accordItems[0].style.minHeight = `${200}px`;

//             accordItemsTitle.forEach((item, i) => {
//                 item.addEventListener('click', () => {
//                     let contentHeight = accordItemsContent[i].getBoundingClientRect().height;
//                     if (accordItems[i].classList.contains('accordion__item--active')) {
//                         setTimeout(() => {
//                             accordItems[i].classList.remove('accordion__item--active');
//                             accordItems[i].style.minHeight = `${64}px`;
//                         }, 300)
//                         setTimeout(() => {
//                             accordItemsContent[i].classList.remove('accordion__content--active');
//                         }, 100)
//                     } else {
//                         setTimeout(() => {
//                             let newHeight = contentHeight + 0;
//                             accordItems[i].style.minHeight = `${newHeight}px`;
//                             accordItems[i].classList.add('accordion__item--active');
//                         }, 200)
//                         setTimeout(() => {
//                             accordItemsContent[i].classList.add('accordion__content--active');
//                         }, 800)
//                     }
//                 });
//             });
//         }
//         openCard();
//     }

// })();

; (function () {
    if (document.querySelector('.questions')) {
        let accordItemsTitle = document.querySelectorAll('.accordion-first .accordion__item h3');
        let accordItems = document.querySelectorAll('.accordion-first .accordion__item');
        let accordItemsContent = document.querySelectorAll('.accordion-first .accordion__item p');

        function openCard() {
            let activeInitial = accordItemsContent[0].getBoundingClientRect().height;
            accordItems[0].style.minHeight = `${activeInitial + 90}px`;
            accordItems[0].classList.add('accordion__item--active');

            accordItemsTitle.forEach((item, i) => {
                let titleHeightInitial = accordItemsTitle[i].getBoundingClientRect().height;
                accordItems[0].style.height = `${titleHeightInitial}px`;
                accordItems[0].classList.add('accordion__item--active');
                item.addEventListener('click', () => {
                    let titleHeightInitial = accordItemsTitle[i].getBoundingClientRect().height;
                    let contentHeight = accordItemsContent[i].getBoundingClientRect().height;
                    console.log(titleHeightInitial);
                    if (accordItems[i].classList.contains('accordion__item--active')) {
                        setTimeout(() => {
                            accordItems[i].classList.remove('accordion__item--active');
                            accordItems[i].style.minHeight = `${64}px`;
                        }, 300)
                        setTimeout(() => {
                            accordItemsContent[i].classList.remove('accordion__content--active');
                        }, 100)
                    } else {
                        setTimeout(() => {
                            let newHeight = contentHeight + 64;
                            accordItems[i].style.minHeight = `${newHeight}px`;
                            accordItems[i].classList.add('accordion__item--active');
                        }, 200)
                        setTimeout(() => {
                            accordItemsContent[i].classList.add('accordion__content--active');
                        }, 800)
                    }
                });
            });
        }
        openCard();
    }
})();