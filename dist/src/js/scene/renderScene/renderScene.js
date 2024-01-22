import { fixFishEye } from "./../fixFishEye/fixFishEye.js";
export const renderScene = ({ context, CELL_SIZE, COLORS, SCREEN_HEIGHT, player, rays, }) => {
    rays.forEach((ray, i) => {
        const distance = fixFishEye({
            distance: ray.distance,
            angle: ray.angle,
            playerAngle: player.angle,
        });
        const wallHeight = ((CELL_SIZE * 5) / distance) * 277;
        context.fillStyle = ray.vertical ? COLORS.wallDark : COLORS.wall;
        context.fillRect(i, SCREEN_HEIGHT / 2 - wallHeight / 2, 1, wallHeight);
        context.fillStyle = COLORS.floor;
        context.fillRect(i, SCREEN_HEIGHT / 2 + wallHeight / 2, 1, SCREEN_HEIGHT / 2 - wallHeight / 2);
        context.fillStyle = COLORS.ceiling;
        context.fillRect(i, 0, 1, SCREEN_HEIGHT / 2 - wallHeight / 2);
    });
};
