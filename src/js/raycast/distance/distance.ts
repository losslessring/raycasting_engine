type Distance = {
    x1: number
    y1: number
    x2: number
    y2: number
}

export const distance = ({ x1, x2, y1, y2 }: Distance): number => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}
