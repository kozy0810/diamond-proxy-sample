import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const diamondCutFacet = await ethers.getContract("DiamondCutFacet");

  await deploy("Diamond", {
    from: deployer,
    args: [deployer, diamondCutFacet.address],
    log: true,
    deterministicDeployment: true,
  });
}

export default func
func.id = "deploy_diamond"
func.tags = ["Diamond"];