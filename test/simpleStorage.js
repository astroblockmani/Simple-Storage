const SimpleStorage = artifacts.require("SimpleStorage");

contract("SimpleStorage", () => {
  it("Should set the value of data variable", async () => {
    const simpleStorage = await SimpleStorage.deployed();
    await simpleStorage.set(10);
    const result = await simpleStorage.get();
    assert(result == "10");
  });
});
