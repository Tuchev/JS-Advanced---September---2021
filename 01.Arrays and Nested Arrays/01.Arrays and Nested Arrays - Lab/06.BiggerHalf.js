function biggerHalf(arr) {
    let arrSort = arr.sort((a, b) => a - b);
    // if (arrSort.length % 2 === 0) {
    //     return arrSort.slice(arrSort.length / 2);
    // } else {
    //     return arrSort.slice(arrSort.length / 2);
    // }
    let middlePoint = arrSort.length / 2;
    return arrSort.slice(middlePoint)
}

console.log(biggerHalf([4, 7, 2, 5]));
console.log('*'.repeat(10));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));