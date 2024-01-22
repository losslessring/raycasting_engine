type MapBounds = {
    x: number
    y: number
    map: number[][]
}

export const outOfMapBounds = ({ x, y, map }: MapBounds): boolean => {
    return x < 0 || x >= map[0].length || y < 0 || y >= map.length
}
