const hre = require("hardhat");

async function main() {
  const MujibNFT = await hre.ethers.getContractFactory("MujibNFT");
  const mujibNFT = await MujibNFT.deploy();

  await mujibNFT.deployed();

  console.log("MujibNFT deployed to:", mujibNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
