import logo from './wildcat.png';
import './App.css';
import Checklist from './components/checklist';
import NewEventForm from './components/neweventform'
import Calendar from './components/calendar'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="CWU" />
          <h1 className="App-Title">
            CWU Rehearsal Calendar
          </h1>
        </header>
        <div className="newEvent">
          <NewEventForm />
        </div>
        <div className="float-container">
          <div className="float-child1">
            <Calendar />
          </div>
          <div className="float-child2">
            <Checklist />
          </div>
        </div>
      </div>      
    </>
  );
}


export default App;


