'use strict';
// Chai required from node modules 
// BN from web3 
const chai = require('chai');
const BN = web3.utils.BN;

// This is from the tests in openZeppelin v122
// Chai-bn docs
// [https://www.chaijs.com/plugins/chai-bn/]
//      This allows a BN to be injected into the chai assertion framework
//      Basically we want to tell chai instructions that this is a valid
//          variable to use in it's assertion
const chaiBN = require('chai-bn')(BN);

// Tell node we want to use this throughout our project
chai.use(chaiBN);

// Chai as Promised extends Chai with a fluent language for asserting facts about promises.
    // See notes.md for resource 
const chaiAsPromised = require('chai-as-promised');
    // Tell node.js to use chaiAsPromised
chai.use(chaiAsPromised);
// Export this as a custom configured chai module with all the extensions  to use as one variable throughout project 
module.exports = chai;

/*
BIG NOTE FOR ABOVE 
- - THIS MODULE WAS PUT TOGETHER IN THE OPENZEPPELIN TEST HELPERS FILE. THERE ARE MORE LIKE THIS ON THEIR REPO ON GITHUB

*/