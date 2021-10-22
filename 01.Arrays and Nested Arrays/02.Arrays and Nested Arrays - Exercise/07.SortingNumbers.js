function solve(arr) {
    const arrSorted = arr.sort((a, b) => a - b);
    const newArr = [];
    // let rotaion = arrSorted.length;
    //
    // for (let i = 0; i < rotaion; i++) {
    //     if (i % 2 === 0) {
    //         newArr.push(arrSorted.shift())
    //     } else {
    //         newArr.push(arrSorted.pop())
    //     }
    // }

    while (arrSorted.length != 0) {
        newArr.push(arrSorted.shift(), arrSorted.pop());
    }
    return newArr
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));