import { clearScreenFactory } from "./clearScreenFactory/clearScreenFactory.js"

const SCREEN_WIDTH = window.innerWidth
const SCREEN_HEIGHT = window.innerHeight

const canvas = document.createElement("canvas")
canvas.setAttribute("width", SCREEN_WIDTH)
canvas.setAttribute("height", SCREEN_HEIGHT)
document.body.appendChild(canvas)

const context = canvas.getContext("2d")

const TICK = 30

const clearScreen = clearScreenFactory({
    context,
    fillStyle: "red",
    screenWidth: SCREEN_WIDTH,
    screenHeight: SCREEN_HEIGHT,
})

const gameLoop = () => {
    clearScreen()
}

setInterval(gameLoop, TICK)
