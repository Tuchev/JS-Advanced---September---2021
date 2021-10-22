function largest(a, b, c) {
    let result;
    if (a > b) {
        if (a > c) {
            result = a;
        } else {
            result = c;
        }
    } else if (b > c) {
        result = b;
    } else if (c > b) {
        result = c;
    }

    console.log(`The largest number is ${result}.`)
}

largest(1, 2, 3)
largest(3, 2, 1)
largest(2, 3, 1)
largest(1, 3, 2)