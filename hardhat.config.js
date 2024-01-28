require("@nomiclabs/hardhat-waffle");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();
//require("@nomicfoundation/hardhat-verify");
//require("@nomiclabs/hardhat-etherscan")

const { ALCHEMY_API_KEY, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

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
        apiKey:[ETHERSCAN_API_KEY],
    },
    networks: {
        sepolia: {
          url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
          accounts: [PRIVATE_KEY],
        },
      },
};
