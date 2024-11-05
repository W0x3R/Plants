import { activeElements } from "./findActiveButtons"
import { serviceButtons } from "./resetButtons"

export const serviceButtonsArray = Array.from(serviceButtons)
let searchDisabledButton

export const setDisabledButton = () => {
	searchDisabledButton = serviceButtonsArray.find(
		(e) => !activeElements.includes(e)
	)
	searchDisabledButton.classList.add("btn_disabled")
	searchDisabledButton.setAttribute("disabled", true)
}
