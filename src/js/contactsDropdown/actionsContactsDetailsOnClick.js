import { actionsContactsDetailsOpen } from "./actionsContactsDetailsOpen"
import { selectCityActions } from "./selectCity"
import { setPopupInfo } from "./setPopupInfo"
import { setSummaryText, setSummaryTextOnClick } from "./setSummaryText"

const contactsDetailsWrapper = document.querySelector(
	".contacts__details-wrapper"
)

export const actionsContactsDetailsOnClick = (e) => {
	contactsDetailsWrapper.classList.add("contacts__details-wrapper_active")
	actionsContactsDetailsOpen()

	if (e.target.classList.contains("contacts__details-inner-summary")) {
		setSummaryText(e.target.textContent)
		selectCityActions()
		setSummaryTextOnClick(e)
		setPopupInfo(e)
	}
}
