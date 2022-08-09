import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "hardhat-deploy";
// import "hardhat-deploy-ethers";
import "hardhat-contract-sizer";
// import "@nomiclabs/hardhat-etherscan";
// import { HardhatUserConfig } from "hardhat/config";
import {HardhatUserConfig} from 'hardhat/types';
import networks from "./networks";
import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  // etherscan: {
  //   apiKey: process.env.ETHERSCAN_API_KEY,
  // },
  gasReporter: {
    currency: "USD",
    gasPrice: 60,
  },
  networks,
  namedAccounts: {
    deployer: 0
  },
  solidity: {
    version: "0.8.13",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  paths: {
    sources: 'src',
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
  }
};

export default config;