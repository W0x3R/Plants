import "./style.scss"
import * as blur from "./js/service-blur.js"
import * as pricesDropdown from "./js/prices-dropdown.js"
import * as contactsDropdown from "./js/contacts-dropdown.js"
import * as setYear from "./js/footer-setYear"
import { callClickEvents } from "./js/eventsHandlers/callClickEvents.js"
import { clickEvents } from "./js/eventsHandlers/clickEvents.js"

window.addEventListener("click", (e) => {
	callClickEvents(e, clickEvents)
})
