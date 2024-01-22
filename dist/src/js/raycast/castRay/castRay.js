import { getVCollision } from "../getVCollision/getVCollision.js";
export const castRay = ({ angle, CELL_SIZE, player, map }) => {
    const vCollision = getVCollision({
        angle,
        CELL_SIZE,
        player,
        map,
    });
    // const hCollision = getHCollision(angle)
    return vCollision;
    // return hCollision.distance >= vCollision.distance ? vCollision : hCollision
};
