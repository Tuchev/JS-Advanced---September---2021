function solve(numbers) {
    const result = [];

    for (let num of numbers) {
        if (num < 0) {
            result.unshift(num)
        } else {
            result.push(num)
        }
    }
    for (let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}

solve([7, -2, 8, 9])
console.log('*'.repeat(10))
solve([3, -2, 0, -1])