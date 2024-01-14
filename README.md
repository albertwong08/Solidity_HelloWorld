This is a hello world solidity program which is quite a good start to solidity development. This program is a simple one which has function to view, change and append the message stored on blockchain.
The following steps are to clone the code, complie the code, test the code, deploy the stuff to Sepolia and call the deployed Hello World program.

1. To begin with, please clone the whole set of codes to your disk space using git command:
git clone https://github.com/albertwong08/Solidity_HelloWorld.git

2. Set the current directory to Solidity_HelloWorld
cd Solidity_HelloWorld

3. Install hardhat using the command:
npm install --save-dev hardhat

4. Create a .env file at the Solidity_Helloworld folder. In the .env file, put the following lines:
   ALCHEMY_API_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
   PRIVATE_KEY = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"

5. Now, compile the smart contract using npx hardhat combile.
   You should be able to see that compile is success
6. To test the smart contract, run npx hardhat test. This will run the javascript helloworld-test.js saved under test.
  
7. To deploy the smart contract, run npx hardhat run scripts/deploy.js --network sepolia
   You should be able to see the results like below:
   Deploying contracts with the account: XXXXXXXXXXXXXXXXXXXXXXXXXXX
   Account balance: XXXXXXXXXXXXXXXXXX
   Token address: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   The token address is where the contract is deployed to.
9. 
