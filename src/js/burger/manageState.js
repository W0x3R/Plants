const burger = document.querySelector(".burger")
const burgerLine = document.querySelectorAll(".burger__line")
const navList = document.querySelector(".nav__list")

export const manageStateBurger = (value) => {
	document.body.classList[value]("body_no-scroll")
	burger.classList[value]("burger_active")
	burgerLine.forEach((e) => e.classList[value]("burger__line_active"))
	navList.classList[value]("nav__list_active")
}
