import { getVCollision } from "../getVCollision/getVCollision.js";
import { getHCollision } from "./../getHCollision/getHCollision.js";
export const castRay = ({ angle, CELL_SIZE, player, map }) => {
    const vCollision = getVCollision({
        angle,
        CELL_SIZE,
        player,
        map,
    });
    const hCollision = getHCollision({
        angle,
        CELL_SIZE,
        player,
        map,
    });
    // return vCollision
    return hCollision.distance >= vCollision.distance ? vCollision : hCollision;
};
