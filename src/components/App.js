import { React } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Start from './Start'; // Make sure to import the Start component
import Prologue from './Prologue'; // Ensure this path is correct
import './App.css';

function App() {
  return (
  <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/prologue" element={<Prologue />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;