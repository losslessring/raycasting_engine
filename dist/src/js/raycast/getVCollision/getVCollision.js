import { outOfMapBounds } from "../outOfMapBounds/outOfMapBounds.js";
import { distance } from "./../distance/distance.js";
export const getVCollision = ({ angle, CELL_SIZE, player, map, }) => {
    const right = Math.abs(Math.floor((angle - Math.PI / 2) / Math.PI) % 2);
    const firstX = right
        ? Math.floor(player.x / CELL_SIZE) * CELL_SIZE + CELL_SIZE
        : Math.floor(player.x / CELL_SIZE) * CELL_SIZE;
    const firstY = player.y + (firstX - player.x) * Math.tan(angle);
    const xA = right ? CELL_SIZE : -CELL_SIZE;
    const yA = xA * Math.tan(angle);
    let wall;
    let nextX = firstX;
    let nextY = firstY;
    while (!wall) {
        const cellX = right
            ? Math.floor(nextX / CELL_SIZE)
            : Math.floor(nextX / CELL_SIZE) - 1;
        const cellY = Math.floor(nextY / CELL_SIZE);
        if (outOfMapBounds({ x: cellX, y: cellY, map })) {
            break;
        }
        wall = map[cellY][cellX];
        if (!wall) {
            nextX += xA;
            nextY += yA;
        }
    }
    return {
        angle,
        distance: distance({
            x1: player.x,
            y1: player.y,
            x2: nextX,
            y2: nextY,
        }),
        vertical: true,
    };
};
