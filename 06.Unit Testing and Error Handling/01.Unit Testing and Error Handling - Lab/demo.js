// let str = 'Hello, SoftUni';
// console.log((str.indexOf('Sofia')));

function solve() {
    try {
        throw Error('my error');
    } catch (error) {
        console.log(error);
    }
}
solve();