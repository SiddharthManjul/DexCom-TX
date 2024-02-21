import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const BSC_TESTNET_URL = process.env.BSC_TESTNET_URL;
const BSC_MAINNET_URL = process.env.BSC_MAINNET_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "testnetBSC",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    testnetBSC: {
      url: BSC_TESTNET_URL,
      chainId: 97,
      accounts: [PRIVATE_KEY as string],
    },
    mainnetBSC: {
      url: BSC_MAINNET_URL,
      chainId: 56,
      accounts: [PRIVATE_KEY as string],
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
};

export default config;
