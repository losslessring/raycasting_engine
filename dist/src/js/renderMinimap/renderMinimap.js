export const renderMinimap = ({ context, map, CELL_SIZE = 64, posX = 0, posY = 0, scale = 1, }) => {
    const cellSize = scale * CELL_SIZE;
    map.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (cell) {
                context.fillStyle = "grey";
                context.fillRect(posX + x * cellSize, posY + y * cellSize, cellSize, cellSize);
            }
        });
    });
};
