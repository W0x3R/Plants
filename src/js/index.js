const body = document.body
const header = document.querySelector('.header')
const burger = document.querySelector('.burger');
const burgerLine = document.querySelectorAll('.burger__line')
const navList = document.querySelector('.nav__list')

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