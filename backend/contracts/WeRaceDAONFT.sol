// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WeRaceDAONFT is ERC1155, Ownable {
    uint16 supply = 420;
    uint16 minted = 0;
    uint256 constant tokenID = 1;

    string private baseURI;
    string public name;

    constructor()
        ERC1155(
            "ipfs://QmZTq246LeKvPdidP2EgiXvueaHEaghwmR7Hu3z8tm1Etx"
        )
    {
        _mint(msg.sender, tokenID, 1, "");
        minted++;
        setName('WeRace DAO NFT');
    }

    function contractURI() public view returns (string memory) {
        return "ipfs://QmRqcJCNcywvno4jVW9tUPhw1r4mDe8qHms3ig7ZEANBoA";
    }

    function setURI(string memory _newuri) public onlyOwner {
        _setURI(_newuri);
    }

    function setName(string memory _name) public onlyOwner {
        name = _name;
    }

    function getRemaining() public view returns(uint){
        return supply-minted;
    }

    function checkMintBalance(address checkAddress) public view {
        require(balanceOf(checkAddress, 1) ==0, "This address already has minted the token");
    }

    function mint()
        public
    {   
        require(balanceOf(msg.sender, 1) ==0, "This address already has minted the token");
        require(minted <= supply, "NFTs are already minted");
        _mint(msg.sender, 1, 1, "");
        minted++;
    }
}