function solve(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    const newArray = [];

    // arr.forEach((el) => {
    //     if (el >= biggest) {
    //         biggest = el;
    //         newArray.push(el);
    //     }
    // })
    // return newArray

    arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }
        return accumulated;
    }, newArray);
    return newArray
}

// function solve(arr) {
//     let biggest = Number.MIN_SAFE_INTEGER;
//     const result = arr.filter((el) => {
//         if (el >= biggest) {
//             biggest = el;
//             return true;
//         }
//         return false;
//     })
//     return result
// }

console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
));
console.log(solve([1,
    2,
    3,
    4]
));
console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
));