import { castRay } from "./../castRay/castRay.js"

type Rays = {
    player: any
    FOV: number
    SCREEN_WIDTH: number
    CELL_SIZE: number
    map: number[][]
}

export const getRays = ({
    player,
    FOV,
    SCREEN_WIDTH,
    CELL_SIZE,
    map,
}: Rays) => {
    const initialAngle = player.angle - FOV / 2
    const numberOfRays = SCREEN_WIDTH
    const angleStep = FOV / numberOfRays

    return Array.from({ length: numberOfRays }, (_, i) => {
        const angle = initialAngle + i * angleStep
        const ray = castRay({ angle, CELL_SIZE, player, map })
        return ray
    })
}
