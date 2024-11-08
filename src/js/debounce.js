export const debounce = (fn, limit) => {
	let lastCall = 0
	return function () {
		let now = Date.now()
		if (now - lastCall >= limit) {
			lastCall = now
			fn()
		}
	}
}
