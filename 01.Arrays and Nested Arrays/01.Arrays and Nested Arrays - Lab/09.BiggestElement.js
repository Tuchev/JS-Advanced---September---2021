function biggestEl(matrix) {
    let biggestElement = -999999999999;

    for (let row of matrix) {
        for (let el of row) {
            if (el > biggestElement) {
                biggestElement = el;
            }
        }
    }
    return biggestElement
}

console.log(biggestEl([[20, 50, 10],
    [8, 33, 145]]
))
console.log(biggestEl([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
))