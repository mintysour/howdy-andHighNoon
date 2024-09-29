import { React } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Start from './Start'; // Make sure to import the Start component
import Prologue from './Prologue'; // Ensure this path is correct
import PrologueParty from './PrologueParty';
import PrologueMorning from './PrologueMorning';
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
            </Routes>
          </div>
      </Router>
    </div>
    );
}

export default App;