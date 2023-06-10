import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import JoinerForm from './components/Administrator/JoinerForm/JoinerForm';
import DisplayJoiner from './components/Administrator/JoinerForm/DisplayJoiner';
import OnboardForm from './components/Administrator/OboardForm/OnbaordForm';
import DisplayOnboard from './components/Administrator/OboardForm/DisplayOnboard';
import DashBoard2 from './components/Administrator/DashBoard2';
function App() {
  return (
     
    <Router>
    <Routes>
    <Route  element={<JoinerForm/>} path="/"   ></Route>
    <Route  element={<DisplayJoiner/>} path="/DisplayJoiner"   ></Route>
    <Route  element={<OnboardForm/>} path="/OnboardForm"   ></Route>
    <Route  element={<DisplayOnboard/>} path="/DisplayOnboard"   ></Route>
    <Route  element={<DashBoard2/>} path="/DashBoard2"   ></Route>
    </Routes>
    </Router>
  );
}

export default App;
