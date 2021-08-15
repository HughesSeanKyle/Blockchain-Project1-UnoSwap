// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Exchange {
  address public tokenAddress;

  constructor(address _token) {
    require(_token != address(0), "invalid token address");

    tokenAddress = _token;
  }

  // Create liquidity pool with created token 
  function addLiquidity(uint256 _tokenAmount) public payable {
    IERC20 token = IERC20(tokenAddress);
    token.transferFrom(msg.sender, address(this), _tokenAmount);
  }

	// Get the balance of token in pool 
	function getReserve() public view returns (uint256) {
  	return IERC20(tokenAddress).balanceOf(address(this));
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
				// This function is used as opposed to the payable modifier
					// The payable modifier is used to send eth to a contract and 
						// makes it possible for that contract to receive eth  
					// The transferFrom function is used to send a ERC20 token to a 
						// contract (as per the ERC20 Standard and interface)
		// To make it more expilcit that a contract will be receiving an storing eth directly on the contract
			// The 'receive' method should be used in conjuction with payable modifier. 
				// Resource - [https://ethereum.stackexchange.com/questions/81994/what-is-the-receive-keyword-in-solidity/81995]
// 5. Add helper function to view the reserve of a particular pool inside exchange contract 
	// Make function public to be called from anywhere
	// Use view to ensure that state cannot be changed 
	// Specify that the function will return a uint 
	// Use the IERC20 interface 
