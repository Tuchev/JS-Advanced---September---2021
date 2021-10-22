function diagonalSum(matrix) {
    let sumMainDiagonal = 0;
    let sumSecondDiagonal = 0;

    for (let row = 0; row < matrix.length; row++) {
        sumMainDiagonal += matrix[row][row];
        sumSecondDiagonal += matrix[row][matrix.length - row - 1];
    }

    console.log(sumMainDiagonal, sumSecondDiagonal);
}

diagonalSum([[20, 40],
    [10, 60]]
);
diagonalSum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
);