function lastKSequence(n, k) {
    result = [1]
    for (let i = 1; i < n; i++) {
        if (result.length < k) {
            result.push(result.reduce((a, b) => a + b))
        } else {
            result
                .push(result.slice(i-k, i+1)
                    .reduce((a, b) => a + b))
        }
    }

    return result
}

console.log(lastKSequence(6, 3));
console.log(lastKSequence(8, 2));