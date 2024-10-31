const footerDate = document.querySelector(".footer__date")
const getYear = new Date().getFullYear()

export const setYearFooter = () => (footerDate.textContent = getYear)
