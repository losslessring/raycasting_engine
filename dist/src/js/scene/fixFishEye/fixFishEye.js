export const fixFishEye = ({ distance, angle, playerAngle, }) => {
    const diff = angle - playerAngle;
    return distance * Math.cos(diff);
};
