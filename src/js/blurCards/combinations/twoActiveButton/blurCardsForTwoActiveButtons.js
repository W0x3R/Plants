import { serviceCards } from "../oneActiveButton/blurCardsForOneActiveButton"
import { checkBlurForTwoButtonsActive } from "./checkBlurForTwoButtonsActive"

export const blurCardsForTwoActiveButtons = () => {
	serviceCards.forEach((card) =>
		card.classList.remove("service__cards-figure_blur")
	)
	serviceCards.forEach((card, i) => {
		if (
			checkBlurForTwoButtonsActive("gardeners", "lawn", "gardeners-lawn", i) ||
			checkBlurForTwoButtonsActive(
				"gardeners",
				"planting",
				"gardeners-planting",
				i
			) ||
			checkBlurForTwoButtonsActive("lawn", "planting", "lawn-planting", i)
		) {
			card.classList.add("service__cards-figure_blur")
		}
	})
}
