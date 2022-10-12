async function main() {

    const BoxV2 = await ethers.getContractFactory("BoxV2");
    let box = await upgrades.upgradeProxy("0x5CF9813182e47EE573EF2a26687924b7A9A99BeD", BoxV2)
    console.log("Your upgraded proxy is done!", box.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
