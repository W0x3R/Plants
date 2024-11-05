export const toggleActiveButtonClass = (target) => {
	if (target.tagName === "BUTTON") {
		target.classList.toggle("btn_active")
	}
}
