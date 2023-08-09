import {scheduleData} from './schedule-data.js'

const groupListAll = document.querySelectorAll('.group__list')

//const monthArr = ['январь','февраль','март','апрель','май','июнь','июль','август','сентябрь','октябрь','ноябрь','декабрь']

function searchGroup(id) {
	for (let elem of groupListAll) {
		if (elem.getAttribute('data-group-id') == id)
			return elem	
	}
}

function addZero(num) {
	if (num < 10) 
		return '0' + num;
	else 
		return num
}

let countGroup = 0;

for (let i = 1; i < 4; i++) {
	const sortArrScheduleFromGroup = filterGroup(getArrGroup(scheduleData,i)) 
	
	for (let obj of sortArrScheduleFromGroup) {
		++countGroup
		const parent = searchGroup(obj.group)
		const item = document.createElement('div')
		item.classList.add('item')
		item.innerHTML = `
		<div class="item__date">
			<span id="date" class="red-text">${addZero(obj.date)}</span>
			<span id="month">${obj.month}</span>
			<span class="line"></span>
			<span id="time" class="red-text">${obj.time}</span>
		</div>

		<svg class="item__illustration">
			<use xlink:href="img/schedule/js-illustration/schedule-sprite.svg#${countGroup}"></use>
		</svg>

		<div id="place" class="item__place">
			${obj.place}
		</div>

		<div id="price" class="item__price">
			Стоимость: <span class="red-text">${obj.price} руб.</span>
		</div>

		<button class="red-btn js-popup" data-id="popup-book">Забронировать</button>
		`

		parent.append(item)
	}
}

function compareNumeric(a, b) {
	const num_1 = a.date
	const num_2 = b.date
  if (num_1 > num_2) return 1;
  if (num_1 == num_2) return 0;
  if (num_1 < num_2) return -1;
}

function filterGroup(arr) {
	return arr.sort(compareNumeric)
}

function getArrGroup(arr, id) {
	const res = []
	for (let obj of arr) {
		if (obj.group == id) 
			res.push(obj)
	}
	return res
}


