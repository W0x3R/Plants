const header = document.querySelector(".header")
const burger = document.querySelector(".burger")
const burgerLine = document.querySelectorAll(".burger__line")
const navList = document.querySelector(".nav__list")

function manageStateBurger(value) {
	document.body.classList[value]("body_no-scroll")
	burger.classList[value]("burger_active")
	burgerLine.forEach((e) => e.classList[value]("burger__line_active"))
	navList.classList[value]("nav__list_active")
}

header.addEventListener("click", function (e) {
	const target = e.target
	if (
		target.classList.contains("burger") ||
		target.classList.contains("burger__line")
	) {
		manageStateBurger("toggle")
	}
	if (target.tagName === "LI" || target.tagName === "A") {
		manageStateBurger("remove")
	}
})
