import { task } from "hardhat/config";

export default task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => { //hre = Hardhat Runtime Environment
        const blockNumber = await hre.ethers.provider.getBlockNumber();
        console.log(`Current block number: ${blockNumber}`);
    }
)


