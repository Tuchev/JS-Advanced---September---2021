function solution(commands) {
    collection = [];

    const obj = {
        add,
        remove,
        print
    };

    for (let cmd of commands) {
        const [command, text] = cmd.split(' ');
        obj[command](text);
    }

    function add(str) {
        collection.push(str);
    }

    function remove(str) {
        collection = collection.filter(i => i !== str);
    }

    function print() {
        console.log(collection.join(','));
    }
}

solution(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solution(['add pesho', 'add george', 'add peter', 'remove peter','print']);