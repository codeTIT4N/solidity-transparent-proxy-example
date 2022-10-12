const { ethers } = require("hardhat")
const { expect } = require('chai')

describe('Box (proxy) tests', () => {
    beforeEach(async () => {
        let Box = await ethers.getContractFactory("Box");
        box = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
    })
    it('retrieve() return a value previously initialized', async () => {
        expect(await box.retrieve()).to.equal('42')
    })
    it('increment() function should not work here', async () => {
        expect(() => { box.increment() }).to.throw(TypeError)
    })
    it('upgrades to BoxV2', async function () {
        const BoxV2 = await ethers.getContractFactory("BoxV2")
        box2 = await upgrades.upgradeProxy(box.address, BoxV2)
        await box2.increment()
        let result = await box2.retrieve()
        expect(result).to.equal(43)
    })
})