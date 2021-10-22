const {expect} = require('chai');
const isSymmetric = require('../05.CheckForSymmetry');

describe('SymmetricChecker', () => {
    it('return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });
    it('return false for non-symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 3])).to.be.false;
    });
    it('return false for non-array', () => {
        expect(isSymmetric(3)).to.be.false;
    });
    it('return true for symmetric array with odd numbers of elements', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });
    it('return true for symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'b', 'a'])).to.be.true;
    });
    it('return false for non-symmetric array with strings', () => {
        expect(isSymmetric(['a', 'b', 'c'])).to.be.false;
    });
    it('return false for strings parameter', () => {
        expect(isSymmetric('abba')).to.be.false;
    });
    it('returns false when given symmetric string with different data types', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.false;
    });
})

