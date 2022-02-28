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
        console.log('Ethereum successfully detected!')
        const contract = await loadContract("Donates",provider);
        setweb3Api({
          provider,
          web3:new Web3(provider),
          contract
        })

        console.log(provider)
      }else{
        console.error("Pleas Install MetaMask")
      }
    }
    loadProvider();
  },[]);



  return (
    <div className="App">
  <section className='App-header'>
      <div className='title'>
        <h1>Donate for us</h1>
      </div>

      <div className='address'>
        <p>
          <strong>Our Address: </strong>
          <small className='color-light'>0x5732493df2be20ab49c408ca149c3eb78b9dc015520705144716d691e2573488</small>
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
