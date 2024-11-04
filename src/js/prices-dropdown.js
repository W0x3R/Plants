const tariffButtonsWrapper = document.querySelector(".tariff__buttons")
const tariffButtons = document.querySelectorAll(".tariff__buttons-btn")
const tariffButtonsSvg = document.querySelectorAll(".tariff__buttons-svg")

tariffButtonsWrapper.addEventListener("click", function (e) {
	const findActiveElement = (selector, className) =>
		Array.from(selector).find((e) => e.classList.contains(className))

	const activeButton = findActiveElement(
		tariffButtons,
		"tariff__buttons-btn_active"
	)
	const activeSvg = findActiveElement(
		tariffButtonsSvg,
		"tariff__buttons-svg_active"
	)

	const target = e.target
	const closestDiv = target.closest("div")
	const closestSvg = Array.from(closestDiv.children).find(
		(e) => e.tagName === "svg"
	)

	function showActiveBlock() {
		if (activeButton && activeSvg) {
			activeButton.classList.remove("tariff__buttons-btn_active")
			activeSvg.classList.remove("tariff__buttons-svg_active")
		}
		if (activeButton !== closestDiv && activeSvg !== closestSvg) {
			closestDiv.classList.add("tariff__buttons-btn_active")
			closestSvg.classList.add("tariff__buttons-svg_active")
		}
	}
	if (
		e.target.closest(".tariff__buttons-btn") &&
		!e.target.classList.contains("tariff__buttons-order")
	) {
		showActiveBlock()
	}
})
