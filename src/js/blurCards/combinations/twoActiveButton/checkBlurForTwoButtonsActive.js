import { activeElements } from "../../findActiveButtons"
import { twoBtnActiveCombo } from "./twoButtonsActiveCombinations"

export const checkBlurForTwoButtonsActive = (
	firstValue,
	secondValue,
	valueName,
	index
) =>
	activeElements[0].dataset.value === firstValue &&
	activeElements[1].dataset.value === secondValue &&
	twoBtnActiveCombo[valueName].includes(index)
