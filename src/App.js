import React from 'react';
import './App.css';
import ThingOne from './ThingOne'
import ThingTwo from './ThingTwo'
import ThingThree from './ThingThree'
import ThingFour from './ThingFour'

function App() {
  return (
    <div className="App">
      <h1>Test</h1>
      <ThingOne thePropOne="Tabby" />
      <ThingTwo thePropTwo="Kelly" />
      <ThingThree />
      <ThingFour />
    </div>
  );
}



export default App;
