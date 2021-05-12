; (function () {

    if (document.querySelector('.tabs')) {
        const tabsTitles = document.querySelectorAll('.tabs .title__item');
        const tabsContent = document.querySelectorAll('.tabs .content__item');


        tabsTitles.forEach((title, i) => {

            title.addEventListener('click', () => {

                tabsContent.forEach(content => {
                    // content.style.display = 'none';
                    content.classList.remove('content__item--active');
                });

                tabsTitles.forEach(title => {
                    title.classList.remove('title__item--active');
                });

                // tabsContent[i].style.display = 'block';
                tabsContent[i].classList.add('content__item--active');
                title.classList.add('title__item--active');
            });

        });
    }

})();