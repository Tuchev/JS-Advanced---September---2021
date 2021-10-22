function solve(arr) {
    const arrSorted = arr.sort((a, b) => a.localeCompare(b));
    arrSorted.forEach((a, b) => {
        console.log(`${b+1}.${a}`);
    })
}

solve(["John", "Bob", "Christina", "Ema"]);