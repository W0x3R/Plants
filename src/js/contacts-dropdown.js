const city = {
	Canandaigua: {
		city: 'Canandaigua, NY',
		phone: '+1 585 393 0001',
		adress: '151 Charlotte Street'
	},
	NewYork: {
		city: 'New York City',
		phone: '+1 212 456 0002',
		adress: '9 East 91st Street'
	},
	Yonkers: {
		city: 'Yonkers, NY',
		phone: '+1 914 678 0003',
		adress: '511 Warburton Ave'
	},
	Sherill: {
		city: 'Sherrill, NY',
		phone: '+1 315 908 0004',
		adress: '14 WEST Noyes BLVD'
	}
}
const contactsDetailsWrapper = document.querySelector('.contacts__details-wrapper')
const contactsDetails = document.querySelector('.contacts__details')
const contactDetailsSummary = document.querySelector('.contacts__details-summary')
const contactDetailsSummaryText = contactDetailsSummary.querySelector('span')
const popUp = document.querySelector('.contacts__popUp')
const popUpValues = document.querySelectorAll('.contacts__popUp-value p')
const popUpButtonLink = document.querySelector('.contacts__popUp-link')

function choiceValue() {
	contactDetailsSummary.classList.add('contacts__details-summary_active')
	contactsDetails.open = false
	popUp.classList.add('contacts__popUp_active')
}


contactsDetails.addEventListener('click', function (e) {
	const datasetValue = e.target.dataset.value;
	contactsDetailsWrapper.classList.add('contacts__details-wrapper_active')

	if (e.target.tagName === 'SUMMARY') {
		contactDetailsSummaryText.textContent = e.target.textContent
	}

	if (Object.keys(city).includes(datasetValue)) {
		choiceValue()

		for (let i = 0; i < popUpValues.length; i++) {
			popUpValues[i].textContent = Object.values(city[datasetValue])[i]

			if (Object.values(city[datasetValue])[i].startsWith('+')) {
				popUpButtonLink.setAttribute('href', `tel:${Object.values(city[datasetValue])[i]}`)
			}
		}
	}
})

