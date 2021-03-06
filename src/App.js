import logo from './wildcat.png';
import './App.css';

import NewEventForm from './components/neweventform';
import Calendar from './components/calendar';
import GlobalStyle from './styles/Global';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="CWU" />
          <h1 style={{paddingTop: '10px'}}className="App-Title">
            CWU Rehearsal Calendar
          </h1>
        </header>
        <div className="newEvent">
          <NewEventForm />
        </div>
        <Calendar />
      
    </div>      
    </>
  );
}


export default App;


