export const outOfMapBounds = ({ x, y, map }) => {
    return x < 0 || x >= map[0].length || y < 0 || y >= map.length;
};
