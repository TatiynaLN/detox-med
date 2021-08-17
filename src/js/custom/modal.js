; (function () {

    const body = document.getElementsByTagName('body')[0];
    const wrap = document.querySelector('.wrap-feedback');
    const wrapper = document.querySelector('.wrapper');

    let modal = '';
    let div = document.createElement('div');
    div.classList.add('current-modal');

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
            modal_form_id: 'form-price',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_price_btn_s: 'btn-zacaz-s',
            modal_call_title: 'Для заказа заполните форму ниже',
            modal_call_price: 'Введение препарата «Дисульфирам»',
            modal_form_id: 'form-price',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_price_btn_min: 'btn-zacaz-min',
            modal_call_title: 'Для заказа заполните форму ниже',
            modal_call_price: 'Введение препарата «Эспераль-гель»',
            modal_form_id: 'form-price',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_price_btn_long: 'btn-zacaz-long',
            modal_call_title: 'Для заказа заполните форму ниже',
            modal_form_id: 'form-price',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_call_title: 'Ваша заявка отправлена!',
            modal_call_subtitle: 'Наша главная задача - помогать людям! Мы перезвоним вам в течении <em>10 минут</em>!',
            modal_call_class1: 'modal-wrapper',
            modal_call_class2: 'modal-wrapper2'
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
            modalzacaz(options[2].modal_form_id, options[2].modal_call_title, options[2].modal_price, options[2].modal_service, options[1].phone_input_id);
        }

        if (e.target.classList.contains(options[3].modal_price_btn_s)) {
            options[3].modal_service = `${e.target.children[0].textContent}   ${e.target.children[1].textContent}`;
            modalzacaz(options[3].modal_form_id, options[3].modal_call_title, options[3].modal_call_price, options[3].modal_service, options[1].phone_input_id);
        }

        if (e.target.classList.contains(options[4].modal_price_btn_min)) {
            options[4].modal_service = `${e.target.children[0].textContent}   ${e.target.children[1].textContent}`;
            modalzacaz(options[4].modal_form_id, options[4].modal_call_title, options[4].modal_call_price, options[4].modal_service, options[1].phone_input_id);
        }
        if (e.target.classList.contains(options[5].modal_price_btn_long)) {
            options[5].modal_call_price = e.target.children[0].textContent;
            options[5].modal_service = e.target.children[1].textContent;
            modalzacaz(options[5].modal_form_id, options[5].modal_call_title, options[5].modal_call_price, options[5].modal_service, options[1].phone_input_id);
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
                        <button class="btn-red btn-send gorizont">Заказать звонок</button>
                        <div class="form__policy">
                            <input class="_req" id="modal__chec1" type="checkbox" required="required" checked="">
                            <label for="modal__chec1"> Вы соглашаетесь с 
                                <a target="_blank" href="http://detox-med.ru/soglasie-na-obrabotku-personalnyh-dannyh">условиями обработки персональных данных</a>
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
                        <button class= "btn-red btn-send vertical"> Заказать звонок</button>
                        <div class="form__policy">
                            <input class="_req" id="modal__chec2" type="checkbox" required="required" checked="">
                            <label for="modal__chec2"> Вы соглашаетесь с 
                                <a target="_blank" href="http://detox-med.ru/soglasie-na-obrabotku-personalnyh-dannyh">условиями обработки персональных данных</a>
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
        wrapper.classList.add('fon');
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
        wrapper.classList.remove('fon');

    }
    function modalHide2() {
        modal = '';
        wrap.removeChild(div);
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
            modalHide();
        }, 3000);
    }

    function modalThanks(modalTitle, modalSubtitle, modalClass) {
        modal += `
        <div class="modal">
            <div class="${modalClass} modal__body modal-thanks"><span class="modal__btn-close modal__close" data-dismiss="modal" title="Закрыть">×</span>
                <h2>Ваша заявка отправлена!</h2>
                <p>Наша главная задача - помогать людям! Мы перезвоним вам в течение <em>10 минут</em>!</p>
            </div>
        </div>
        `;

        div.innerHTML = modal;
        wrap.appendChild(div);
        body.classList.add('no-scroll');
        document.querySelector('.modal').classList.remove('modal--close');
        document.querySelector('.modal').classList.add('modal-thanks--open');
    }
    //
    function modalzacaz(formID, modalTitle, service, price, phoneInputID) {
        if (formID === 'form-price') {
            modal += `
            <div class="modal">
                <div class="modal-wrapper2 modal__body"><span class="modal__btn-close modal__close" data-dismiss="modal" title="Закрыть">×</span>
                    <h2>${modalTitle}</h2>

                    <form class="modal-form form-price" id="${formID}" method="post" action="#">
                        <p><span>Услуга: </span>${service}</p>
                        <p><span>Цена: </span>${price}</p>
                        <input class="_req phone-input" type="text" name="user-phone" placeholder="+ 7 ___ - __ - __" id="${phoneInputID}" required="required">
                        <input class="_req type="text" name="user-name" placeholder="Имя покупателя" required="required">
                        <textarea class="_req name="user-message" placeholder="Комментарий" required="required"></textarea>
                        <button class= "btn-green btn-send vertical"> Заказать</button>
                        <div class="form__policy">
                            <input class="_req" id="modal__chec2" type="checkbox" required="required" checked="">
                            <label for="modal__chec2"> Вы соглашаетесь с 
                                <a target="_blank" href="http://detox-med.ru/soglasie-na-obrabotku-personalnyh-dannyh">условиями обработки персональных данных</a>
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
        wrapper.classList.add('fon');
        document.querySelector('.modal').classList.remove('modal--close');
        document.querySelector('.modal').classList.add('modal__show');
        inputMask(document.getElementById(phoneInputID));

        document.querySelector('.btn-send').addEventListener('click', () => {
            formSend();
        });
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
                // document.querySelector('.modal').classList.add('modal--clos');
                document.querySelector('.modal').classList.remove('modal__show');
                setTimeout(() => {
                    modalHide2();
                }, 400);
                setTimeout(() => {
                    if (e.target.classList.contains('gorizont')) {
                        modalThanks(options[3].modal_call_title, options[3].modal_call_subtitle, options[6].modal_call_class1);
                    } else if (e.target.classList.contains('vertical')) {
                        modalThanks(options[3].modal_call_title, options[3].modal_call_subtitle, options[6].modal_call_class2);
                    }


                }, 1000);
                setTimeout(() => {
                    document.querySelector('.modal-thanks--open').classList.add('modal--close');
                    document.querySelector('.modal').classList.remove('modal-thanks--open');
                    document.querySelector('.modal').classList.remove('modal-wrapper2');
                    document.querySelector('.modal').classList.remove('modal-wrapper');
                }, 2500);
            }
        }
    });
    // console.log(options[6].modal_call_class2);
    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            if (document.querySelector('.modal-thanks--open')) {
                setTimeout(() => {
                    modalThanksClose();
                    document.querySelector('.modal-thanks--open').classList.add('modal--close');
                    document.querySelector('.modal-thanks--open').classList.remove('modal-thanks--open');
                }, 400);
            }
            if (document.querySelector('.modal')) {
                document.querySelector('.modal').classList.add('modal--close');
                document.querySelector('.modal').classList.remove('modal__show');
                setTimeout(() => {
                    modalHide();
                }, 400);
            }
        }
    });
    // modalThanks();

    ///////////////////////////////
    //  Скрипты для для форм
    ///////////////////////////////

    // телефон заполнить полностью
    let phoneText = false;
    // емайл заполнить полностью
    let emailText = false;

    var h_form_btn = document.querySelectorAll('.btn-send');

    h_form_btn.forEach(function (item) {
        formReadyClick(item);
    });

    function formReadyClick(btn) {

        let form = btn.closest("form");

        form.addEventListener("submit", formSendAsync2, { once: true });

        async function formSendAsync2(e) {

            e.preventDefault(); // запрет на отправку стандартной формы

            formSendAsync(btn);
        }
    }

    async function formSendAsync(btn_child) {

        let form = btn_child.closest("form");

        let error = formValidate(form);

        let formData = new FormData(form);

        //form.preventDefault(); // запрет на отправку стандартной формы

        if (error === 0) {

            form.classList.add('_sending');
            let response = await fetch('/wp-content/themes/detoxmed/lib/ajax-send.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();

                form.reset();
                form.classList.remove('_sending');

                setTimeout(() => {
                    modalThanks(options[3].modal_call_title, options[3].modal_call_subtitle);
                }, 1000);

                return true;

            } else {
                alert("ошибка");
            }

        } else {
            if (phoneText) {
                alert('Введите ещё цифры телефона');
            } else if (emailText) {
                alert('Введите емайл полностью');
            } else {
                alert('заполните поля');
            }
        }
        return false;
    }

    // проверка на ошибки
    function formValidate(form) {
        let error = 0;
        //let formReq = document.querySelectorAll('._req'); // обязательное поле
        let formReq = form.getElementsByClassName('_req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input); // убрать класс проверки

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            else if (input.classList.contains('input__mask')) {
                if (phoneTest(input)) {
                    formAddError(input);
                    error++;
                    phoneText = true;
                }

            }
            else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    // добавляют родители и элементу класс _error
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    // проверка emai
    function emailTest(input) {
        emailText = true;
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    // проверка телефона
    function phoneTest(input) {
        if (input.value.replace(/ +/g, ' ').trim() === "+7" ||
            input.value === '' ||
            input.value.replace(/[\+\(\)\s]/g, "").length < 12
        ) {
            //let hhh = input.value.replace(/[\+\(\)\s]/g,"").length;
            return true;
        }
        return false;
    }


})();
