const {expect} = require('chai');
const {testNumbers} = require('./03.testNumbers');

describe('TestNumbers', () => {

    describe('sumNumbers', () => {
        it('work with valid numbers', () => {
            expect(testNumbers.sumNumbers(3,5)).to.be.equal('8.00');
            expect(testNumbers.sumNumbers(3,0)).to.be.equal('3.00');
            expect(testNumbers.sumNumbers(0,5)).to.be.equal('5.00');
        });
        it('work with negative numbers', () => {
            expect(testNumbers.sumNumbers(-3,-5)).to.be.equal('-8.00');
        });
        it('work with floating numbers', () => {
            expect(testNumbers.sumNumbers(1.5555,0.3333)).to.be.equal('1.89');
        });
        it('return undefined with string parameters', () => {
            expect(testNumbers.sumNumbers('3','5')).to.be.undefined;
        });
        it('return undefined with first invalid parameter', () => {
            expect(testNumbers.sumNumbers('3',5)).to.be.undefined;
            expect(testNumbers.sumNumbers([], 5)).to.be.undefined;
            expect(testNumbers.sumNumbers({}, 5)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 5)).to.be.undefined;
            expect(testNumbers.sumNumbers(undefined, 5)).to.be.undefined;
            expect(testNumbers.sumNumbers('string', 5)).to.be.undefined;

        });
        it('return undefined with second invalid parameter', () => {
            expect(testNumbers.sumNumbers(3,'5')).to.be.undefined;
            expect(testNumbers.sumNumbers(3, [])).to.be.undefined;
            expect(testNumbers.sumNumbers(3, {})).to.be.undefined;
            expect(testNumbers.sumNumbers(3, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(3, undefined)).to.be.undefined;
            expect(testNumbers.sumNumbers(3, 'string')).to.be.undefined;
        });
    });

    describe('numberCheckered', () => {
        it('work with odd values', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd')
        });
        it('work with even values', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even')
        });
        it('work with odd values as string', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd')
        });
        it('work with even values as string', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even')
        });
        it('work with empty string', () => {
            expect(testNumbers.numberChecker('')).to.contain('even')
        });
        it('detect invalid parameters', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
        });
    });

    describe('averageSumArray', () => {
        it('work with integers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.be.equal(2);
        });
        it('work with floating numbers', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.be.equal(2.5);
        });
    });
});