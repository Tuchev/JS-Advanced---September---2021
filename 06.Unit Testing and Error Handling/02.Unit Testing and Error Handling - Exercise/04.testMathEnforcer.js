const {expect} = require('chai');
const {mathEnforcer} = require('./04.MathEnforcer')


describe('Test mathEnforcer addFive functionality', () => {
    it('expect undefined or wrong input type', () => {
        expect(mathEnforcer.addFive('4')).to.be.undefined;
        expect(mathEnforcer.addFive([])).to.be.undefined;
        expect(mathEnforcer.addFive({})).to.be.undefined;
        expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        expect(mathEnforcer.addFive('string')).to.be.undefined;
    });

    it('expect proper number outcome', () => {
        expect(mathEnforcer.addFive(5)).to.be.equal(10);
        expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        expect(mathEnforcer.addFive(5.05)).to.be.closeTo(10.05, 0.01);
    });
})

describe('Test mathEnforcer subtractTen functionality', () => {
    it('expect undefined or wrong input type', () => {
        expect(mathEnforcer.subtractTen('4')).to.be.undefined;
        expect(mathEnforcer.subtractTen([])).to.be.undefined;
        expect(mathEnforcer.subtractTen({})).to.be.undefined;
        expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        expect(mathEnforcer.subtractTen('string')).to.be.undefined;
    });

    it('expect proper number outcome', () => {
        expect(mathEnforcer.subtractTen(5)).to.be.equal(-5);
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        expect(mathEnforcer.subtractTen(5.05)).to.be.closeTo(-4.95, 0.01);
    });
})

describe('Test mathEnforcer sum functionality', () => {
    it('expect undefined or wrong input type', () => {
        expect(mathEnforcer.sum('4', 10)).to.be.undefined;
        expect(mathEnforcer.sum('a', 'b')).to.be.undefined;
        expect(mathEnforcer.sum(4, '10')).to.be.undefined;
        expect(mathEnforcer.sum([4, 10])).to.be.undefined;
        expect(mathEnforcer.sum([], 10)).to.be.undefined;
        expect(mathEnforcer.sum({}, 10)).to.be.undefined;
        expect(mathEnforcer.sum(undefined, 10)).to.be.undefined;
        expect(mathEnforcer.sum('string', 10)).to.be.undefined;
    });

    it('expect proper number outcome', () => {
        expect(mathEnforcer.sum(5, 10)).to.be.equal(15);
        expect(mathEnforcer.sum(5, -5)).to.be.equal(0);
        expect(mathEnforcer.sum(20, -10)).to.be.equal(10);
        expect(mathEnforcer.sum(-10, -5)).to.be.equal(-15);
        expect(mathEnforcer.sum(5.05, 5)).to.be.closeTo(10.05, 0.01);
        expect(mathEnforcer.sum(1.5, 1.5)).to.be.closeTo(3, 0.01);
        expect(mathEnforcer.sum(-10.5, -10.5)).to.be.closeTo(-21, 0.01);
    });
})


/**
 describe("Test mathEnforcer addFive functionality", () => {
    describe('addFive', () => {

        it('check function addFive for incorrect input type', () => {
            expect(mathEnforcer.addFive("4")).to.be.undefined;
            expect(mathEnforcer.addFive("sdfsdfsd")).to.be.undefined;
            expect(mathEnforcer.addFive([1])).to.be.undefined;
        });

        it('check function addFive for correct input type', () => {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
            expect(mathEnforcer.addFive(5.5)).to.be.equal(10.5);
        });
    });

    describe('subTen', () => {
        it('check function subtractTen for incorrect input type', () => {
            expect(mathEnforcer.subtractTen("4")).to.be.undefined;
            expect(mathEnforcer.subtractTen("sdfsdfsd")).to.be.undefined;
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
        });

        it('check function subTen for correct input type', () => {
            expect(mathEnforcer.subtractTen(1)).to.be.equal(-9);
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
            expect(mathEnforcer.subtractTen(10.5)).to.be.equal(0.5);
            expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
        });
    });

    describe('sum', () => {
        it('check function sum for incorrect input type', () => {
            expect(mathEnforcer.sum("4", 1)).to.be.undefined;
            expect(mathEnforcer.sum("h", "d")).to.be.undefined;
            expect(mathEnforcer.sum([1, 2])).to.be.undefined;
            expect(mathEnforcer.sum(1, "5")).to.be.undefined;
        });

        it('check function sum for correct input type', () => {
            expect(mathEnforcer.sum(1, 1)).to.be.equal(2);
            expect(mathEnforcer.sum(10, 10)).to.be.equal(20);
            expect(mathEnforcer.sum(-5, -5)).to.be.equal(-10);
            expect(mathEnforcer.sum(-5, 5)).to.be.equal(0);
            expect(mathEnforcer.sum(1.5, 1.5)).to.be.equal(3.0);
            expect(mathEnforcer.sum(-10.5, -10.5)).to.be.equal(-21.0);
        });
    });
})
 */