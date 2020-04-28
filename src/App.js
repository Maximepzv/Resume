import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LinkedInLogo } from './linkedin.svg';
import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as EmailLogo } from './email.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo fill="white" className="App-logo" />
        <p>
          Site under construction
        </p>
        <div>
          <a href="https://github.com/Maximepzv" target="_blank" rel="noopener noreferrer"><GithubLogo className="Social-logo"/></a>
          <a href="https://www.linkedin.com/in/maximepzv/" target="_blank" rel="noopener noreferrer"><LinkedInLogo className="Social-logo"/></a>
          <a href="mailto:maxime.pouezevara@epitech.eu"><EmailLogo className="Social-logo"/></a>
        </div>
      </header>
    </div>
  );
}

export default App;
