require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
// require("@nomiclabs/hardhat-etherscan");
require("./tasks/block-number")
require("hardhat-gas-reporter");
require("solidity-coverage");

const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL || "https://eth-rinkeby"
const ETHEREUM_SEPOLIA_RPC_URL = process.env.ETHEREUM_SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/yFFLtvf7llmx-NMCA1RDJ"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

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
  },
  gasReporter:{
    enabled: true, // Enable gas reporting
    outputFile: "gas-report.txt", // Output file for gas report
    noColors: true, // Disable colors in the output
    currency: "USD", // Currency for gas prices
   // coinmarketcap: COINMARKETCAP_API_KEY, // CoinMarketCap API key for gas prices
   token:"MATIC"
  }
};
