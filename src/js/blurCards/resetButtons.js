export const serviceButtons = document.querySelectorAll(".service__control-btn")

export const resetButtons = () =>
	serviceButtons.forEach((e) => {
		e.classList.remove("btn_disabled")
		e.removeAttribute("disabled")
	})
