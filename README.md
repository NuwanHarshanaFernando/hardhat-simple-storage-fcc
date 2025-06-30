# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

To run the deploy.js (The hardhat has running blockchain)
```
yarn hardhat run scripts/deploy.js

```

To run on a customized network
```
yarn hardhat run scripts/deploy.js --network hardhat
yarn hardhat run scripts/deploy.js --network sepolia

```

For Verification process, add hardhat library

```
yarn add --dev @nomiclabs/hardhat-etherscan
```

To get the block number

```
yarn hardhat block-number // 0

yarn hardhat block-number --network sepolia // 8661968
```

To run on localhost

```
yarn hardhat run scripts/deploy.js --network localhost

```

```
yarn hardhat console --network localhost
```

For test

```
yarn hardhat test
```

For testing a test with a particular key word -> 'store'

```
    yarn hardhat test --grep store

```

To install hardhat gas reporter

```
yarn add hardhat-gas-reporter --dev
```

Add gas-reporter.txt to .gitignore

Create coinmarketcap account

Add Solidity Coverage

```
yarn add --dev solidity-coverage

yarn hardhat coverage
```

Add coverage.json to .gitignore

