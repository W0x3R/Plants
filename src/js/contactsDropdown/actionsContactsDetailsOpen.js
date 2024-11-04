import { contactDetailsSummary } from "./selectCity"
import { setSummaryText } from "./setSummaryText"

export const popUp = document.querySelector(".contacts__popUp")
export const contactsDetails = document.querySelector(".contacts__details")

export const actionsContactsDetailsOpen = () => {
	if (!contactsDetails.open) {
		popUp.classList.remove("contacts__popUp_active")
		contactDetailsSummary.classList.remove("contacts__details-summary_active")
		setSummaryText("City")
	}
}
