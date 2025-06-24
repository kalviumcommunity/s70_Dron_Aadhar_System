// src/App.jsx

import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>File Upload Feature</h1>
      <FileUpload />
    </div>
  );
}

export default App;
