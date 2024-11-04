import {
	actionsContactsDetailsOpen,
	contactsDetails
} from "./contactsDropdown/actionsContactsDetailsOpen"
import { selectCityActions } from "./contactsDropdown/selectCity"
import { setPopupInfo } from "./contactsDropdown/setPopupInfo"
import {
	setSummaryText,
	setSummaryTextOnClick
} from "./contactsDropdown/setSummaryText"

const contactsDetailsWrapper = document.querySelector(
	".contacts__details-wrapper"
)

contactsDetails.addEventListener("click", function (e) {
	contactsDetailsWrapper.classList.add("contacts__details-wrapper_active")
	actionsContactsDetailsOpen()

	if (e.target.classList.contains("contacts__details-inner-summary")) {
		setSummaryText(e.target.textContent)
		selectCityActions()
		setSummaryTextOnClick(e)
		setPopupInfo(e)
	}
})
