import { cities } from "./cities"

const popUpValues = document.querySelectorAll(".contacts__popUp-value p")
const popUpButtonLink = document.querySelector(".contacts__popUp-link")

export const setPopupInfo = (e) => {
	const popUpValuesArray = Array.from(popUpValues)
	const datasetValue = e.target.dataset.value
	popUpValuesArray.map((e, i) => {
		const currentValue = cities[datasetValue][i]
		e.textContent = currentValue
		if (currentValue.startsWith("+")) {
			popUpButtonLink.setAttribute("href", `tel:${currentValue}`)
		}
	})
}
