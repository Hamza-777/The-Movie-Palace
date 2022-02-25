// import React, { useState, useEffect } from 'react';
import { makeRequest } from './request';
import './App.css';

function App() {
  const clickHandler = (e) => {
    makeRequest('all');
  }

  return (
    <div className="App">
      <button onClick={clickHandler}>Get Data</button>
    </div>
  );
}

export default App;
