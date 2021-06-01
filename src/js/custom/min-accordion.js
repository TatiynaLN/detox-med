
// ; (function () {
//     if (document.querySelector('.cost') || document.querySelector('.questions-close')) {
//         let accordItemsTitle = document.querySelectorAll('.accordion__item h3');
//         let accordItems = document.querySelectorAll('.accordion__item');
//         let accordItemsContent = document.querySelectorAll('.accordion__item p');

//         function openCard() {
//             accordItemsTitle.forEach((item, i) => {
//                 let titleHeightInitial = accordItemsTitle[i].getBoundingClientRect().height;
//                 accordItems[i].style.height = `${titleHeightInitial}px`;
//                 item.addEventListener('click', () => {
//                     let titleHeightInitial = accordItemsTitle[i].getBoundingClientRect().height;
//                     let contentHeight = accordItemsContent[i].getBoundingClientRect().height;
//                     console.log(titleHeightInitial);
//                     if (accordItems[i].classList.contains('accordion__item--active')) {
//                         accordItemsContent[i].classList.remove('accordion__content--active');
//                         setTimeout(() => {
//                             accordItems[i].classList.remove('accordion__item--active');
//                             accordItems[i].style.height = `${titleHeightInitial}px`;
//                         }, 200);
//                     } else {
//                         let titleHeight = accordItemsTitle[i].getBoundingClientRect().height;
//                         let newHeight = `${contentHeight + titleHeight + 47}`;
//                         accordItems[i].style.height = `${newHeight}px`;
//                         accordItems[i].classList.add('accordion__item--active');
//                         setTimeout(() => {
//                             accordItemsContent[i].classList.add('accordion__content--active');
//                         }, 300);
//                     }
//                 });
//             });
//         }
//         openCard();
//     }
// })();