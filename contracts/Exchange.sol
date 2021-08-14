// SPDX-License-Identifier: MIT
// 1. Create a token with Token contract 
// 2. Initialize that contract address with Exchange constructor
    // List new token on exchanges
// 3. Make sure address exists before deploying to exchange
contract Exchange {
  address public tokenAddress;

  constructor(address _token) {
    require(_token != address(0), "invalid token address");

    tokenAddress = _token;
  }
}