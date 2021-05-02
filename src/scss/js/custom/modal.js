;(function () {

    const body = document.getElementsByTagName('body')[0];
    // const html = body.parentNode;
    const wrap = document.querySelector('.wrap-feedback');

    let modal = '';
    let div = document.createElement('div');
        div.classList.add('current-modal');

    let options = [
        {
            modal_call_btn: 'btn-call',
            modal_call_title: 'Перезвонить вам?',
            modal_call_subtitle: 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время',
            modal_form_id: 'form-call',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_consult_btn: 'btn-consult',
            modal_call_title: 'Запись на консультацию',
            modal_call_subtitle: 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время',
            modal_form_id: 'form-consultation-appointment',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_free_consult_btn: 'btn-free-consult',
            modal_call_title: 'Бесплатная консультация',
            modal_call_subtitle: 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время',
            modal_form_id: 'form-free-consultation',
            phone_input_id: 'modal__input-phone'
        },
        {
            modal_call_title: 'Спасибо за заявку!',
            modal_call_subtitle: 'Мы свяжемся с вами в ближайшее время'
        }
    ];

    document.addEventListener('click', (e) => {

        if(e.target.classList.contains(options[0].modal_call_btn)) {
            modalShow(options[0].modal_form_id, options[0].modal_call_title, options[0].modal_call_subtitle, options[0].phone_input_id);
            formReadyClick(null, document.querySelector('.form-modal-open'));
        }

        if(e.target.classList.contains(options[1].modal_consult_btn)) {
            modalShow(options[1].modal_form_id, options[1].modal_call_title, options[1].modal_call_subtitle, options[1].phone_input_id);
            formReadyClick(null, document.querySelector('.form-modal-open'));
        }

        if(e.target.classList.contains(options[2].modal_free_consult_btn)) {
            modalShow(options[2].modal_form_id, options[2].modal_call_title, options[2].modal_call_subtitle, options[2].phone_input_id);
        }

    });

    function modalShow(formID, modalTitle, modalSubtitle, phoneInputID) {

        if (formID === 'form-call') {
            modal += `
                <div class="overlay">
                    <div class="modal">
                        <div class="modal__close"></div>
                        <form class="form-call form-modal-open" id="${ formID }" method="post" action="#">
                        
                            <input type="hidden" name="page_wp" value="${ window.wp_data.the_title }">
                            <input type="hidden" name="name_form_wp"  value="-">

                            <div class="form__title">${ modalTitle }</div>
                            <div class="form__subtitle">${ modalSubtitle }</div>
                            <input class="form__input-phone _req" type="text" id="${ phoneInputID }" name="user-phone" placeholder="Ваш телефон">
                            <button class="btn btn--blue btn-send" type="submit" id="form-call__submit">Перезвоните мне</button>
                            <div class="form__policy">
                                <input class="form__checkbox" type="checkbox" id="modal__checkbox" checked>
                                <label class="form__policy-text" for="modal__checkbox">Вы соглашаетесь с &#160;<a class="form__policy-link" href="#!" target="_blank">условиями обработки персональных данных</a></label>
                            </div>
                        </form>
                    </div>
                </div>
            `;
        }
        if(formID === 'form-consultation-appointment') {
            modal += `
                <div class="overlay">
                    <div class="modal">
                        <div class="modal__close"></div>
                        <form class="form-call" id="${ formID }" method="post" action="#">

                            <input type="hidden" name="page_wp" value="${ window.wp_data.the_title }">
                            <input type="hidden" name="name_form_wp"  value="-">

                            <div class="form__title form__title--consult">${ modalTitle }</div>
                            <div class="form__subtitle">${ modalSubtitle }</div>
                            <div class="input__wraps">
                                <input class="form__input-name _req" type="text" name="user-name" placeholder="Ваше имя">
                                <input class="form__input-phone _req" type="text" id="${ phoneInputID }" name="user-phone" placeholder="Ваш телефон">
                                <input class="form__input-email _req" type="email" name="user-email" placeholder="Ваша почта">
                            </div>
                            <button class="btn btn--blue btn-send" type="submit" id="form-call__submit">Записаться на консультацию</button>
                            <div class="form__policy">
                                <input class="form__checkbox" type="checkbox" id="modal__checkbox" checked>
                                <label class="form__policy-text" for="modal__checkbox">Вы соглашаетесь с &#160;<a class="form__policy-link" href="#!" target="_blank">условиями обработки персональных данных</a></label>
                            </div>
                        </form>
                    </div>
                </div>
            `;
        }
        if(formID === 'form-free-consultation') {
            modal += `
                <div class="overlay">
                    <div class="modal">
                        <div class="modal__close"></div>
                        <form class="form-call form-modal-open" id="${ formID }" method="post" action="#">

                            <input type="hidden" name="page_wp" value="${ window.wp_data.the_title }">
                            <input type="hidden" name="name_form_wp"  value="-">

                            <div class="form__title form__title--consult">${ modalTitle }</div>
                            <div class="form__subtitle">${ modalSubtitle }</div>
                            <div class="input__wraps">
                                <input class="form__input-name _req" type="text" name="user-name" placeholder="Ваше имя">
                                <input class="form__input-phone _req" type="text" id="${ phoneInputID }" name="user-phone" placeholder="Ваш телефон">
                                <input class="form__input-email _req" type="email" name="user-email" placeholder="Ваша почта">
                            </div>
                            <textarea class="form__input-message" id="modal__message" placeholder="Комментарии"></textarea>
                            <button class="btn btn--blue btn-send" type="submit" id="form-call__submit">Записаться на консультацию</button>
                            <div class="form__policy">
                                <input class="form__checkbox" type="checkbox" id="modal__checkbox" checked>
                                <label class="form__policy-text" for="modal__checkbox">Вы соглашаетесь с &#160;<a class="form__policy-link" href="#!" target="_blank">условиями обработки персональных данных</a></label>
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
        document.querySelector('.modal').classList.add('modal--open');
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
                function(a) {
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
            <div class="overlay">
                <div class="modal">
                    <div class="modal__close"></div>
                    <div class="modal__content">
                        <div class="form__title">${ modalTitle }</div>
                        <div class="form__subtitle">${ modalSubtitle }</div>
                    </div>
                </div>
            </div>
        `;

        div.innerHTML = modal;
        wrap.appendChild(div);
        body.classList.add('no-scroll');
        document.querySelector('.modal').classList.remove('modal--close');
        document.querySelector('.modal').classList.add('modal--open');
    }

    window.addEventListener('click', (e) => {

        if(document.querySelector('.modal')) {

            if (e.target.closest('.modal') && !e.target.closest('.modal__close')) {
                e.stopPropagation();
            } else if (e.target.closest('.overlay')) {
                document.querySelector('.modal').classList.add('modal--close');
                document.querySelector('.modal').classList.remove('modal--open');
                setTimeout(() => {
                    modalHide();
                }, 400);
            }
        }

        if(e.target.closest('.btn-send')) {
            e.preventDefault();

            if(document.querySelector('.modal')) {
                document.querySelector('.modal').classList.add('modal--close');
                document.querySelector('.modal').classList.remove('modal--open');
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
            if(document.querySelector('.modal--thanks')) {
                setTimeout(() => {
                    modalThanksClose();
                }, 400);
            }

            if(document.querySelector('.modal')) {
                setTimeout(() => {
                    modalHide();
                }, 400);
            }
        }
    }); 

})();