"use strict";
;
// (function () {

// полифилл CustomEven для IE11
(function () {
    if (typeof window.CustomEvent === "function") return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: null };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    window.CustomEvent = CustomEvent;
})();

function $modal(options) {
    var
        _elemModal,
        _eventShowModal,
        _eventHideModal,
        _hiding = false,
        _destroyed = false,
        _animationSpeed = 200;

    function _createModal(options) {
        var
            elemModal = document.createElement('div'),
            //  data-dismiss="modal"
            modalTemplate = '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__body" data-modal="content">{{content}}</div>{{footer}}</div>',
            modalFooterTemplate = '<div class="modal__footer">{{buttons}}</div>',
            modalButtonTemplate = '<button type="button" class="{{button_class}}" data-handler={{button_handler}}>{{button_text}}</button>',
            modalHTML,
            modalFooterHTML = '';

        elemModal.classList.add('modal');
        modalHTML = modalTemplate.replace('{{title}}', options.title || 'Новое окно');
        modalHTML = modalHTML.replace('{{content}}', options.content || '');
        if (options.footerButtons) {
            for (var i = 0, length = options.footerButtons.length; i < length; i++) {
                var modalFooterButton = modalButtonTemplate.replace('{{button_class}}', options.footerButtons[i].class);
                modalFooterButton = modalFooterButton.replace('{{button_handler}}', options.footerButtons[i].handler);
                modalFooterButton = modalFooterButton.replace('{{button_text}}', options.footerButtons[i].text);
                modalFooterHTML += modalFooterButton;
            }
            modalFooterHTML = modalFooterTemplate.replace('{{buttons}}', modalFooterHTML);
        }
        modalHTML = modalHTML.replace('{{footer}}', modalFooterHTML);
        elemModal.innerHTML = modalHTML;
        document.body.appendChild(elemModal);
        return elemModal;
    }

    function _showModal() {
        if (!_destroyed && !_hiding) {
            _elemModal.classList.add('modal__show');
            document.dispatchEvent(_eventShowModal);
        }
    }

    function _hideModal() {
        _hiding = true;
        _elemModal.classList.remove('modal__show');
        _elemModal.classList.add('modal__hiding');
        setTimeout(function () {
            _elemModal.classList.remove('modal__hiding');
            _hiding = false;
        }, _animationSpeed);
        document.dispatchEvent(_eventHideModal);
    }

    function _handlerCloseModal(e) {
        if (e.target.dataset.dismiss === 'modal') {
            _hideModal();
        }
    }
    window.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            _hideModal();
        }
    });
    _elemModal = _createModal(options || {});


    _elemModal.addEventListener('click', _handlerCloseModal);
    _eventShowModal = new CustomEvent('show.modal', { detail: _elemModal });
    _eventHideModal = new CustomEvent('hide.modal', { detail: _elemModal });

    return {
        show: _showModal,
        hide: _hideModal,
        destroy: function () {
            _elemModal.parentElement.removeChild(_elemModal),
                _elemModal.removeEventListener('click', _handlerCloseModal),
                destroyed = true;
        },
        setContent: function (html) {
            _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
        },
        setTitle: function (text) {
            _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
        }
    }
};

(function () {
    // создадим модальное окно 1
    var modal1 = $modal({

        content: '<div class="modal-wrapper"><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span><h2>У Вас есть вопросы? Нужна помощь?</h2><h3>Заполните форму, и мы перезвоним Вам в течении 10 минут!</h3>\
            <form>\
                <input class="_req phone-input" type="text" name="user-phone" placeholder="+ 7 ___ - __ - __" required="required">\
                <input class="_req type="text" name="user-name" placeholder="Ваше имя" required="required">\
                <button class="btn-red">Заказать звонок</button>\
                <div class="form__policy">\
                    <input class="_req" id="modal__chec1" type="checkbox" required="required" checked="">\
                    <label for="modal__chec1"> Вы соглашаетесь с \
                        <a target="_blank" href="#!">условиями обработки персональных данных</a>\
                    </label>\
                </div>\
            </form>\
        </div>'

    });
    // создадим модальное окно 2
    var modal2 = $modal({
        content: '<div class="modal-wrapper2"><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span><h2>Заполните форму, чтобы вызвать врача</h2>\
            <form class="modal-form">\
                <input class="_req phone-input" type="text" name="user-phone" placeholder="+ 7 ___ - __ - __" required="required">\
                <input class="_req type="text" name="user-name" placeholder="ФИО" required="required">\
                <input class="_req type="text" name="user-addres" placeholder="Адрес" required="required">\
                <textarea class="_req "type="text" name="user-message" placeholder="Опишите проблему" required="required"></textarea>\
                <button class= "btn-red"> Заказать звонок</button>\
                <div class="form__policy">\
                    <input class="_req" id="modal__chec2" type="checkbox" required="required" checked="">\
                    <label for="modal__chec2"> Вы соглашаетесь с \
                        <a target="_blank" href="#!">условиями обработки персональных данных</a>\
                    </label>\
                </div>\
            </form>\
        </div>'
    });
    // создадим модальное окно 3
    var modal3 = $modal({
        content: '<div class="modal-wrapper modal-thanks"><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span><h2>Ваша заявка отправлена!</h2><p>Наша главная задача - помогать людям! Мы перезвоним вам в течении <em>10 минут</em>!</p><p>Наркологический центр «ДетоксМед» — лечение зависимостей по европейским стандартам. Лечение у нас - это:</p>\
        <div class="block">\
            <div class="block__box">\
                <h3> Научная обоснованность</h3>\
                <p>\
                    <i>\
                        <img src="./wp-content/themes/detox-med/assets/img/icons/atom1.svg" alt=""/>\
                    </i>\
                    Мы используем методы, которые имеют научное обоснование. Это позволяет достигать гарантированный результат.\
                </p>\
            </div>\
            <div class="block__box">\
                <h3>Инновационные методы</h3>\
                <p>\
                    <i>\
                        <img src="./wp-content/themes/detox-med/assets/img/icons/innovation1.svg" alt=""/>\
                    </i>\
                    Использование только самых современных и передовых методик лечения синдрома зависимости.\
                </p>\
            </div>\
            <div class="block__box">\
                <h3>Строжайшая конфиденциальность</h3>\
                <p>\
                    <i>\
                        <img src="./wp-content/themes/detox-med/assets/img/icons/anonym1.svg" alt=""/>\
                    </i>\
                    Мы гарантируем полную анонимность лечения. Вы можете быть уверены, что не будете скомпрометированы.\
                </p>\
            </div>\
            <div class="block__box">\
                <h3>Максимальный комфорт</h3>\
                <p>\
                    <i>\
                        <img src="./wp-content/themes/detox-med/assets/img/icons/hospital1.svg" alt=""/>\
                    </i>\
                    Наш стационар оснащён современным оборудованием. В палатах есть всё необходимое для комфортного проживания.\
                </p>\
            </div>\
            <div class="block__box">\
                <h3>Индивидуальный план лечения</h3>\
                <p>\
                    <i>\
                        <img src="./wp-content/themes/detox-med/assets/img/icons/list1.svg" alt="" />\
                    </i>\
                    Наши специалисты подберают наиболее эффективные методы восстановительной терапии под каждого пациента.\
                </p>\
            </div>\
        </div>'
    });


    // при клике по кнопке #show-modal-1

    document.addEventListener('click', function (e) {
        if (e.target.dataset.toggle === 'modal-1') {
            // отобразим модальное окно N1
            modal1.show();
        } else if (e.target.dataset.toggle === 'modal-2') {
            // отобразим модальное окно N2
            modal2.show();
        }
        else if (e.target.dataset.toggle === 'modal-3') {
            // отобразим модальное окно N3
            modal3.show();
        }
        // else if (e.target.dataset.toggle === 'modal-4') {
        //     // отобразим модальное окно N4
        //     modal4.show();
        // }
        // else if (e.target.dataset.toggle === 'modal-5') {
        //     // отобразим модальное окно СПАСИБО
        //     modal5.show();
        // }
    });
    var btns = document.querySelectorAll('.btn');
    let panel = document.getElementsByTagName('html')[0];
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            panel.classList.add('oh');
        });
    });
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal__btn-close')) {
            panel.classList.remove('oh');
        }
    });
    window.addEventListener('click', (e) => {
        if (e.target.dataset.dismiss === 'modal') {// этот кусок кода
            panel.classList.remove('oh');
        }
    });
    window.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
            panel.classList.remove('oh');
        }
    });
})();


// })();
"use strict";
;

// проба
