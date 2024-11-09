import imageFirst from "../../images/first-card.png"
import imageSecond from "../../images/second-card.png"
import imageThird from "../../images/third-card.png"
import imageFourth from "../../images/fourth-card.png"
import imageFifth from "../../images/fifth-card.png"
import imageSixth from "../../images/sixth-card.png"
import imageFirstSmall from "../../images/first-card-small.png"
import imageSecondSmall from "../../images/second-card-small.png"
import imageThirdSmall from "../../images/third-card-small.png"
import imageFourthSmall from "../../images/fourth-card-small.png"
import imageFifthSmall from "../../images/fifth-card-small.png"
import imageSixthSmall from "../../images/sixth-card-small.png"
import { throttle } from "../throttle"

const serviceCardsImages = document.querySelectorAll(".service__cards-image")
const imagesBig = [
	imageFirst,
	imageSecond,
	imageThird,
	imageFourth,
	imageFifth,
	imageSixth
]

const imagesSmall = [
	imageFirstSmall,
	imageSecondSmall,
	imageThirdSmall,
	imageFourthSmall,
	imageFifthSmall,
	imageSixthSmall
]

export const setsServiceImagesSrc = () => {
	const documentWidth = document.documentElement.clientWidth
	const getTemplateString = (i) =>
		documentWidth >= 1399 ? imagesBig[i] : imagesSmall[i]

	serviceCardsImages.forEach((card, i) => {
		card.src = getTemplateString(i)
	})
}
export let setsServiceImagesSrcThrottle = throttle(setsServiceImagesSrc, 150)
