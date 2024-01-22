import { outOfMapBounds } from "../outOfMapBounds/outOfMapBounds.js";
import { distance } from "./../distance/distance.js";
export const getHCollision = ({ angle, CELL_SIZE, player, map, }) => {
    const up = Math.abs(Math.floor(angle / Math.PI) % 2);
    const firstY = up
        ? Math.floor(player.y / CELL_SIZE) * CELL_SIZE
        : Math.floor(player.y / CELL_SIZE) * CELL_SIZE + CELL_SIZE;
    const firstX = player.x + (firstY - player.y) / Math.tan(angle);
    const yA = up ? -CELL_SIZE : CELL_SIZE;
    const xA = yA / Math.tan(angle);
    let wall;
    let nextX = firstX;
    let nextY = firstY;
    while (!wall) {
        const cellX = Math.floor(nextX / CELL_SIZE);
        const cellY = up
            ? Math.floor(nextY / CELL_SIZE) - 1
            : Math.floor(nextY / CELL_SIZE);
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
        vertical: false,
    };
};
