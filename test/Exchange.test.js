const Token = artifacts.require('Token');
const chai = require('./setupchai');

const BN = web3.utils.BN;
const expect = chai.expect;

require('dotenv').config({ path: '../.env' });

contract('Exchange', async (accounts) => {
    // First of 3 accounts provided by truffle 
    const [ initialHolder, recipient, anotherAccount ] = accounts;

    let supplyBeforeConvert = process.env.INITIAL_TOKENS;
    let supplyInWei = web3.utils.toWei(process.env.INITIAL_TOKENS, 'ether');
    let newToken;
    let exchange; 
    beforeEach(async () => {
        newToken = await Token.new('TestToken', 'T1', process.env.INITIAL_TOKENS);
    });

    it("Logs data", async () => {
        console.log(supplyBeforeConvert, supplyInWei);
    });
});