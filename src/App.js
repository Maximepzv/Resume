import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LinkedInLogo } from './linkedin.svg';
import { ReactComponent as GithubLogo } from './github.svg';
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
          <GithubLogo onClick={()=> window.open("https://github.com/Maximepzv", "_blank")} className="Social-logo"/>
          <LinkedInLogo onClick={()=> window.open("https://www.linkedin.com/in/maximepzv/", "_blank")} className="Social-logo"/>
        </div>
      </header>
    </div>
  );
}

export default App;
