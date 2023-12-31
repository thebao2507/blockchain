// require("@nomicfoundation/hardhat-toolbox");
// require('dotenv').config()

import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + "/.env" })
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.7.0",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545",
      accounts: [process.env.PRIV_KEY]
    }
  },
  etherscan: {
    apiKey: process.env.API_KEY
  }
};
