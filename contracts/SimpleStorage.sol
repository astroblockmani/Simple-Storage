pragma solidity ^0.5.0;

contract SimpleStorage {
  uint public data;

  function set(uint _data) public {
    data = _data;
  }

  function get() public view returns(uint) {
    return data;
  }
}
