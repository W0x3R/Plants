import { activeElements } from "../../findActiveButtons"
import { oneButtonActiveCombo } from "./oneButtonActiveCombinations"

export const checkBlurForOneButtonActive = (valueName, index) =>
	activeElements[0].dataset.value === valueName &&
	!oneButtonActiveCombo[valueName].includes(index)
