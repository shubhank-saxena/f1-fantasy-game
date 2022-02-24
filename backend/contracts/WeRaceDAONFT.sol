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
            "ipfs://Qmf8cqD7M2Bk7juRLG3vSrq4mpty32wuGBpeqhxkWPCJPV"
        )
    {
        _mint(msg.sender, tokenID, 1, "");
        minted++;
        setName('WeRace NFT DAO Token');
    }

    function contractURI() public view returns (string memory) {
        return "ipfs://QmYY7FMvLcgKgnzJb61q1gvLqpxSoR2N4g2gpkoGfKszQ2";
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