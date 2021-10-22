const {expect} = require('chai');
const rgbToHexColor = require('../06.RGBtoHex');

describe('RGBtoHEX Test', () => {

    describe('Happy path', () => {
        it('converts white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });

        it('converts black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });

        it('Convert SoftUni dark blue to #234465', () => {
            expect(rgbToHexColor(35, 68, 101)).to.equal('#234465');
        });
    });

    describe('Invalid parameters', () => {
        it('return undefined with missing parameters', () => {
            expect(rgbToHexColor(255)).to.be.undefined;
        });

        it('return undefined for value out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        });
        it('returns undefined with incorrect green value', () => {
            expect(rgbToHexColor(255, 256, 255)).to.be.undefined;
        });
        it('returns undefined with incorrect blue value', () => {
            expect(rgbToHexColor(255, 255, -1)).to.be.undefined;
        });
        it('return undefined for value out of range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        });
        it('return undefined for invalid parameters type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
        });
    });
})