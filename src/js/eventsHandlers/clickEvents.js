import { actionsServiceButtonsOnClick } from "../blurCards/actionsOnClickServiceButtons"
import { setStateBurger } from "../burger/setState"
import { actionsContactsDetailsOnClick } from "../contactsDropdown/actionsContactsDetailsOnClick"
import { showActiveBlock } from "../pricesDropdown/showActiveBlock"

export const clickEvents = {
	".header": (e) => setStateBurger(e),
	".contacts__details": (e) => actionsContactsDetailsOnClick(e),
	".tariff__buttons": (e) => {
		if (
			e.target.closest(".tariff__buttons-btn") &&
			!e.target.classList.contains("tariff__buttons-order")
		) {
			showActiveBlock(e)
		}
	},
	".service__control-buttons": (e) => actionsServiceButtonsOnClick(e)
}
