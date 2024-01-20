export function clearScreenFactory({ context, fillStyle, screenWidth, screenHeight, }) {
    return () => {
        context.fillStyle = fillStyle;
        context.fillRect(0, 0, screenWidth, screenHeight);
    };
}
