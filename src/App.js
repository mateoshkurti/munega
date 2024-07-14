import React from 'react'
import { HashRouter as Router, Route , Routes } from 'react-router-dom';
import { HOME } from './pages/home';
import { Partner } from './pages/partner';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<HOME />}/>
        <Route path="/partner" element= {<Partner />}/>
      </Routes>
    </Router>
  );
}

export default App;
