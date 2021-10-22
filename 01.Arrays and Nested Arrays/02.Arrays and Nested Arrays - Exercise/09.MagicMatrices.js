function solve(matrix) {
    const size = matrix.length;
    let magicSum = 0;
    let isMagic = true;

    for (let i = 0; i < size; i++) {
        let rowSum = 0;
        let colSum = 0;
        for (let j = 0; j < size; j++) {
            rowSum += matrix[i][j];
            colSum += matrix[j][i];
        }
        if (magicSum === 0) {
            magicSum = rowSum
        }
        if (rowSum !== magicSum) {
            isMagic = false;
        }
    }
    return isMagic
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
));
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
));
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
));