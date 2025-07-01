// imports
import { Addressable } from "ethers";
import { ethers, run, network } from "hardhat";

// async main
async function main() {
    const SimpleStorageFactory = await ethers.getContractFactory(
        "SimpleStorage"
    )
    console.log("Deploying contract...")
    const simpleStorage = await SimpleStorageFactory.deploy()
    // await simpleStorage.deployed()
    await simpleStorage.waitForDeployment()
    console.log(
        // `Deployed contract to ${SimpleStorage.address}`
        `Deployed contract to ${simpleStorage.target}`
        // `SimpleStorage deployed to ${SimpleStorage.target} at block number ${SimpleStorage.deployTransaction.blockNumber}`
    )
    // what happens when we deploy to our hardhat network?
    console.log(network.config)
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
        console.log("Waiting for block confirmations...")
        //  await simpleStorage.deployTransaction.wait(6)
        await simpleStorage.waitForDeployment() // wait for 6 confirmations

        // verify the contract
        await verify(simpleStorage.target, []) // Contract address and constructor arguments


    }

    // After verification, now we're going to interact with the contract
    const currentValue = await simpleStorage.retrieve()
    console.log(`Current value is: ${currentValue}`)

    // Update the current value
    const transactionResponse = await simpleStorage.store(7)
    await transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()
    console.log(`Updated value is: ${updatedValue}`)
}

async function verify(contractAddress: any, args: any[]) { // In this case args are empty because SimpleStorage.sol has no constructure
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e: any) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already verified!")
        } else {
            console.log(e)
        }
    }

}


// main
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })
