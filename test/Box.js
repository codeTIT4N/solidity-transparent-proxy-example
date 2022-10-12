const { ethers } = require("hardhat")
const { expect } = require('chai')

describe('Box tests', () => {
    before(async () => {
        let Box = await ethers.getContractFactory("Box");
        box = await Box.deploy();
        console.log("Box deployed to: ", box.address);
    })
    // Test Cases
    it('initially the value should be 0', async () => {
        expect(await box.retrieve()).to.equal('0')
    })
    it('store should be able to change the value', async () => {
        try {
            await box.store('12');
        } catch (err) {
            console.log(err);
        }
        expect(await box.retrieve()).to.equal('12')
    })
    it('changing the value should emit the ValueChanged event', async () => {
        await expect(box.store('9'))
            .to.emit(box, "ValueChanged")
            .withArgs('9');
    })
})

describe('BoxV2 tests', () => {
    before(async () => {
        let BoxV2 = await ethers.getContractFactory("BoxV2");
        box = await BoxV2.deploy();
        console.log("BoxV2 deployed to: ", box.address);
    })
    // Test Cases
    it('initially the value should be 0', async () => {
        expect(await box.retrieve()).to.equal('0')
    })
    it('store should be able to change the value', async () => {
        try {
            await box.store('13');
        } catch (err) {
            console.log(err);
        }
        expect(await box.retrieve()).to.equal('13')
    })
    it('changing the value should emit the ValueChanged event', async () => {
        await expect(box.store('11'))
            .to.emit(box, "ValueChanged")
            .withArgs('11');
    })
    it('increment should be able to increment the value by 1', async () => {
        try {
            await box.increment();
        } catch (err) {
            console.log(err);
        }
        expect(await box.retrieve()).to.equal('12')
    })
    it('incrementing the value should emit the ValueChanged event', async () => {
        await expect(box.increment())
            .to.emit(box, "ValueChanged")
            .withArgs('13');
    })
})