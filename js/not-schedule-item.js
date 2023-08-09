const groupListAll = document.querySelectorAll('.group__list')

for (let groupList of groupListAll) {
	const countItem = groupList.querySelectorAll('.item').length
	if (countItem === 0) {
		groupList.innerHTML = `
			<div class="not-item">
				<svg class="icon-cross" viewBox="0 0 81 81" f xmlns="http://www.w3.org/2000/svg">
					<g clip-path="url(#clip0_36_1607)">
						<path d="M0 69.4286L11.5714 81L40.5 52.0714L69.4286 81L81 69.4286L52.0714 40.5L81 11.5714L69.4286 0L40.5 28.9286L11.5714 0L0 11.5714L28.9286 40.5L0 69.4286Z" fill="#FF4848"/>
					</g>
				</svg>
				<p class="text-red">Свиданий  пока нет</p>
			</div>
		`
		console.log(1)
	}
	
}