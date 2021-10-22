function solve(arr, num) {
    let newArray = [];
    for (let i = 0; i < arr.length; i+=num) {
        newArray.push(arr[i]);
    }
    return newArray;
}

console.log(solve(['5',
        '20',
        '31',
        '4',
        '20'],
    2
));
console.log(solve(['dsa',
        'asd',
        'test',
        'tset'],
    2
));
console.log(solve(['1',
        '2',
        '3',
        '4',
        '5'],
    6
));