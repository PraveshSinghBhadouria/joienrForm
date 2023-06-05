import React, { Component } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import JoinerForm from './components/Administrator/JoinerForm/JoinerForm';
import DisplayJoiner from './components/Administrator/JoinerForm/DisplayJoinerForm';
function App() {
  return (
     
    <Router>
    <Routes>
    <Route  element={<JoinerForm/>} path="/"   ></Route>
    <Route  element={<DisplayJoiner/>} path="/DisplayJoiner"   ></Route>
    </Routes>
    </Router>
  );
}

export default App;
