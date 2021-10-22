function operation(a, b, operant) {
    //'+', '-', '*', '/', '%', '**'11
    let result;
    switch (operant) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
        case '%': result = a % b; break;
        case '**': result = a ** b; break;
    }
    console.log(result);
}

operation(3, 5.5, '*')