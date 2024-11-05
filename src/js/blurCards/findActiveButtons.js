import { serviceButtonsArray } from "./setDisabledButton"

export let activeElements

export const findActiveButtons = () =>
	(activeElements = serviceButtonsArray.filter((e) =>
		e.classList.contains("btn_active")
	))
