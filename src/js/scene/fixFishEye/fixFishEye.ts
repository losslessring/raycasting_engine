type FixFishEye = {
    distance: number
    angle: number
    playerAngle: number
}
export const fixFishEye = ({
    distance,
    angle,
    playerAngle,
}: FixFishEye): number => {
    const diff = angle - playerAngle
    return distance * Math.cos(diff)
}
