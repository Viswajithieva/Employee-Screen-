import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import Login from "./login";
import Signup from "./Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
