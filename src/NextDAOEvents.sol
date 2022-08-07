// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import "solmate/tokens/ERC1155.sol";
import "solmate/auth/Owned.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NextDAOEvents is ERC1155, Owned {
    using Strings for uint256;

    string public constant name = "NextDAO Events";
    string public baseURI;

    constructor(address _owner, string memory _uri) Owned(_owner) {
        baseURI = _uri;
    }

    function create(
        address recipient,
        uint256[] calldata ids,
        uint256[] calldata amounts
    ) external onlyOwner {
        _batchMint(recipient, ids, amounts, "");
    }

    function burn(
        address from,
        uint256[] calldata ids,
        uint256[] calldata amounts
    ) external onlyOwner {
        _batchBurn(from, ids, amounts);
    }

    function uri(uint256 id) public view override returns (string memory) {
        return bytes(baseURI).length > 0 ? string(abi.encodePacked(baseURI, id.toString())) : "";
    }

    function updateBaseURI(string calldata _uri) external onlyOwner {
        baseURI = _uri;
    }
}
