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