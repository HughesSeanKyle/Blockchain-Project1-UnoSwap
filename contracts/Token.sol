// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Initial Supply to msg.sender address. 
// Create LP Token for user when providing liquidity 
contract Token is ERC20 {
  constructor(
    string memory name,
    string memory symbol,
    uint256 initialSupply
  ) ERC20(name, symbol) {
      _mint(msg.sender, initialSupply);
  }
}

