import { serviceCards } from "./combinations/oneActiveButton/blurCardsForOneActiveButton"

export const resetCards = () =>
	serviceCards.forEach((e) => e.classList.remove("service__cards-figure_blur"))
