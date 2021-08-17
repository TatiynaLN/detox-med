; (function () {

    // if (window.innerWidth < 1200) {
    //     subMenuHandler();
    // }

    // window.addEventListener('resize', () => {
    //     if (window.innerWidth < 1200) {
    //         subMenuHandler();
    //     }
    // });

    // function subMenuHandler() {
    //     const navItems = document.querySelectorAll('.header__nav-item');
    //     navItems.forEach(item => {
    //         item.addEventListener('click', (e) => {
    //             if (item.childNodes[0].childNodes[0].classList.contains('open') && item.childNodes[0].childNodes[0].classList.contains('submenu-active')) {
    //                 item.childNodes[0].childNodes[0].classList.remove('submenu-active');
    //             } else if (item.childNodes[0].childNodes[0].classList.contains('open') && !item.childNodes[0].childNodes[0].classList.contains('submenu-active') && window.innerWidth < 1200) {
    //                 e.preventDefault();
    //                 item.childNodes[0].childNodes[0].classList.add('submenu-active');
    //             }
    //         });
    //     });
    // }

    if (window.innerWidth < 1200) {
        subMenuHandler();
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth < 1200) {
            subMenuHandler();
        }
    });

    const subMenuLinks = document.querySelectorAll('.header__item-link');
    const subMenu = document.querySelectorAll('.header__drop-menu');

    function subMenuHandler() {

        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('open') && !e.target.parentNode.childNodes[2].classList.contains('submenu-active')) {
                e.preventDefault();
                e.target.parentNode.childNodes[2].classList.add('submenu-active');

                if (e.target == subMenuLinks[0]) {
                    if (subMenu[1].classList.contains('submenu-active')) {
                        subMenu[1].remove('submenu-active');
                    }
                }

                if (e.target == subMenuLinks[1]) {
                    if (subMenu[0].classList.contains('submenu-active')) {
                        subMenu[0].remove('submenu-active');
                    }
                }

            } else if (e.target.classList.contains('open') && !e.target.parentNode.childNodes[2].classList.contains('submenu-active')) {
                e.target.parentNode.childNodes[2].classList.remove('submenu-active');
            }
        });

        const menuClose = document.querySelector('.menu__btn');

        menuClose.addEventListener('click', () => {
            if (subMenu[1].classList.contains('submenu-active')) {
                subMenu[1].remove('submenu-active');
            }
            if (subMenu[0].classList.contains('submenu-active')) {
                subMenu[0].remove('submenu-active');
            }
        });

        const subMenuClose = document.querySelector('.menu__box');

        subMenuClose.addEventListener('click', () => {
            if (subMenu[1].classList.contains('submenu-active')) {
                subMenu[1].remove('submenu-active');
            }
            if (subMenu[0].classList.contains('submenu-active')) {
                subMenu[0].remove('submenu-active');
            }
        });
    }

})();