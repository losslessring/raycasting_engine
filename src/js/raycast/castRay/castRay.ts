import { getVCollision } from "../getVCollision/getVCollision.js"
import { getHCollision } from "./../getHCollision/getHCollision.js"

type Ray = {
    angle: number
    CELL_SIZE: number
    player: any
    map: number[][]
}

export const castRay = ({ angle, CELL_SIZE, player, map }: Ray) => {
    const vCollision = getVCollision({
        angle,
        CELL_SIZE,
        player,
        map,
    })
    const hCollision = getHCollision({
        angle,
        CELL_SIZE,
        player,
        map,
    })

    // return vCollision
    return hCollision.distance >= vCollision.distance ? vCollision : hCollision
}
