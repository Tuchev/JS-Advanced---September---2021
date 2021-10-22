// function solve(arr, num) {
//     for (let i = 0; i < num; i++) {
//         let lastEl = arr[arr.length - 1];
//         arr.pop();
//         arr.unshift(lastEl);
//     }
//     console.log(arr.join(' '));
// }

function solve(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}

solve(['1',
        '2',
        '3',
        '4'],
    2
);

solve(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
);