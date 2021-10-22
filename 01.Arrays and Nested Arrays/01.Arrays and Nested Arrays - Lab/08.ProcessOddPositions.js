// function oddPosition(arr) {
//     const oddNums = arr.filter((v, i) => i % 2 === 1);
//     const oddNumsTwo = oddNums.map((x) => x * 2);
//     console.log(oddNumsTwo.reverse());
// }
//
// oddPosition([10, 15, 20, 25])
// oddPosition([3, 0, 10, 4, 7, 3])

const oddPosition = (arr) => arr
        .filter((v, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');

console.log(oddPosition([10, 15, 20, 25]));
console.log(oddPosition([3, 0, 10, 4, 7, 3]));