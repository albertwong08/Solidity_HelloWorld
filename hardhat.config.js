require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
//require("@nomicfoundation/hardhat-verify");
//require("@nomiclabs/hardhat-etherscan")

const { ALCHEMY_API_KEY, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
/**module.exports = {
  solidity: "0.8.18",
  defaultNetwork: "goerli",
    networks: {
        hardhat: {},
        goerli: {
            url: API_URL,
            accounts: [`0x${PRIVATE_KEY}`]
        }
    },
};*/
module.exports = {
    solidity: "0.8.18",
    etherscan: {
        apiKey:"38R2V9RP59DVU13TYBU23DSQA3QAJ5V2F8",
    },
    networks: {
        sepolia: {
          url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
          accounts: [PRIVATE_KEY],
        },
      },
};
