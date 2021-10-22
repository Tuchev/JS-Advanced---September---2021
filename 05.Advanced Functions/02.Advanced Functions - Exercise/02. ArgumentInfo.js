function argumentInfo(...params) {
    const collection = {};

    for (let param of params) {
        const type = typeof param;

        if (!collection[type]) {
            collection[type] = 1;
        } else {
            collection[type] += 1;
        }

        console.log(`${type}: ${param}`)
    }

    for (const [key, value] of Object.entries(collection)
        .sort((a, b) => b[1] - a[1])) {
        console.log(`${key} = ${value}`);
    }
}

argumentInfo('cat', 42, function () {
    console.log('Hello world!');
});
argumentInfo({name: 'bob'}, 3.333, 9.999);