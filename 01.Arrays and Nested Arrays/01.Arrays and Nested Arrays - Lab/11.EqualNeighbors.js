function equalNeighbors(matrix) {
    const size = matrix.length;
    let count = 0;

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            let current = matrix[row][col];
            let up = null;
            let left = null;
            let right = null;
            let down = null;

            if (row - 1 >= 0) {
                up = matrix[row - 1][col];
            }
            if (col - 1 >= 0) {
                left = matrix[row][col - 1];
            }
            if (row + 1 < size) {
                down = matrix[row + 1][col];
            }
            if (col + 1 < size) {
                right = matrix[row][col + 1];
            }

            if (current === up) {
                count += 1;
            }
            if (current === down) {
                count += 1;
            }
            if (current === right) {
                count += 1;
            }
            if (current === left) {
                count += 1;
            }
        }
    }
    return count / 2;
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
));

console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
));