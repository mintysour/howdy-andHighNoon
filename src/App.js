import { React, useEffect, useState } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import start from "./components/startpage/start";

function App() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={start}/>
      </div>
    </Router>
  );
}

export default App;
