(function () {
	const popup = document.querySelector('.popup#popup-book')
	const form = popup.querySelector('form')

	const buttons = document.querySelectorAll('button[data-id="popup-book"]')
	
	for (let elem of buttons) {
		elem.addEventListener('click', (event) => {
			
			const item = event.target.closest('.item');
			const date = item.querySelector('#date').innerHTML
			const month = item.querySelector('#month').innerHTML
			const time = item.querySelector('#time').innerHTML
			const place = item.querySelector('#place').innerHTML
			const price = item.querySelector('#price').innerHTML

			popup.querySelector('#date').innerHTML = date
			popup.querySelector('#month').innerHTML = month
			popup.querySelector('#time').innerHTML = time
			form.elements.date.value = date
			form.elements.month.value = month
			form.elements.place.value = place
			form.elements.price.value = price
			form.elements.time.value = time
		})
	}
}())