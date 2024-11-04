import { setStateBurger } from "../burger/setState"
import { actionsContactsDetailsOnClick } from "../contactsDropdown/actionsContactsDetailsOnClick"

export const clickEvents = {
	".header": (e) => setStateBurger(e),
	".contacts__details": (e) => actionsContactsDetailsOnClick(e)
}
