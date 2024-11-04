import { contactDetailsSummary } from "./selectCity"

export const setSummaryText = (value) =>
	(contactDetailsSummary.textContent = value)

export const setSummaryTextOnClick = (e) => setSummaryText(e.target.textContent)
