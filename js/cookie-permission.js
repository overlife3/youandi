const parent = document.querySelector('.cookie-permission')
const closeBtn = document.querySelector('.cookie-permission__close')
const permissionBtn = document.querySelector('.cookie-permission__btn')

const arr = [closeBtn, permissionBtn]

arr.forEach(btn => {
	btn.addEventListener('click', () => {
		parent.style.display = 'none'
	})
});