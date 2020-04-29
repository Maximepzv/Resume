import React from 'react';
import './index.css';
import { ReactComponent as Logo } from './logo.svg';
import { ReactComponent as LinkedInLogo } from './linkedin.svg';
import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as EmailLogo } from './email.svg';

export default (props) => {
  return (
    <div className="root">
      <header className="header">
        <Logo fill="white" className="logo" />
        <p>
          Site under construction
        </p>
        <div>
          <a href="https://github.com/Maximepzv" target="_blank" rel="noopener noreferrer"><GithubLogo className="social-logo"/></a>
          <a href="https://www.linkedin.com/in/maximepzv/" target="_blank" rel="noopener noreferrer"><LinkedInLogo className="social-logo"/></a>
          <a href="mailto:maxime.pouezevara@epitech.eu"><EmailLogo className="social-logo"/></a>
        </div>
      </header>
    </div>
  );
};
