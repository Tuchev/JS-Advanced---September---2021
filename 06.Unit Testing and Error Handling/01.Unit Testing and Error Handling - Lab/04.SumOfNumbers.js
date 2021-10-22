const { expect } = require('chai');

function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}

describe('Sum Numbers', () => {
    it('starts from 0', () => {
        expect(sum([0])).to.equal(0);
    });
    it('calculates correct', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    });
    it('works with negative numbers', () => {
        expect(sum([1, 2, -1])).to.equal(2);
    });
});