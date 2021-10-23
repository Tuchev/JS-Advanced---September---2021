const {expect} = require('chai')
const {dealership} = require('./03.Dealership')

describe('dealership', () => {
    // first method
    describe('new car cost', () => {
        it('discount if  old car not in list of cars', () => {
            expect(dealership.newCarCost('Lada Niva', 33333)).to.equal(33333)
        });
        it('discount if had old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 35000)).to.equal(20000)
        });
    });
    // second method
    describe('car equipment', () => {
        it('check if arrays', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof'], [0, 1])).to.have.members(['heated seats', 'sliding roof'])
        });
        it('empty index array', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof'], [])).to.have.members([])
        });
    });
    // third method
    describe('euro category', () => {
        it('checking if category is >= 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        });
        it('checking if category is more than 4', () => {
            let price = 30000;
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: 14250.`)
        });
        it('checking if category is more than 4', () => {
            let price = 30000;
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: 14250.`)
        });
    });
})