// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../../src/Safe.sol";

contract SafeTest is Test {
    Safe safe;

    receive() external payable {}

    function setUp() public {
        safe = new Safe();
    }

    function testWithdraw1() public {
        payable(address(safe)).transfer(1 ether);
        uint256 preBalance = address(this).balance;
        safe.withdraw();
        uint256 postBalance = address(this).balance;
        assertEq(preBalance + 1 ether, postBalance);
    }

    function testWithdraw2(uint96 _amount) public {
        vm.assume(_amount > 0.1 ether);
        payable(address(safe)).transfer(_amount);
        uint256 preBalance = address(this).balance;
        safe.withdraw();
        uint256 postBalance = address(this).balance;
        assertEq(preBalance + _amount, postBalance);
    }
}