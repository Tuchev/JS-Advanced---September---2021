// function solve(arr){
//     let count = 1;
//     const newArray = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 'add') {
//             newArray.push(count);
//             count += 1;
//         } else if (arr[i] === 'remove') {
//             newArray.pop();
//             count += 1;
//         }
//     }
//     if (newArray.length > 0) {
//         console.log(newArray.join('\n'));
//     } else {
//         console.log('Empty');
//     }
// }

function solve(arr) {
    let number = 1;
    let result = [];

    arr.forEach((el) => {
        if (el === 'add') {
            result.push(number);
        } else {
            result.pop();
        }
        number += 1
    })

    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty');
    }
}

solve(['add',
    'add',
    'add',
    'add']
);

solve(['add',
    'add',
    'remove',
    'add',
    'add']
);

solve(['remove',
    'remove',
    'remove']
);