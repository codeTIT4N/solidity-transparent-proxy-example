require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades")
require("@nomiclabs/hardhat-ethers")
require('dotenv').config()


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.INFURA}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA}`,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    hardhat: {
      gas: 12000000,
      blockGasLimit: 0x1fffffffffffff,
      allowUnlimitedContractSize: true,
      timeout: 1800000,
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.8.17'
      },
    ],
  },
};