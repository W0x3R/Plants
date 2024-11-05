import { checkBlurForOneButtonActive } from "./checkBlurForOneButtonActive"

export const serviceCards = document.querySelectorAll(".service__cards-figure")

export const blurCardsForOneActiveButton = () => {
	serviceCards.forEach((card, i) => {
		;["gardeners", "lawn", "planting"].forEach((valueName) => {
			if (checkBlurForOneButtonActive(valueName, i)) {
				card.classList.add("service__cards-figure_blur")
			}
		})
	})
}
