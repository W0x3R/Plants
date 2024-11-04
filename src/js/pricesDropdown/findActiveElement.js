const tariffButtons = document.querySelectorAll(".tariff__buttons-btn")
const tariffButtonsSvg = document.querySelectorAll(".tariff__buttons-svg")

export const findActiveElement = (selector, className) =>
	Array.from(selector).find((e) => e.classList.contains(className))

export const activeElements = () => {
	const activeButton = findActiveElement(
		tariffButtons,
		"tariff__buttons-btn_active"
	)
	const activeSvg = findActiveElement(
		tariffButtonsSvg,
		"tariff__buttons-svg_active"
	)
	return [activeButton, activeSvg]
}
