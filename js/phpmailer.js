"use strict"

document.addEventListener('DOMContentLoaded', function () { //это событие срабатывает когда документ полностью загрузится

    const bookForms = document.querySelectorAll('.form-book')
    const orderForms = document.querySelectorAll('.form-order')



		toIterate(bookForms)
		toIterate(orderForms)

		function toIterate(forms) {
			for (let form of forms) {
				send(form)
			}
		}


    function send(form) {
        const filePhp = form.getAttribute('data-action')
				const sendingForm = document.querySelector('._sending-form')

        form.addEventListener('submit', formSend); // выполнит функцию formsend после отпрвки формы
    
        async function formSend(e) {
            e.preventDefault();
    
            let [error, errorPhone] = formValidate(form); //буду считать количество ошибок  
            
            let formData = new FormData(form);
    
            if (error === 0 && errorPhone === 0) {
							sendingForm.classList.add('_sending')
                let response = await fetch(filePhp, {
                    method: 'POST',
                    body: formData
                })
                if (response.ok) {
                    let result = await response.json()
                    alert(result.message)
                    //очищаю меню(ниже)
                    form.reset();
                    sendingForm.classList.remove('_sending')
                } else {
                    alert('Ошибка')
                    sendingForm.classList.remove('_sending')
                }
            } else {
							if (errorPhone > 0 && error === 0) {
								alert('Введите номер телефона правильно')
							}	else {
								alert('Заполните поля')
							}
                
            }
        }
    }
    

    function formValidate(form) {
				let errorPhone = 0;
        let error = 0;
        let formReq = form.querySelectorAll('._req')
        
        // _req – служебный класс сокращенно от "required"  означает обязательное поле
        for (let input of formReq) {
            formRemoveError(input)
            
            if(input.classList.contains('_phone')) {
                if (phoneTest(input)) {
                    formAddError(input)
										if (input.value !== '') {
											errorPhone++;
										} else {
											error++;
										}
                }
            } else if (input.value === '') {
                    formAddError(input);
                    error++;
           	} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
										formAddError(input)
										error++;
						}
            
        }
        return [error, errorPhone]
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error')
        input.classList.add('_error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error')
        input.classList.remove('_error')
    }

		function phoneTest(input) {
			return !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
		}

	})