; (function () {

    const body = document.getElementsByTagName('body')[0];
    // const html = body.parentNode;
    const wrap = document.querySelector('.wrap-feedback');

    let modal = '';
    let div = document.createElement('div');
    div.classList.add('current-modal');

    // const btns = document.querySelectorAll('.btn-green');
    // const serviceTitles = document.querySelectorAll('.advantages-appeal h3');
    // const servicePrices = document.querySelectorAll('.advantages-appeal p strong');

    // btns.forEach((btn, i) => {
    //     btn.addEventListener('click', () => {
    //         getData(i);
    //     });
    // });

    // function getData(i) {
    //     let serviceTitleValue = serviceTitles[i].textContent;
    //     let servicePriceValue = servicePrices[i].textContent;
    //     console.log(serviceTitleValue);
    //     console.log(servicePriceValue);
    // }

    let options = [
        {
            modal_call_btn: 'btn',
            modal_call_title: 'У Вас есть вопросы? Нужна помощь?',
            modal_call_subtitle: 'Заполните форму, и мы перезвоним Вам в течении 10 минут!',
            modal_form_id: 'form-call',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_consult_btn: 'btn-viziv',
            modal_call_title: 'Заполните форму, чтобы вызвать врача',
            modal_call_subtitle: '',
            modal_form_id: 'form-2',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_price_btn: 'btn-zacaz',
            modal_call_title: 'Для заказа заполните форму ниже',
            modal_form_id: 'form-price'
        },
        {
            modal_price_btn_s: 'btn-zacaz-s',
            modal_call_title: 'Для заказа заполните форму ниже',
            modal_call_price: 'Введение препарата «Дисульфирам»',
            modal_form_id: 'form-price'
        },
        {
            modal_price_btn_min: 'btn-zacaz-min',
            modal_call_title: 'Для заказа заполните форму ниже',
            modal_call_price: 'Введение препарата «Эспераль-гель»',
            modal_form_id: 'form-price'
        },
        {
            modal_price_btn_long: 'btn-zacaz-long',
            modal_call_title: 'Для заказа заполните форму ниже',
            modal_form_id: 'form-price'
        },
        {
            modal_call_title: 'Ваша заявка отправлена!',
            modal_call_subtitle: 'Наша главная задача - помогать людям! Мы перезвоним вам в течении <em>10 минут</em>!'
        }
    ];

    document.addEventListener('click', (e) => {

        if (e.target.classList.contains(options[0].modal_call_btn)) {
            modalShow(options[0].modal_form_id, options[0].modal_call_title, options[0].modal_call_subtitle, options[0].phone_input_id);
            formReadyClick(null, document.querySelector('.form-modal-open'));
        }

        if (e.target.classList.contains(options[1].modal_consult_btn)) {
            modalShow(options[1].modal_form_id, options[1].modal_call_title, options[1].modal_call_subtitle, options[1].phone_input_id);
            formReadyClick(null, document.querySelector('.form-modal-open'));
        }

        if (e.target.classList.contains(options[2].modal_price_btn)) {
            options[2].modal_service = e.target.parentNode.children[1].textContent;
            options[2].modal_price = e.target.parentNode.parentNode.children[0].textContent;
            modalzacaz(options[2].modal_form_id, options[2].modal_call_title, options[2].modal_price, options[2].modal_service);
        }

        if (e.target.classList.contains(options[3].modal_price_btn_s)) {
            options[3].modal_service = `${e.target.children[0].textContent}   ${e.target.children[1].textContent}`;
            modalzacaz(options[3].modal_form_id, options[3].modal_call_title, options[3].modal_call_price, options[3].modal_service);
        }

        if (e.target.classList.contains(options[4].modal_price_btn_min)) {
            options[4].modal_service = `${e.target.children[0].textContent}   ${e.target.children[1].textContent}`;
            modalzacaz(options[4].modal_form_id, options[4].modal_call_title, options[4].modal_call_price, options[4].modal_service);
        }
        if (e.target.classList.contains(options[5].modal_price_btn_long)) {
            options[5].modal_call_price = e.target.children[0].textContent;
            options[5].modal_service = e.target.children[1].textContent;
            modalzacaz(options[5].modal_form_id, options[5].modal_call_title, options[5].modal_call_price, options[5].modal_service);
        }

    });

    function modalShow(formID, modalTitle, modalSubtitle, phoneInputID) {

        if (formID === 'form-call') {
            modal += `
            <div class="modal">
                <div class="modal-wrapper modal__body"><span class="modal__btn-close modal__close" data-dismiss="modal" title="Закрыть">×</span>
                    <h2>${modalTitle}</h2>
                    <h3>${modalSubtitle}</h3>
                    <form id="${formID}" method="post" action="#">
                        <input class="_req phone-input" type="text" name="user-phone" placeholder="+ 7 ___ - __ - __" id="${phoneInputID}" required="required">
                        <input class="_req type="text" name="user-name" placeholder="Ваше имя" required="required">
                        <button class="btn-red">Заказать звонок</button>
                        <div class="form__policy">
                            <input class="_req" id="modal__chec1" type="checkbox" required="required" checked="">
                            <label for="modal__chec1"> Вы соглашаетесь с 
                                <a target="_blank" href="#!">условиями обработки персональных данных</a>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            `;
        }
        if (formID === 'form-2') {
            modal += `
            <div class="modal">
                <div class="modal-wrapper2 modal__body"><span class="modal__btn-close modal__close" data-dismiss="modal" title="Закрыть">×</span>
                    <h2>${modalTitle}</h2>
                    <form class="modal-form" id="${formID}" method="post" action="#">
                        <input class="_req phone-input" type="text" name="user-phone" placeholder="+ 7 ___ - __ - __" id="${phoneInputID}" required="required">
                        <input class="_req type="text" name="user-name" placeholder="ФИО" required="required">
                        <input class="_req type="text" name="user-addres" placeholder="Адрес" required="required">
                        <textarea class="_req name="user-message" placeholder="Опишите проблему" required="required"></textarea>
                        <button class= "btn-red"> Заказать звонок</button>
                        <div class="form__policy">
                            <input class="_req" id="modal__chec2" type="checkbox" required="required" checked="">
                            <label for="modal__chec2"> Вы соглашаетесь с 
                                <a target="_blank" href="#!">условиями обработки персональных данных</a>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            `;
        }
        // if (formID === 'form-price') {
        //     modal += `
        //     <div class="modal">
        //         <div class="modal-wrapper2 modal__body"><span class="modal__btn-close modal__close" data-dismiss="modal" title="Закрыть">×</span>
        //             <h2>${modalTitle}</h2>
        //             <p><span>Услуга: </span>${service}</p>
        //             <p><span>Цена: </span>${price}</p>
        //             <form class="modal-form" id="${formID}" method="post" action="#">
        //                 <input class="_req type="text" name="user-name" placeholder="Имя покупателя" required="required">
        //                 <textarea class="_req name="user-message" placeholder="Комментарий" required="required"></textarea>
        //                 <button class= "btn-red"> Заказать</button>
        //                 <div class="form__policy">
        //                     <input class="_req" id="modal__chec2" type="checkbox" required="required" checked="">
        //                     <label for="modal__chec2"> Вы соглашаетесь с 
        //                         <a target="_blank" href="#!">условиями обработки персональных данных</a>
        //                     </label>
        //                 </div>
        //             </form>
        //         </div>
        //     </div>
        //     `;
        // }

        div.innerHTML = modal;
        wrap.appendChild(div);
        body.classList.add('no-scroll');
        document.querySelector('.modal').classList.remove('modal--close');
        document.querySelector('.modal').classList.add('modal__show');
        inputMask(document.getElementById(phoneInputID));

        document.querySelector('.btn-send').addEventListener('click', () => {
            formSend();
        });
    }

    function modalHide() {
        modal = '';
        wrap.removeChild(div);
        body.classList.remove('no-scroll');
    }

    function inputMask(input) {
        function setMask(event) {
            let pressedKey;
            event.keyCode && (pressedKey === event.keyCode);
            input.setSelectionRange(input.value.length, input.value.length);
            let maskType = '+7 (___) ___-__-__',
                i = 0,
                replaceValue = maskType.replace(/\D/g, ''),
                prevValue = this.value.replace(/\D/g, ''),
                currentValue = maskType.replace(/[_\d]/g, (a) => {
                    return i < prevValue.length ? prevValue.charAt(i++) || replaceValue.charAt(i) : a;
                });
            i = currentValue.indexOf('_');
            if (i != -1) {
                i < 5 && (i = 3);
                currentValue = currentValue.slice(0, i);
            }
            let reg = maskType.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return '\\d{1,' + a.length + '}';
                }).replace(/[+()]/g, '\\$&');
            reg = new RegExp('^' + reg + '$');
            if (!reg.test(this.value) || this.value.length < 5 || pressedKey > 47 && pressedKey < 58) {
                this.value = currentValue;
            } else if (event.type === 'blur' && this.value.length < 5) {
                this.value = '';
            }
            input.setSelectionRange(input.value.length, input.value.length);
        }

        input.addEventListener('input', setMask, false);
        input.addEventListener('focus', setMask, false);
        input.addEventListener('blur', setMask, false);
        input.addEventListener('keydown', setMask, false);
    }


    function formSend() {
        setTimeout(() => {
            form.reset();
        }, 2000);

        setTimeout(() => {
            modalHide();
        }, 5000);
    }

    function modalThanks(modalTitle, modalSubtitle) {
        modal += `
        <div class="modal">
            <div class="modal-wrapper modal__body modal-thanks"><span class="modal__btn-close modal__close" data-dismiss="modal" title="Закрыть">×</span>
                <h2>Ваша заявка отправлена!</h2>
                <p>Наша главная задача - помогать людям! Мы перезвоним вам в течении <em>10 минут</em>!</p>
                <p>Наркологический центр «ДетоксМед» — лечение зависимостей по европейским стандартам. Лечение у нас - это:</p>
                <div class="block">
                    <div class="block__box">
                        <h3> Научная обоснованность</h3>
                        <p>
                            <i>
                                <img src="./wp-content/themes/detox-med/assets/img/icons/atom1.svg" alt=""/>
                            </i>
                            Мы используем методы, которые имеют научное обоснование. Это позволяет достигать гарантированный результат.
                        </p>
                    </div>
                    <div class="block__box">
                        <h3>Инновационные методы</h3>
                        <p>
                            <i>
                                <img src="./wp-content/themes/detox-med/assets/img/icons/innovation1.svg" alt=""/>
                            </i>
                            Использование только самых современных и передовых методик лечения синдрома зависимости.
                        </p>
                    </div>
                    <div class="block__box">
                        <h3>Строжайшая конфиденциальность</h3>
                        <p>
                            <i>
                                <img src="./wp-content/themes/detox-med/assets/img/icons/anonym1.svg" alt=""/>
                            </i>
                            Мы гарантируем полную анонимность лечения. Вы можете быть уверены, что не будете скомпрометированы.
                        </p>
                    </div>
                    <div class="block__box">
                        <h3>Максимальный комфорт</h3>
                        <p>
                            <i>
                                <img src="./wp-content/themes/detox-med/assets/img/icons/hospital1.svg" alt=""/>
                            </i>
                            Наш стационар оснащён современным оборудованием. В палатах есть всё необходимое для комфортного проживания.
                        </p>
                    </div>
                    <div class="block__box">
                        <h3>Индивидуальный план лечения</h3>
                        <p>
                            <i>
                                <img src="./wp-content/themes/detox-med/assets/img/icons/list1.svg" alt="" />
                            </i>
                            Наши специалисты подберают наиболее эффективные методы восстановительной терапии под каждого пациента.
                        </p>
                    </div>
                </div>
            </div>
        `;

        div.innerHTML = modal;
        wrap.appendChild(div);
        body.classList.add('no-scroll');
        document.querySelector('.modal').classList.remove('modal--close');
        document.querySelector('.modal').classList.add('modal__show');
    }
    //
    function modalzacaz(formID, modalTitle, service, price) {
        if (formID === 'form-price') {
            modal += `
            <div class="modal">
                <div class="modal-wrapper2 modal__body"><span class="modal__btn-close modal__close" data-dismiss="modal" title="Закрыть">×</span>
                    <h2>${modalTitle}</h2>
                    
                    <form class="modal-form form-price" id="${formID}" method="post" action="#">
                        <p><span>Услуга: </span>${service}</p>
                        <p><span>Цена: </span>${price}</p>
                        <input class="_req type="text" name="user-name" placeholder="Имя покупателя" required="required">
                        <textarea class="_req name="user-message" placeholder="Комментарий" required="required"></textarea>
                        <button class= "btn-green"> Заказать</button>
                        <div class="form__policy">
                            <input class="_req" id="modal__chec2" type="checkbox" required="required" checked="">
                            <label for="modal__chec2"> Вы соглашаетесь с 
                                <a target="_blank" href="#!">условиями обработки персональных данных</a>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            `;
        }
        div.innerHTML = modal;
        wrap.appendChild(div);
        body.classList.add('no-scroll');
        document.querySelector('.modal').classList.remove('modal--close');
        document.querySelector('.modal').classList.add('modal__show');
    }
    //
    window.addEventListener('click', (e) => {
        if (document.querySelector('.modal')) {

            if (e.target.closest('.modal__body') && !e.target.closest('.modal__close')) {
                e.stopPropagation();
            } else if (e.target.closest('.current-modal')) {
                document.querySelector('.modal').classList.add('modal--close');
                document.querySelector('.modal').classList.remove('modal__show');
                setTimeout(() => {
                    modalHide();
                }, 400);
            }
        }

        if (e.target.closest('.btn-send')) {
            e.preventDefault();

            if (document.querySelector('.modal')) {
                document.querySelector('.modal').classList.add('modal--close');
                document.querySelector('.modal').classList.remove('modal__show');
                setTimeout(() => {
                    modalHide();
                }, 400);
                setTimeout(() => {
                    modalThanks(options[3].modal_call_title, options[3].modal_call_subtitle);
                }, 1000);
            }
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            if (document.querySelector('.modal--thanks')) {
                setTimeout(() => {
                    modalThanksClose();
                }, 400);
            }

            if (document.querySelector('.modal')) {
                setTimeout(() => {
                    modalHide();
                }, 400);
            }
        }
    });
    // modalThanks();
})();

