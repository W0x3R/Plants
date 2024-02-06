const tariffButtonsWrapper = document.querySelector('.tariff__buttons')
const tariffButtons = document.querySelectorAll('.tariff__buttons-btn')
const tariffButtonsSvg = document.querySelectorAll('.tariff__buttons-svg')
const dataSetArr = ['btn-one', 'btn-two', 'btn-three'];

tariffButtonsWrapper.addEventListener('click', function (event) {
	const target = event.target
	const closestDiv = target.closest('div');
	const closestSvg = Array.from(closestDiv.children).find(e => e.tagName === 'svg')
	const activeButtons = Array.from(tariffButtons).filter(e => e !== closestDiv);
	const activeIcons = Array.from(tariffButtonsSvg).filter(e => e !== closestSvg);

	function showActiveBlock() {
		closestDiv.classList.toggle('tariff__buttons-btn_active')
		closestSvg.classList.toggle('tariff__buttons-svg_active')
		activeButtons.forEach(e => e.classList.remove('tariff__buttons-btn_active'))
		activeIcons.forEach(e => e.classList.remove('tariff__buttons-svg_active'))
	}

	if (dataSetArr.includes(target.dataset.value)) {
		showActiveBlock()
	}
})