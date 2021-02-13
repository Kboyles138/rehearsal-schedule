import logo from './wildcat.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="CWU" />
        <h1 className="App-Title">
          CWU Rehearsal Calendar
        </h1>
      </header>
      <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
    </div>
  );
}

export default App;
