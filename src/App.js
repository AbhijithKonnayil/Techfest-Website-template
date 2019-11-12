import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav';
import About from './components/about';
import Workshops from './components/workshops';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
      <Workshops/>
    </div>
  );
}

export default App;
