require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    rinkeby:{
      url: process.env.INFURA_RINKBY_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]
    }
    ,
    Goerli:{
      url: process.env.INFURA_RINKBY_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]

    },

    Ethereum:{
      url: process.env.INFURA_RINKBY_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY]

    },

  //   ropsten: {
  //     url: process.env.INFURA_RINKBY_ENDPOINT,
  //     accounts: [process.env.PRIVATE_KEY]
  //  },
  }
};
