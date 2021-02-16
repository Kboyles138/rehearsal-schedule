import logo from './wildcat.png';
import './App.css';
import StandardCalendar from './components/calendar';
import React from 'react';
import ReactDom from 'react-dom';


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
        <StandardCalendar/>
      </p>
      
    </div>
  );
}

export default App;
