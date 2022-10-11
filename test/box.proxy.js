const { ethers } = require("hardhat")
const { expect } = require('chai')

describe('Box (proxy) tests', () => {
    beforeEach(async () => {
        let Box = await ethers.getContractFactory("Box");
        box = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
    })
    // Test Case
    it('retrieve return a value previously initialized', async () => {
        expect(await box.retrieve()).to.equal('42')
    })
})