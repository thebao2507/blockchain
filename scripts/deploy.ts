import { ethers, hardhatArguments } from 'hardhat';
import * as Config from './config';

async function main() {
    await Config.initConfig();
    const network = hardhatArguments.network ? hardhatArguments.network : 'dev';
    const [deployer] = await ethers.getSigners();
    console.log('deploy from address: ', deployer.address);

    // console.log("Deploying contracts with the account:", deployer.address);
    // const floppy = await ethers.deployContract("LTBao");
    // console.log("LTBao address:", await floppy.getAddress());
    // Config.setConfig(network + '.LTBao', await floppy.getAddress());

    // console.log("Deploying contracts with the account:", deployer.address);
    // const usdt = await ethers.deployContract("USDT");
    // console.log("USDT address:", await usdt.getAddress());
    // Config.setConfig(network + '.USDT', await usdt.getAddress());

    const Ico = await ethers.getContractFactory("FLPCrowdSale");
    const ico = await Ico.deploy(1000,100,'0x54AC011ceccbb3eF182335e6bE8EF49a66a249ce', '0x7d7E43E359Af8CA455CA9D4124B54ADb59944c20');
    console.log('ICO address: ', ico.getAddress());
    Config.setConfig(network + '.ico', await ico.getAddress());

    await Config.updateConfig();
}

main().then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    });