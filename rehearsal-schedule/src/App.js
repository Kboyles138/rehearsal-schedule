import logo from './wildcat.png';
import './App.css';
import StandardCalendar from './components/calendar';
import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: 'default',
    };
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="CWU" />
          <h1 className="App-Title">
            CWU Rehearsal Calendar
        </h1>

        </header>
        <p>
          <StandardCalendar />
        </p>

      </div>
    );
  }
}

export default App;


