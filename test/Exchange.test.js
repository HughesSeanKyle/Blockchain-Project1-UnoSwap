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

    // Helpers 
    const toWei = (unitInEth) => {
        return web3.utils.toWei(`${unitInEth}`, 'ether');
    };
    
    const fromWei = (unitInWei) => {
        return web3.utils.fromWei(`${unitInWei}`, "ether" )
    };


    beforeEach(async () => {
        newToken = await Token.new('TestToken', 'T1', supplyInWei);
        exchange = await Exchange.new(newToken.address);
    });

    it("Should check if contract was deployed", async () => {
        return expect(
            exchange.address
        ).to.exist; // not strictly (===) equal to either null or undefined
    });

    describe("addLiquidity function", async () => {
        
        it("adds liquidity", async () => {
            let instance = newToken;
            await instance.approve(exchange.address, toWei(180));
            let exchangeBal = await web3.eth.getBalance(exchange.address);
            // let exchangeBalConv = fromWei(exchangeBal.toNumber());
            
            let initialHolderBalBefore = await web3.eth.getBalance(initialHolder);

            await exchange.addLiquidity(toWei(180), { value: toWei(90) });

            let initialHolderBalAfter = await web3.eth.getBalance(initialHolder);
            
            console.log(exchangeBal);
            console.log(initialHolderBalBefore, initialHolderBalAfter);

    
            // expect(await getBalance(exchange.address)).to.equal(toWei(100));
            // expect(await exchange.getReserve()).to.equal(toWei(200));
        });
    
      });
});

/*
To this this file specifically 
- - test ./test/Exchange.test.js

- - To fix below error just restart truffle console then run test again 
    - - Error: Returned error: sender doesn't have enough funds to send tx. The upfront cost is: 90134439500000000000 and the sender's account only has: 8692480260000000000
    - - OR
    - - Reset the workspace in Ganache
        - - Very tedious...

*/