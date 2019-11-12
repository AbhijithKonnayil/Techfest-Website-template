import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <About/>
    </div>
  );
}

export default App;
