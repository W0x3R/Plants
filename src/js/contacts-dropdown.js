const city1 = [
	["Canandaigua, NY", "+1 585 393 0001", "151 Charlotte Street"],
	["New York City", "+1 212 456 0002", "9 East 91st Street"],
	["Yonkers, NY", "+1 914 678 0003", "511 Warburton Ave"],
	["Sherrill, NY", "+1 315 908 0004", "14 WEST Noyes BLVD"]
]

const contactsDetailsWrapper = document.querySelector(
	".contacts__details-wrapper"
)
const contactsDetails = document.querySelector(".contacts__details")
const contactDetailsSummary = document.querySelector(
	".contacts__details-summary"
)
const popUp = document.querySelector(".contacts__popUp")
const popUpValues = document.querySelectorAll(".contacts__popUp-value p")
const popUpButtonLink = document.querySelector(".contacts__popUp-link")

function choiceValue() {
	contactDetailsSummary.classList.add("contacts__details-summary_active")
	contactsDetails.open = false
	popUp.classList.add("contacts__popUp_active")
}

const setSummaryText = (value) => (contactDetailsSummary.textContent = value)
const checkClickOnSummary = (e) => setSummaryText(e.target.textContent)

const actionsContactsDetailsOpen = () => {
	if (!contactsDetails.open) {
		popUp.classList.remove("contacts__popUp_active")
		contactDetailsSummary.classList.remove("contacts__details-summary_active")
		setSummaryText("City")
	}
}

const setPopupInfo = (e) => {
	const popUpValuesArray = Array.from(popUpValues)
	const datasetValue = e.target.dataset.value
	popUpValuesArray.map((e, i) => {
		const currentValue = city1[datasetValue][i]
		e.textContent = currentValue
		if (currentValue.startsWith("+")) {
			popUpButtonLink.setAttribute("href", `tel:${currentValue}`)
		}
	})
}

contactsDetails.addEventListener("click", function (e) {
	contactsDetailsWrapper.classList.add("contacts__details-wrapper_active")
	actionsContactsDetailsOpen()

	if (e.target.classList.contains("contacts__details-inner-summary")) {
		setSummaryText(e.target.textContent)
		choiceValue()
		checkClickOnSummary(e)
		setPopupInfo(e)
	}
})
