module.exports = {
  networks: {
    // Ganache is 7545 (set inside app)
    // Truffle development is 9545
    development: {
      host: 'localhost',
      port: 8545,
      gas: 6000000,
      network_id: '*' // Match any network id
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
    // timeout: 100000
  },

};
