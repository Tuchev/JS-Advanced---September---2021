// function solve(arr) {
//     /**
//      *
//      * @param field
//      * @param coordinates
//      * @return boolean
//      */
//     function hasWin(field, coordinates) {
//         const [x, y] = coordinates;
//         if (field[0][y] === field[1][y] && field[0][y] === field[2][y] && field[0][y] !== false) {
//             return true;
//         } else if (field[x][0] === field[x][1] && field[x][0] === field[x][2] && field[x][0] !== false) {
//             return true;
//         } else if (field[0][0] === field[1][1] && field[0][0] === field[2][2] && field[0][0] !== false) {
//             return true;
//         } else if (field[0][2] === field[1][1] && field[0][2] === field[2][0] && field[0][2] !== false){
//             return true;
//         } else {
//             return false;
//         }
//     }
//
//     function printResult(field) {
//         field.forEach((el) => {
//             console.log(el.join('\t'));
//         })
//     }
//
//     let gameWon = false;
//     const playField = [
//         [false, false, false],
//         [false, false, false],
//         [false, false, false]
//     ];
//     let currentPlayerSign = 'X';
//
//     for (let i = 0; i < arr.length; i++) {
//         const [x, y] = arr[i].split(' ');
//
//         if (i === 9) {
//             break;
//         }
//         if (playField[x][y]) {
//             console.log('This place is already taken. Please choose another!');
//         } else {
//             playField[x][y] = currentPlayerSign;
//             if (hasWin(playField, [x, y])){
//                 gameWon = true;
//                 console.log(`Player ${currentPlayerSign} wins!`);
//                 printResult(playField);
//                 break;
//             }
//             currentPlayerSign = currentPlayerSign === 'X' ? 'O' : 'X'
//
//         }
//     }
//     if (!gameWon) {
//         console.log('The game ended! Nobody wins :(');
//         printResult(playField);
//     }
// }

function solve(arr) {
    const gameBoard = [["false", "false", "false"],
        ["false", "false", "false"],
        ["false", "false", "false"]]


    let player = "X"

    function searchForWinningMove(gameBoard, row, idx) {
        return (
            gameBoard[row].every(x => x === player) ||
            gameBoard
                .reduce((a, v) => {
                    a.push(v[idx])
                    return a
                }, [])
                .every(x => x === player) ||
            [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]].every(x => x === player) ||
            [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]].every(x => x === player)
        )
    }

    const printBoard = board => console.log(board.map(x => x.join("\t")).join("\n"))

    for (let i = 0; i < arr.length; i++) {
        const [row, idx] = arr[i].split(" ").map(Number)

        if (gameBoard[row][idx] !== "false") {
            console.log("This place is already taken. Please choose another!")
            continue
        }
        gameBoard[row][idx] = player

        if (searchForWinningMove(gameBoard, row, idx)) {
            console.log(`Player ${player} wins!`)
            printBoard(gameBoard)
            break
        }

        if (gameBoard.every(x => x.every(y => y !== "false"))) {
            console.log("The game ended! Nobody wins :(")
            printBoard(gameBoard)
            break
        }

        player = player === "X" ? "O" : "X"
    }
}

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]
);

solve(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
);

solve(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);

solve(['0 1',
'0 0',
'0 2',
'2 0',
'1 0',
'1 2',
'1 1',
'2 1',
'2 2',
'0 0']
);