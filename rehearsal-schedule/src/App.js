import logo from './wildcat.png';
import './App.css';
import StandardCalendar from './components/calendar';
import Checklist from './components/checklist';
import Form from './components/neweventform'
import React from 'react';
import ReactDom from 'react-dom';
import { render } from '@testing-library/react';
import Form from './components/neweventform.js';
import Button from 'react-bootstrap/button';
import Dialog from 'react-bootstrap/ModalDialog'



function App() {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="CWU" />
          <h1 className="App-Title">
            CWU Rehearsal Calendar
          </h1>
        </header>
        <div>
        </div>
        <div className="newEvent">
          <Button variant="primary" onClick={handleShow}>Add new event</Button>
        </div>
        <div className="float-container">
          <div className="float-child1">
            <StandardCalendar />
          </div>
          <div className="float-child2">
            <Checklist />
          </div>
        </div>
        <p>
          <Checklist />
        </p>
        <p>
          <Form />
        </p>
      </div>
    </>
  );
}


export default App;


