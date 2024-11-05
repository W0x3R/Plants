import { blurCardsForOneActiveButton } from "./combinations/oneActiveButton/blurCardsForOneActiveButton"
import { blurCardsForTwoActiveButtons } from "./combinations/twoActiveButton/blurCardsForTwoActiveButtons"
import { activeElements, findActiveButtons } from "./findActiveButtons"
import { resetButtons } from "./resetButtons"
import { resetCards } from "./resetCards"
import { setDisabledButton } from "./setDisabledButton"
import { toggleActiveButtonClass } from "./toggleActiveButtonClass"

let previousActiveCount = 0

export const actionsServiceButtonsOnClick = (e) => {
	let target = e.target
	toggleActiveButtonClass(target)
	findActiveButtons()

	if (previousActiveCount === 2 && activeElements.length === 1) {
		resetButtons()
	}

	if (activeElements.length === 0) {
		resetCards()
	} else if (activeElements.length === 1) {
		blurCardsForOneActiveButton()
	} else if (activeElements.length === 2) {
		setDisabledButton()
		blurCardsForTwoActiveButtons()
	}
	previousActiveCount = activeElements.length
}
