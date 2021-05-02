;(function () {

    if(window.innerWidth < 1320) {
        subMenuHandler();
    }

    window.addEventListener('resize', () => {
        if(window.innerWidth < 1320) {
            subMenuHandler();
        }
    });

    function subMenuHandler() {
        const navItems = document.querySelectorAll('.header__nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if(item.childNodes[0].childNodes[0].classList.contains('link-arow') && item.childNodes[0].childNodes[0].classList.contains('submenu-active')) {
                    item.childNodes[0].childNodes[0].classList.remove('submenu-active');
                } else if (item.childNodes[0].childNodes[0].classList.contains('link-arow') && !item.childNodes[0].childNodes[0].classList.contains('submenu-active') && window.innerWidth < 1320) {
                    e.preventDefault();
                    item.childNodes[0].childNodes[0].classList.add('submenu-active');
                }
            });
        });
    }

})();