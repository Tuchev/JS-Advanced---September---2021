function solve(arr) {
    let sumResult = 0;
    let inverSum = 0;

    for (let num of arr) {
        sumResult += num;
        inverSum += 1 / num;
    }

    console.log(sumResult);
    console.log(inverSum);
    console.log(arr.join(''));
}

solve([1, 2, 3])
solve([2, 4, 8, 16])