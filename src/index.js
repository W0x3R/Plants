import "./style.scss"
import { callClickEvents } from "./js/eventsHandlers/callClickEvents.js"
import { clickEvents } from "./js/eventsHandlers/clickEvents.js"
import { setYearFooter } from "./js/setYearFooter.js"

window.addEventListener("click", (e) => callClickEvents(e, clickEvents))

setYearFooter()
