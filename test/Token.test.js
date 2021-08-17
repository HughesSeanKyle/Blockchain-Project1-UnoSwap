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

// Process of creating a token to add to the exchange

// First arg of contract will return the test accounts provided by truffle
contract('Token Test', async (accounts) => {
    console.log(accounts);
    // First of 3 accounts provided by truffle 
    const [ initialHolder, recipient, anotherAccount ] = accounts;

    let newToken; 
    beforeEach(async () => {
        newToken = await Token.new('TestToken', 'T1', process.env.INITIAL_TOKENS);
    });

    // In the deploy script the 0 index account is set as the default interaction account
    // Therefore, the deployer account is the default used here. 
    it(`Should check the total supply equals deployer account balance`, async () => {
        let instance = newToken;
        let totalSupply = await instance.totalSupply();

        return expect(
            await instance.balanceOf(initialHolder)
        ).to.be.a.bignumber.equal(totalSupply);
    });

    it("I can send tokens from Account 1 to Account 2", async () => {
        const sendTokens = 1;
        let instance = newToken;
        let totalSupply = await instance.totalSupply();
        
        // No eventually needed as state of contract not being changed
        expect(await instance.balanceOf(initialHolder)).to.be.a.bignumber.equal(totalSupply);
        // Eventually used as state initialHolder balance has changed (decrease)
        expect(instance.transfer(recipient, sendTokens)).to.eventually.be.fulfilled;
        // No eventually needed as state of contract not being changed (just a comparison made on already changed data)
        expect(await instance.balanceOf(initialHolder)).to.be.a.bignumber.equal(totalSupply.sub(new BN(sendTokens)));
        // The state of the recipient account has already been updated by the transfer function. 
            // No eventually required as we are now just reading existing data
        expect(await instance.balanceOf(recipient)).to.be.a.bignumber.equal(new BN(sendTokens));
      });

      it("It's not possible to send more tokens than account 1 has", async () => {
        let instance = newToken;
        let balanceOfAccount = await instance.balanceOf(initialHolder);
        expect(instance.transfer(recipient, new BN(balanceOfAccount+1))).to.eventually.be.rejected;
  
        //check if the balance is still the same
        expect(await instance.balanceOf(initialHolder)).to.be.a.bignumber.equal(balanceOfAccount);
      });

      /*
        // Test still to be written
        - - 1. Test to see if funds can be transferred to an exchange
        - - 2. Test to see if the exchange address can be approved ()
            - - An ERC20 Token 
      */
    

});