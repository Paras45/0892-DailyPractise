import React from 'react';
import './App.css';
import Header from './Component/Header/header';
import About from './Component/Client/About';

function App() {
  return (
    <div className="App">
      {/* <Header />
      <h1> h1 heading</h1>
      <h1>{name}</h1>
      <h1>{12+8}</h1>
      <h1>{x ? "yes" : "no"}</h1> */}
      {/* <Header title={12}></Header> */}
      <About></About>
    </div>
  );
}

export default App;