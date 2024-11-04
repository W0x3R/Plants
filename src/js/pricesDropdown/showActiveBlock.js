import { activeElements } from "./findActiveElement"

export const showActiveBlock = (e) => {
	const [activeButton, activeSvg] = activeElements()
	const target = e.target
	const closestDiv = target.closest("div")
	const closestSvg = Array.from(closestDiv.children).find(
		(e) => e.tagName === "svg"
	)

	if (activeButton && activeSvg) {
		activeButton.classList.remove("tariff__buttons-btn_active")
		activeSvg.classList.remove("tariff__buttons-svg_active")
	}
	if (activeButton !== closestDiv && activeSvg !== closestSvg) {
		closestDiv.classList.add("tariff__buttons-btn_active")
		closestSvg.classList.add("tariff__buttons-svg_active")
	}
}
