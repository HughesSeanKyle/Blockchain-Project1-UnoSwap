const Token = artifacts.require('Token');
const Exchange = artifacts.require('Exchange');
const chai = require('./setupchai');

const BN = web3.utils.BN;
const expect = chai.expect;

require('dotenv').config({ path: '../.env' });

contract('Exchange', async (accounts) => {
    // First of 3 accounts provided by truffle 
    const [ initialHolder, recipient, anotherAccount ] = accounts;

    
    let supplyInWei = web3.utils.toWei(process.env.INITIAL_TOKENS, 'ether');
    let newToken;
    let exchange; 
    beforeEach(async () => {
        newToken = await Token.new('TestToken', 'T1', process.env.INITIAL_TOKENS);
        exchange = await Exchange.new(newToken.address);
    });

    it("Should check if contract was deployed", async () => {
        return expect(
            exchange.address
        ).to.exist; // not strictly (===) equal to either null or undefined
    });
});

/*
To this this file specifically 
- - test ./test/Exchange.test.js
*/