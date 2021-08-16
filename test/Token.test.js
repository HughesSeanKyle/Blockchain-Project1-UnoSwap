// Converts MyToken contract to json and makes it usable with JS
// artifacts is an internal truffle command  
const Token = artifacts.require('Token');

// Require custom made module which injects BN into chai
// Brings in Chai as promised for asserting output that returns a promise
const chai = require('./setupchai');
// Assign BN from web3 to be used in Chai
// Both actual values (the values being asserted) and expected values (the values the actual value is expected to match) can be either instances of BN, or strings which can be converted into a valid number.
    // Resource - [https://www.chaijs.com/plugins/chai-bn/] 
const BN = web3.utils.BN;
// Use expect assertion method 
const expect = chai.expect;

// Require in CONSTANT variables from .env file 
require('dotenv').config({ path: '../.env' });

// First arg of contract will return the test accounts provided by truffle
contract('Token Test', async (accounts) => {
    console.log(accounts);
    // First of 3 accounts provided by truffle 
    const [deployerAccount, recipient, anotherAccount] = accounts;

    let newToken; 
    beforeEach(async () => {
        newToken = await Token.new('Unoswap', 'UNO', process.env.INITIAL_TOKENS);
    });

    // In the deploy script the 0 index account is set as the default interaction account
    // Therefore, the deployer account is the default used here. 
    it(`Should check the total supply equals deployer account balance`, async () => {
        let instance = newToken;
        let totalSupply = await instance.totalSupply();
        let deployerAccBalance = await instance.balanceOf(deployerAccount);

        return expect(
            deployerAccBalance
        ).to.be.a.bignumber.equal(totalSupply);
    });

});