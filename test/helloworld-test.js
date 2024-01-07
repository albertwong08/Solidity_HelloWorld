const { expect } = require("chai");

describe("AWHelloWorld", function() {
  it("Should return updated message once updated", async function() {
    const AWHelloWorld = await ethers.getContractFactory("AWHelloWorld");
    const helloworld = await AWHelloWorld.deploy("Hello World!");
    
    //await helloworld.deployed();
    //expect(await helloworld.seeMessage()).to.equal("Hello World!");

    await helloworld.update("Hola, mundo!");
    //expect(await helloworld.seeMessage()).to.equal("Hola, mundo!");

    await helloworld.append("GM!");
    expect(await helloworld.seeMessage()).to.equal("Hola, mundo!GM!");

  });
});