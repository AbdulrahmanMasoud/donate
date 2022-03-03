import {useState,useEffect} from "react";
import React from 'react';
import './App.css';
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider';
import {loadContract} from "./utils/loadContract.js";

function App() {

  const [web3Api, setweb3Api] = useState({
    provider: null,
    web3: null,
    contract: null
  })

  useEffect(()=>{
    const loadProvider = async ()=>{
      const provider = await detectEthereumProvider()

      if(provider){
        // console.log('Ethereum successfully detected!')
        const contract = await loadContract("Donates",provider);
        
        setweb3Api({
          provider,
          web3:new Web3(provider),
          contract
        })

        // console.log(provider)
      }else{
        console.error("Pleas Install MetaMask")
      }
    }
    loadProvider();
  },[]);


const [account, setAccount] = useState(null);

useEffect(()=>{
  const getAccount = async()=>{
    const accounts = await web3Api.web3.eth.getAccounts();
    console.log(accounts);

    setAccount(accounts[0]);
  }
  web3Api.web3 && getAccount();
},[web3Api.web3]);

  return (
    <div className="App">
  <section className='App-header'>
      <div className='title'>
        <h1>Donate for us</h1>
      </div>

      <div className='address'>
        <p>
          <strong>Our Address: </strong>
          {
            account?
            <small className='color-light'>{account}</small>: <span>No account</span>
          }
        </p>
      </div>

      <div className='actions'>
        <div className='action-message'>
          You will donate us: <small className='color-light'>0.02 ETH</small>
        </div>
        <button className='donate btn'>Donate Us</button>
      </div>
    </section>
    </div>
  );
}

export default App;
