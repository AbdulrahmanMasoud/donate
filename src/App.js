import './App.css';

function App() {
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
