import { useEffect } from 'react';
import { ethers } from "hardhat";
import Assetmgt from "./path/to/Assetmgt.json"; // you can get this after compiling/deploying smart contract

const Contract = () => {
  let contract;
  useEffect(() => {
    async function connectToNetwork() {
        // Connect to the local Hardhat network
        const provider = await ethers.getDefaultProvider();
        const signer = await provider.getSigner();
        // Connect to the deployed smart contract
        contract = await ethers.getContractAt(Assetmgt.abi, Assetmgt.address, signer);
    }
    connectToNetwork();
  }, []);

  const addUser = async (userAddress, userName, userAge, userInitialValue) => {
    const tx = await contract.addUser(userAddress, userName, userAge, userInitialValue);
    console.log(tx);
  }

  const getUser = async (userAddress) => {
    const user = await contract.getUser(userAddress);
    console.log(user);
  }

  const getCurrentValue = async (userAddress) => {
    const currentValue = await contract.getCurrentValue(userAddress);
    console.log(currentValue);
  }

  const transfer = async (recipient, amount) => {
    const tx = await contract.transfer(recipient, amount);
    console.log(tx);
  }

  return (
    <div>
      <h1>Contract Page</h1>
      <button onClick={() => addUser("address", "name", 20, 100)}>Add User</button>
      <button onClick={() => getUser("address")}>Get User</button>
      <button onClick={() => getCurrentValue("address")}>Get Current Value</button>
      <button onClick={() => transfer("address", 10)}>Transfer</button>
    </div>
  );
};

export default Contract;
