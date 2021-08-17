
; (function () {

    if (document.querySelector('.open')) {
        let accordItemsTitle = document.querySelectorAll('.open .accordion__item h3');
        let accordItemsContent = document.querySelectorAll('.open .accordion__item p');
        function openCard() {
            accordItemsTitle.forEach(item => {
                accordItemsContent[0].style.height = `${accordItemsContent[0].scrollHeight}px`;
                accordItemsContent[0].classList.add('accordion__content--active');
                accordItemsTitle[0].classList.add('accordion__item--active');

                item.addEventListener('click', () => {
                    if (item.nextElementSibling.classList.contains('accordion__content--active')) {
                        hideText(item.nextElementSibling, item);
                    } else {
                        showText(item.nextElementSibling, item);
                    }
                });
            });
        }
        openCard();

        function showText(textEl, item) {
            textEl.style.height = `${textEl.scrollHeight}px`;
            textEl.classList.add('accordion__content--active');
            item.classList.add('accordion__item--active');
        }

        function hideText(textEl, item) {
            textEl.style.height = `${0}px`;
            textEl.classList.remove('accordion__content--active');
            item.classList.remove('accordion__item--active');
        }

        // window.addEventListener('resize', () => {
        //     openCard();
        // });
    }
    //
    if (document.querySelector('.close')) {
        let accordItemsTitle = document.querySelectorAll('.close .accordion__item h3');
        let accordItemsContent = document.querySelectorAll('.close .accordion__item p');
        function openCard() {
            accordItemsTitle.forEach(item => {
                item.addEventListener('click', () => {
                    if (item.nextElementSibling.classList.contains('accordion__content--active')) {
                        hideText(item.nextElementSibling, item);
                    } else {
                        showText(item.nextElementSibling, item);
                    }
                });
            });
        }
        openCard();

        function showText(textEl, item) {
            textEl.style.height = `${textEl.scrollHeight}px`;
            textEl.classList.add('accordion__content--active');
            item.classList.add('accordion__item--active');
        }

        function hideText(textEl, item) {
            textEl.style.height = `${0}px`;
            textEl.classList.remove('accordion__content--active');
            item.classList.remove('accordion__item--active');
        }

        // window.addEventListener('resize', () => {
        //     openCard();
        // });
    }
    //
    if (document.querySelector('.accordion-second')) {
        let accordItemsTitle = document.querySelectorAll('.accordion-second .accordion__item h3');
        let accordItemsContent = document.querySelectorAll('.accordion-second .accordion__item p');
        // console.log(accordItemsTitle);
        function openCard() {
            accordItemsTitle.forEach(item => {
                item.addEventListener('click', () => {
                    if (item.nextElementSibling.classList.contains('accordion__content--active')) {
                        hideText(item.nextElementSibling, item);
                    } else {
                        showText(item.nextElementSibling, item);
                    }
                });
            });
        }
        openCard();

        function showText(textEl, item) {
            textEl.style.height = `${textEl.scrollHeight}px`;
            textEl.classList.add('accordion__content--active');
            item.classList.add('accordion__item--active');
        }

        function hideText(textEl, item) {
            textEl.style.height = `${0}px`;
            textEl.classList.remove('accordion__content--active');
            item.classList.remove('accordion__item--active');
        }

        // window.addEventListener('resize', () => {
        //     openCard();
        // });
    }
})();