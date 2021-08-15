const Token = artifacts.require("./Token.sol");

require('dotenv').config({ path: '../.env' });

module.exports = async function(deployer) {
  await deployer.deploy(Token, 'Unoswap', 'UNO', process.env.INITIAL_TOKENS);
  console.log(Token);
};
