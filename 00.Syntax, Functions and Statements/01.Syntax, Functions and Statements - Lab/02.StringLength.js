function strlength(a, b, c) {
    let total = a.length + b.length + c.length;
    let avg = Math.floor(total / 3);

    console.log(total);
    console.log(avg);
}

strlength('chocolate', 'ice cream', 'cake')
console.log("-------------------")
strlength('pasta', '5', '22.3')