function solve(arr) {
    const operands = [];
    let wasWrong = false;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            operands.push(arr[i]);
        } else {
            let operator = arr[i];
            if (operands.length < 2) {
                console.log("Error: not enough operands!");
                wasWrong = true;
                break;
            }
            const operand2 = operands.pop();
            const operand1 = operands.pop();
            const result = applyOperation(operand1, operand2, operator);
            operands.push(result);
        }
    }
    if (operands.length > 1 && wasWrong === false) {
        console.log("Error: too many operands!");
    } else if (wasWrong === false) {
        console.log(operands[0]);
    }

    function applyOperation(operand1, operand2, operator) {
        const arithmeticOperator = {
            '+': () => operand1 + operand2,
            '-': () => operand1 - operand2,
            '*': () => operand1 * operand2,
            '/': () => operand1 / operand2,
        }
        return arithmeticOperator[operator]();
    }
}

solve([3,
    4,
    '+']
);
solve([5,
    3,
    4,
    '*',
    '-']
);
solve([7,
    33,
    8,
    '-']
);
solve([15,
    '/']
);