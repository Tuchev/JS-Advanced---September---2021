function add(num1) {
    let sum = num1;

    function secondAdd(num2) {
        sum += num2;
        return secondAdd;
    }

    secondAdd.toString = () => {
        return sum;
    };

    return secondAdd;
}

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
console.log(add(3)(4).toString());