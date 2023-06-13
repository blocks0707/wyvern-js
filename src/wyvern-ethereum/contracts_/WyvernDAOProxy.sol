/*

  << Project Wyvern DAO Proxy >>

*/

pragma solidity 0.5.16;

import "./dao/DelegateProxy.sol";

/**
 * @title WyvernDAOProxy
 * @author Project Wyvern Developers
 */
contract WyvernDAOProxy is DelegateProxy {

    constructor ()
        public
    {
        owner = msg.sender;
    }

}
