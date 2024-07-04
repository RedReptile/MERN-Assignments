import React from 'react';
import Navbar from './Navbar'; // Import the Navbar component
import './App.css'; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
