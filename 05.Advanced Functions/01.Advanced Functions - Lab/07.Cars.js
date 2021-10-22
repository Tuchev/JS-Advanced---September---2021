function solution(input) {
    const data = {};

    const res = {
        create: (name, inherits, value) =>
            (data[name] = inherits ? Object.create(data[value]) : {}),
        set: (name, k, v) => (data[name][k] = v),
        print: name => {
            const entry = [];
            for (const key in data[name]) {
                entry.push(`${key}:${data[name][key]}`);
            }
            console.log(entry.join(","));
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ");
        res[c](n, k, v);
    })
}

solution(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);

solution(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat']
);