const {expect} = require('chai');
const {PaymentPackage} = require('./12.PaymentPackage');

describe('Payment Package', () => {
    let testPackage;

    beforeEach(() => {
        testPackage = new PaymentPackage('test', 10)
    });

    it('initializes correctly', () => {
        expect(testPackage._name).to.equal('test');
        expect(testPackage._value).to.equal(10);
        expect(testPackage._VAT).to.equal(20);
        expect(testPackage._active).to.be.true;
    });

    it('name setter throws error when not given string', () => {
        expect(() => {
            (testPackage.name = 5).to.throw('Name must be non-empty string');
        });
    });

    it('name setter throws error when given empty string', () => {
        expect(() => {
            (testPackage.name = '').to.throw('Name must be a non-empty string');
        });
    });

    it('name setter sets the new name correctly', () => {
        expect(testPackage.name).to.be.equal('test');
        testPackage.name = 'new';
        expect(testPackage.name).to.be.equal('new');
    });

    it('value setter throws error when not given number', () => {
        expect(() => {
            (testPackage.value = '5').to.throw('Value must be a non-negative number');
        });
    });

    it('value setter throws error when given negative number', () => {
        expect(() => {
            (testPackage.value = -1).to.throw('Value must be a non-negative number');
        });
    });

    it('value setter set the new value correctly with positive number', () => {
        expect(testPackage.value).to.be.equal(10);
        testPackage.value = 5;
        expect(testPackage.value).to.be.equal(5);
    });

    it('value setter set the new value correctly with zero', () => {
        expect(testPackage.value).to.be.equal(10);
        testPackage.value = 0;
        expect(testPackage.value).to.be.equal(0);
    });

    it('VAT setter throws error when not given number', () => {
        expect(() => {
            (testPackage.VAT = '5').to.throw('VAT must be a non-negative number');
        });
    });

    it('VAT setter throws error when given negative number', () => {
        expect(() => {
            (testPackage.VAT = -1).to.throw('VAT must be a non-negative number');
        });
    });

    it('VAT setter set the new value correctly', () => {
        expect(testPackage.VAT).to.be.equal(20);
        testPackage.VAT = 8;
        expect(testPackage.VAT).to.be.equal(8);
    });

    it('active status setter throws error when not given boolean', () => {
        expect(() => {
            (testPackage.active = 'true').to.throw('Active status must be a boolean');
        });
    });

    it('active status setter set the new status correctly', () => {
        expect(testPackage.active).to.be.true;
        testPackage.active = false;
        expect(testPackage.active).to.be.false;
    });

    it('toString method return correct result with active package 20% VAT', () => {
        const expected = [
            `Package: test`,
            `- Value (excl. VAT): ${testPackage.value}`,
            `- Value (VAT 20%): 12`].join('\n');
        const actual = testPackage.toString();
        expect(expected).to.be.equal(actual);
    });

    it('toString() method returns the correct result with active package 30% VAT', () => {
        testPackage.VAT = 30;
        const expected = [
            `Package: test`,
            `- Value (excl. VAT): ${testPackage.value}`,
            `- Value (VAT 30%): 13`].join('\n');
        const actual = testPackage.toString();
        expect(expected).to.equal(actual);
    });

    it('toString() method returns the correct result with inactive package', () => {
        testPackage.active = false;
        const expected = [
            `Package: test (inactive)`,
            `- Value (excl. VAT): ${testPackage.value}`,
            `- Value (VAT 20%): 12`].join('\n');
        const actual = testPackage.toString();
        expect(expected).to.equal(actual);
    });
})