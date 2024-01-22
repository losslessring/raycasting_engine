export const renderMinimap = ({ context, map, CELL_SIZE = 64, posX = 0, posY = 0, scale = 1, PLAYER_SIZE, player, COLORS, rays, }) => {
    const cellSize = scale * CELL_SIZE;
    map.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                context.fillStyle = "grey";
                context.fillRect(posX + x * cellSize, posY + y * cellSize, cellSize, cellSize);
            }
        });
    });
    context.strokeStyle = COLORS.rays;
    rays.forEach((ray) => {
        context.beginPath();
        context.moveTo(player.x * scale + posX, player.y * scale + posY);
        context.lineTo((player.x + Math.cos(ray.angle) * ray.distance) * scale, (player.y + Math.sin(ray.angle) * ray.distance) * scale);
        context.closePath();
        context.stroke();
    });
    context.fillStyle = "blue";
    context.fillRect(posX + player.x * scale - PLAYER_SIZE / 2, posY + player.y * scale - PLAYER_SIZE / 2, PLAYER_SIZE, PLAYER_SIZE);
    const rayLength = PLAYER_SIZE * 3;
    context.strokeStyle = "blue";
    context.beginPath();
    context.moveTo(player.x * scale + posX, player.y * scale + posY);
    context.lineTo((player.x + Math.cos(player.angle) * rayLength) * scale, (player.y + Math.sin(player.angle) * rayLength) * scale);
    context.closePath();
    context.stroke();
    context.strokeStyle = COLORS.rays;
};
