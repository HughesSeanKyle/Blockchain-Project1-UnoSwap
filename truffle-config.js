const path = require("path");
require("dotenv").config({path: "./.env"}); 
const HDWalletProvider = require("@truffle/hdwallet-provider");

// The mnemonic will generate accounts
// This variable will give an instructions as to which one to use
// Hardware wallet resource - [https://github.com/trufflesuite/truffle/blob/develop/packages/hdwallet-provider/README.md] 
const AccountIndex = 0; 

module.exports = {
  networks: {
    // Ganache is 7545 (set inside app)
    // Truffle development is 9545 
    development: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 5777,
      chainId: 1337
    },
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(process.env.MNEMONIC, "http://127.0.0.1:7545", AccountIndex)
      },
      network_id: 5777
    }

    // SET Up development on the testnet here 
    /*
    ropsten: {
      // provider: () =>
      //   new HDWalletProvider(
      //     mnemonic,
      //     `https://ropsten.infura.io/v3/${infuraKey}`
      //   ),
      provider: new HDWalletProvider(
        mnemonic,
        `https://ropsten.infura.io/v3/${infuraKey}`
      ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    */
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      // Changed compiler to test setup 
      version: ">=0.6.0 <=0.8.4",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },

};
