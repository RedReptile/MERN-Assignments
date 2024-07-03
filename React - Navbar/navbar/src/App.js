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
      <main>
        <section id="home">
          <h2>Home</h2>
          <p>Welcome to the Home section of Ciro - Mer.</p>
        </section>
        <section id="about">
          <h2>About</h2>
          <p>Learn more about Ciro - Mer.</p>
        </section>
        <section id="services">
          <h2>Services</h2>
          <p>Discover our services in Ciro - Mer.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Get in touch with us with Ciro - Mer.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
