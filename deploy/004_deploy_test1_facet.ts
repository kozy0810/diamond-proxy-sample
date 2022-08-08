import { ethers } from "hardhat";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy("Test1Facet", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: true,
  });
}

export default func
func.id = "deploy_test1_facet"
func.tags = ["Test1Facet"];