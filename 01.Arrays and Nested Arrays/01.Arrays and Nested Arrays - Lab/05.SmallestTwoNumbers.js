// function firstTwoSmallerNumbers(arr) {
//     let firstArr = arr.sort((a, b) => a-b);
//     let newArr = firstArr.splice(0, 2);
//     console.log(newArr.join(' '));
// }

function firstTwoSmallerNumbers(arr) {
    let result = [];
    arr.sort((a, b) => a - b);
    result.push(arr[0], arr[1]);

    console.log(result.join(' '));
}

firstTwoSmallerNumbers([30, 15, 50, 5]);
console.log('*'.repeat(10));
firstTwoSmallerNumbers([3, 0, 10, 4, 7, 3]);