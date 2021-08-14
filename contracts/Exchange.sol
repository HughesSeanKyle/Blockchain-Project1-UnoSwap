// SPDX-License-Identifier: MIT

contract Exchange {
  address public tokenAddress;

  constructor(address _token) {
    require(_token != address(0), "invalid token address");

    tokenAddress = _token;
  }

  function addLiquidity(uint256 _tokenAmount) public payable {
    IERC20 token = IERC20(tokenAddress);
    token.transferFrom(msg.sender, address(this), _tokenAmount);
    }
}

// 1. Create a token with Token contract 
// 2. Initialize that contract address with Exchange constructor
    // List new token on exchanges
// 3. Make sure address exists before deploying to exchange
// 4. Creating function for adding liquidity 
    // Make ERC token comply with ERC standards by passing through IERC20 interface (Token (contract) will not deploy otherwise)
        // Resource - [https://ethereum.stackexchange.com/questions/60940/what-is-ierc20]
    // Use transferFrom function from IERC20 Interface to 
        // Transfer token to this exchange contract address and 
            // allocate the amount