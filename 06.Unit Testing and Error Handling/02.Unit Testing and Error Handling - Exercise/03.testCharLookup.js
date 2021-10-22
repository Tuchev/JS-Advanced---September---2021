const { expect } = require('chai');
const {lookupChar} = require('./03.CharLookup')


describe('Char Lookup', () => {
    it('return undefined when given wrong data type', () => {
        expect(lookupChar(5, 5)).to.be.undefined;
        expect(lookupChar('string', 'another string')).to.be.undefined;
        expect(lookupChar('text', "1")).to.be.undefined;
        expect(lookupChar('text', undefined)).to.be.undefined;
        expect(lookupChar('text', null)).to.be.undefined;
    });

    it('return undef if first parameter is not a string', () => {
        expect(lookupChar(undefined, 1)).to.be.undefined;
        expect(lookupChar(1, 1)).to.be.undefined;
    });

    it('return undefined when given floating point index', () => {
        expect(lookupChar('text', 1.1)).to.be.undefined;
    });

    it('return the char in the correct index', () => {
        expect(lookupChar('text', 0)).to.equal('t');
        expect(lookupChar('text', 2)).to.equal('x');
    });

    it('return "Incorrect index" when the index is invalid', () => {
        expect(lookupChar('text', -1)).to.equal('Incorrect index');
        expect(lookupChar('text', 4)).to.equal('Incorrect index');
    });
})