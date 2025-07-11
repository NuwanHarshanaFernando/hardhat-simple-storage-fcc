import { ethers } from "hardhat";
import { assert, expect } from "chai";
import { SimpleStorage, SimpleStorage__factory } from "../typechain-types";

describe("SimpleStorage", function () {
    let simpleStorageFactory: SimpleStorage__factory
    let simpleStorage: SimpleStorage
    beforeEach(async function () {
        // simpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
        simpleStorageFactory = (await ethers.getContractFactory(
            "SimpleStorage"
        )) as SimpleStorage__factory

        simpleStorage = await simpleStorageFactory.deploy();
    })

    it("Should start with a favorite number of 0", async function () {
        const currentValue = await simpleStorage.retrieve();
        const expectedValue = "0";
        assert.equal(currentValue.toString(), expectedValue); //currentValue.toString() is because it's a Big number
        expect(currentValue.toString()).to.equal(expectedValue); //Using Chai's expect syntax
    })

    it("Should update when we call store", async function () {
        const expectedValue = "7";
        const txResponse = await simpleStorage.store(expectedValue);
        await txResponse.wait(1);
        const currentValue = await simpleStorage.retrieve();
        assert.equal(currentValue.toString(), expectedValue);
    })

    it("Should add person to people array", async function () {
        const expectedName = "Nuwan";
        const expectedFavoriteNumber = "7";
        const txResponse = await simpleStorage.addPerson(expectedName, expectedFavoriteNumber);
        await txResponse.wait(1);
        const person = await simpleStorage.people(0);
        assert.equal(person.name, expectedName);
        assert.equal(person.favoriteNumber.toString(), expectedFavoriteNumber);
    })

})
