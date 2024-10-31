import { manageStateBurger } from "./manageState"

export const setStateBurger = (e) => {
	const target = e.target
	if (target.closest(".burger")) {
		manageStateBurger("toggle")
	} else if (target.tagName === "LI" || target.tagName === "A") {
		manageStateBurger("remove")
	}
}
