const {expect} = require('chai');
const createCalculator = require('../07.Add-Subtract');

describe('AddSubtract test', () => {
    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it('has all methods', () => {
        expect(instance).to.has.ownProperty('add');
        expect(instance).to.has.ownProperty('subtract');
        expect(instance).to.has.ownProperty('get');
    });

    it('starts empty', () => {
        expect(instance.get()).to.equal(0);
    });

    it('add single number', () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it('add multiple numbers', () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it('subtract single number', () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it('subtract multiple numbers', () => {
        instance.add(-1);
        instance.add(-2);
        expect(instance.get()).to.equal(-3);
    });

    it('add and subtract', () => {
        instance.add(1);
        instance.add(2)
        instance.subtract(4);
        expect(instance.get()).to.equal(-1);
    });

    it('add works with numbers as strings', () => {
        instance.add('1');
        expect(instance.get()).to.equal(1);
    });

    it('subtract works with numbers as strings', () => {
        instance.subtract('1');
        expect(instance.get()).to.equal(-1);
    });
})