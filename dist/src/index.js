//import { clearScreenFactory } from "../../../src/js/clearScreenFactory/clearScreenFactory.js"
import { clearScreenFactory } from "./js/clearScreenFactory/clearScreenFactory.js";
import { renderMinimap } from "./js/renderMinimap/renderMinimap.js";
const SCREEN_WIDTH = String(window.innerWidth);
const SCREEN_HEIGHT = String(window.innerHeight);
const canvas = document.createElement("canvas");
canvas.setAttribute("width", SCREEN_WIDTH);
canvas.setAttribute("height", SCREEN_HEIGHT);
document.body.appendChild(canvas);
const context = canvas.getContext("2d");
const TICK = 30;
const CELL_SIZE = 64;
const map = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1],
];
const player = {
    x: CELL_SIZE * 1.5,
    y: CELL_SIZE * 2,
    angle: 0,
    speed: 0,
};
const clearScreen = clearScreenFactory({
    context,
    fillStyle: "red",
    screenWidth: SCREEN_WIDTH,
    screenHeight: SCREEN_HEIGHT,
});
const gameLoop = () => {
    clearScreen();
    renderMinimap({
        context,
        map,
        CELL_SIZE,
        posX: 0,
        posY: 0,
        scale: 0.5,
    });
};
setInterval(gameLoop, TICK);
