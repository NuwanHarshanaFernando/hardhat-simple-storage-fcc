require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
// require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number")

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL
const ETHEREUM_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 4, // Rinkeby's chain ID
    },
    sepolia: {
      url: ETHEREUM_SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111, // Sepolia's chain ID
    },
    localhost:{
      url: "http://127.0.0.1:8545/",
      // accounts: //Thanks hardhat
      chainId: 31337 // Localhost's chain ID
    }
  },
  solidity: "0.8.28",
  etherscan: {
    apiKey: ETHERSCAN_API_KEY, // Replace with your Etherscan API key
  }
};
