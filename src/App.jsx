import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/project" element={<Project></Project>} />
      </Routes>
    </Router>
  );
}

export default App;
