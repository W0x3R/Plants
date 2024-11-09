export const throttle = (fn, limit) => {
	let timerId
	return function () {
		clearTimeout(timerId)
		timerId = setTimeout(() => {
			fn()
		}, limit)
	}
}
