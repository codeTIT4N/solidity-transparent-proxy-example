async function main() {

  const Box = await ethers.getContractFactory("Box");
  console.log('Deploying proxy, box implementation, and proxy admin...');
  const boxProxy = await upgrades.deployProxy(Box, [42], { initializer: 'store' })
  // this will deploy the proxy contract. Note: It only gonna deploy all 3 the first time we do this
  // The 2nd time we call deployProxy it'll only deploy the implementation
  console.log("BoxProxy deployed to:", boxProxy.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
