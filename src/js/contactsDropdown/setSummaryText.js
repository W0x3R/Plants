import { contactDetailsSummary } from "./selectCity"

const contactDetailsSummaryText = contactDetailsSummary.querySelector("span")

export const setSummaryText = (value) =>
	(contactDetailsSummaryText.textContent = value)

export const setSummaryTextOnClick = (e) => setSummaryText(e.target.textContent)
