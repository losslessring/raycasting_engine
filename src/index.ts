import { clearScreenFactory } from "./js/clearScreenFactory/clearScreenFactory.js"
import { renderMinimap } from "./js/minimap/renderMinimap/renderMinimap.js"
import { toRadians } from "./js/utils/toRadians/toRadians.js"
import { getRays } from "./js/raycast/getRays/getRays.js"
import { renderScene } from "./js/scene/renderScene/renderScene.js"

const SCREEN_WIDTH = window.innerWidth
const SCREEN_HEIGHT = window.innerHeight

const canvas: HTMLCanvasElement = document.createElement("canvas")
canvas.setAttribute("width", String(SCREEN_WIDTH))
canvas.setAttribute("height", String(SCREEN_HEIGHT))
document.body.appendChild(canvas)

const context: CanvasRenderingContext2D = canvas.getContext("2d")!

const TICK = 30

const CELL_SIZE = 64

const PLAYER_SIZE = 10

const FOV = toRadians(60)

const COLORS = {
    floor: "#663300",
    ceiling: "#ccffff",
    wall: "#009900",
    wallDark: "#004d00",
    rays: "#ffa600",
}

const map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
]

type Player = {
    x: number
    y: number
    angle: number
    speed: number
    movePlayer(): void
}

const player: Player = {
    x: CELL_SIZE * 1.5,
    y: CELL_SIZE * 2,
    angle: 0,
    speed: 0,

    movePlayer() {
        this.x = this.x + Math.cos(this.angle) * this.speed
        this.y = this.y + Math.sin(this.angle) * this.speed
    },
}

const clearScreen = clearScreenFactory({
    context,
    fillStyle: "red",
    screenWidth: SCREEN_WIDTH,
    screenHeight: SCREEN_HEIGHT,
})

const gameLoop = () => {
    clearScreen()
    player.movePlayer()

    const rays = getRays({
        player,
        FOV,
        SCREEN_WIDTH,
        CELL_SIZE,
        map,
    })
    renderScene({
        context,
        CELL_SIZE,
        COLORS,
        SCREEN_HEIGHT,
        player,
        rays,
    })
    renderMinimap({
        context,
        map,
        CELL_SIZE,
        posX: 0,
        posY: 0,
        scale: 0.5,
        PLAYER_SIZE,
        player,
        COLORS,
        rays,
    })
}

setInterval(gameLoop, TICK)

document.addEventListener("keydown", (e) => {
    if (e.key === "w") {
        player.speed = 2
    }

    if (e.key === "s") {
        player.speed = -2
    }
})

document.addEventListener("keyup", (e) => {
    if (e.key === "w" || e.key === "s") {
        player.speed = 0
    }
})

document.addEventListener("mousemove", (e) => {
    player.angle = player.angle + toRadians(e.movementX / 2)
})
