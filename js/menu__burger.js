;(function () {
    const menuBurger = document.querySelector('.menu') 
		const a = menuBurger.querySelectorAll('a') 
    const btnOpen = document.querySelector('.header__menu-burger')
    const btnClose = document.querySelector('.menu__header .menu__close')
		
		const btnToClose = () => {
			menuBurger.classList.remove('show')
			menuBurger.style.background = 'rgba(0,0,0,0)';
		}

    btnOpen.addEventListener('click', () => {
        menuBurger.classList.add('show')
				setTimeout(() => {
					menuBurger.style.background = 'rgba(0,0,0,.5)';
				}, 300)
    })

    btnClose.addEventListener('click', btnToClose)

		a.forEach((elem) => {
			elem.addEventListener('click', btnToClose)
		})

}());