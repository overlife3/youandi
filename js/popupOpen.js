// (function () {
//    const btn = document.querySelector('.js-order-popup')
//     const popupOrder = document.querySelector('.popup-order')
//    btn.addEventListener('click', () => {
//         popupOrder.classList.add('active')
//    })
// }())
(function () {
    const popupLinks = document.querySelectorAll(".js-popup"); //c
    // нашли все ссылки которые открывают попапы
    const body = document.querySelector("body");
		const containers = document.querySelectorAll('.container')
    // нашли body чтобы блокировать скролл
    const lockPadding = document.querySelectorAll(".lock__padding");
    // элементы с абсолютным или фиксированнном позиционированием
  
    let unlock = true;
    // нужна для того чтбы не было двойных нажатий
  
    const timeout = 800; //c
    // равно значению transition-duration в анимации
  
    for (let popupLink of popupLinks) {
      popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute("data-id");
				console.log(popupName)
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
    // дали всем ссылкам событие для открытия попапов
  
    const popupCloseIcon = document.querySelectorAll(".popup__close");
    for (let el of popupCloseIcon) {
      el.addEventListener("click", function (e) {
        popupClose(el.closest(".popup"));
        e.preventDefault();
      });
    }
  
    function popupOpen(curentPopup) {
      // проверяем существует ли этот элемент и открыт ли второй попап.
      if (curentPopup && unlock) {
        const popupActive = document.querySelector(".popup.open");//c
        if (popupActive) {
          popupClose(popupActive, close);
        } else {
          bodyLock();
        }
        curentPopup.classList.add("open"); //c
        curentPopup.addEventListener("click", function (e) {
          if (!e.target.closest(".popup__body")) { //c
            popupClose(e.target.closest(".popup"));
          }
        });
      }
    }
  
    function bodyLock() {
      const lockPaddingValue =
        window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
      // переменная содержит ширину скролла
      // wrapper - элемент который растянут на всю ширину вьюпорат 
      for (let el of lockPadding) {
        el.style.paddingRight = lockPaddingValue; // ?
      }
      //добавили паддинги всем элементам с классом ...
      body.style.paddingRight = lockPaddingValue;
      body.classList.add("lock");
  
      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
      // Эта задержка нужно чтобы во время действия анимации
      // нельзя было отокрыть другое окноб, а жто приведет к тому что
      // не заблокируется скролл
    }
  
    function popupClose(popupActive, doUnlock = true) {
      // переменная doUnlock говорит что не стоит возвращать скролл,
      // если мы открываем второй попап
      if (unlock) {
        popupActive.classList.remove("open"); //c
        if (doUnlock) {
          bodyUnLock(); //разюлокировка скролла
        }
      }
    }
  
    function bodyUnLock() {
      setTimeout(function () {
        for (let el of lockPadding) {
          el.style.paddingRight = "0px";
        }
  
        body.style.paddingRight = "0px";
        body.classList.remove("lock");
      }, timeout);
  
      unlock = false;
      setTimeout(function () {
        unlock = true;
      }, timeout);
    }
  
    document.addEventListener("keydown", function (e) {
      if (e.which === 27) {
        const popupActive = document.querySelector(".popup.open");
        popupClose(popupActive);
      }
    });
    // закрытие попапа клавишей escape
  })();