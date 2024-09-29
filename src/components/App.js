import { React } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Start from './Start'; // Make sure to import the Start component
import Prologue from './Prologue'; // Ensure this path is correct
import PrologueParty from './PrologueParty';
import PrologueMorning from './PrologueMorning';
import Suspect from './suspect'; // Import the Suspect component
import Neighbor from './neighbor';
import Bartender from './bartender';
import Sheriff from './sheriff';
import Mayor from './mayor';
import './App.css';

function App() {
  return (
    <div className="fixed-size-container">
      <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Start />} />
              <Route path="/prologue" element={<Prologue />} />
              <Route path="/prologueparty" element={<PrologueParty />} />
              <Route path="/prologuemorning" element={<PrologueMorning />} />
              <Route path="/suspect" element={<Suspect />} />
              <Route path="/bartender" element={<Bartender />} />
              <Route path="/sheriff" element={<Sheriff />} />
              <Route path="/neighbor" element={<Neighbor />} />
              <Route path="/mayor" element={<Mayor />} />
            </Routes>
          </div>
      </Router>
    </div>
    );
}

export default App;