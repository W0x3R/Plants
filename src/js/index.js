const body = document.body
const header = document.querySelector('.header')
const serviceButtonsWrapper = document.querySelector('.service__control-buttons')
const serviceCards = document.querySelectorAll('.service__cards-figure')
const serviceButtons = document.querySelectorAll('.service__control-btn')
const serviceButtonsArray = Array.from(serviceButtons)
const burger = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('.burger__line')
const navList = document.querySelector('.nav__list')
let activeElements
let searchDisabledButton

const tariffButtons = document.querySelector('.tariff__buttons')
const tariffButton = document.querySelectorAll('.tariff__buttons-btn')
const tariffButtonsSvg = document.querySelectorAll('.tariff__buttons-svg')

function manageStateBurger(value) {
	body.classList[value]('body_active')
	burger.classList[value]('burger_active')
	burgerLine.forEach(e => e.classList[value]('burger__line_active'))
	navList.classList[value]('nav__list_active')
}

header.addEventListener('click', function (e) {
	if (e.target.classList.contains('burger') || e.target.classList.contains('burger__line')) {
		manageStateBurger('toggle')
	}
	if (e.target.tagName === 'LI' || e.target.tagName === 'A') {
		manageStateBurger('remove')
	}
})

const oneBtnActiveCombo = {
	'gardeners': [0, 4],
	'lawn': [2],
	'planting': [1, 3, 5]
}

const twoBtnActiveCombo = {
	'gl': [1, 3, 5],
	'gp': [2],
	'lp': [0, 4]
}

function resetServiceCards() {
	serviceCards.forEach((e) => {
		e.classList.remove('service__cards-figure_active')
	})
}

function resetDisabledButtons() {
	serviceButtons.forEach(e => {
		e.classList.remove('btn_disabled')
		e.removeAttribute('disabled');
	})
}

function checkOneBtnActiveCombination(valueName, loopVar) {
	return activeElements[0].dataset.value === valueName && !oneBtnActiveCombo[valueName].includes(loopVar)
}

function checkTwoBtnActiveCombination(firstValue, secondValue, valueName, loopVar) {
	return activeElements[0].dataset.value === firstValue && activeElements[1].dataset.value === secondValue && twoBtnActiveCombo[valueName].includes(loopVar)
}

function activeServiceCardsOneBtnActive() {
	serviceCards.forEach((e, i) => {
		if (checkOneBtnActiveCombination('gardeners', i)) {
			e.classList.add('service__cards-figure_active')
		} else if (checkOneBtnActiveCombination('lawn', i)) {
			e.classList.add('service__cards-figure_active')
		} else if (checkOneBtnActiveCombination('planting', i)) {
			e.classList.add('service__cards-figure_active')
		}
	})
}

function activeServiceCardsTwoBtnActive() {
	serviceCards.forEach((e, i) => {
		e.classList.remove('service__cards-figure_active')
		if (checkTwoBtnActiveCombination('gardeners', 'lawn', 'gl', i)) {
			e.classList.add('service__cards-figure_active')
		} else if (checkTwoBtnActiveCombination('gardeners', 'planting', 'gp', i)) {
			e.classList.add('service__cards-figure_active')
		} else if (checkTwoBtnActiveCombination('lawn', 'planting', 'lp', i)) {
			e.classList.add('service__cards-figure_active')
		}
	})
}

function addDisabledButton() {
	searchDisabledButton = serviceButtonsArray.find(e => !activeElements.includes(e))
	searchDisabledButton.classList.add('btn_disabled')
	searchDisabledButton.setAttribute('disabled', true);
}

serviceButtonsWrapper.addEventListener('click', function (e) {
	let target = e.target

	target.tagName === 'BUTTON' ? target.classList.toggle('btn_active') : ''

	activeElements = serviceButtonsArray.filter(e => e.classList.contains('btn_active'))

	if (activeElements.length === 0) {
		resetServiceCards()
	} else if (activeElements.length === 1) {
		resetDisabledButtons()
		activeServiceCardsOneBtnActive()
	} else if (activeElements.length === 2) {
		addDisabledButton()
		activeServiceCardsTwoBtnActive()
	}
})


const dataSetArr = ['btn-one', 'btn-two', 'btn-three'];

tariffButtons.addEventListener('click', function (event) {
	const target = event.target
	const closestDiv = target.closest('div');
	const closestSvg = Array.from(closestDiv.children).find(e => e.tagName === 'svg')
	const activeButtons = Array.from(tariffButton).filter(e => e !== closestDiv);
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