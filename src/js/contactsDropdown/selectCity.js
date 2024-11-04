import { contactsDetails, popUp } from "./actionsContactsDetailsOpen"

export const contactDetailsSummary = document.querySelector(
	".contacts__details-summary"
)

export const selectCityActions = () => {
	contactDetailsSummary.classList.add("contacts__details-summary_active")
	contactsDetails.open = false
	popUp.classList.add("contacts__popUp_active")
}
