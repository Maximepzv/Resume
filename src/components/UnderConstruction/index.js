import React from 'react';
import './index.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as LinkedInLogo } from '../../assets/images/linkedin.svg';
import { ReactComponent as GithubLogo } from '../../assets/images/github.svg';
import { ReactComponent as EmailLogo } from '../../assets/images/email.svg';

const UnderConstruction = () => {
  return (
    <div>
      <span className="construction-background" />
      <div className="construction-root">
        <Logo fill="white" className="construction-logo" />
        <p className="construction-title">
          Site under construction
        </p>
        <div className="construction-links">
          <a href="https://github.com/Maximepzv" target="_blank" rel="noopener noreferrer"><GithubLogo className="construction-social-logo" /></a>
          <a href="https://www.linkedin.com/in/maximepzv/" target="_blank" rel="noopener noreferrer"><LinkedInLogo className="construction-social-logo" /></a>
          <a href="mailto:maxime.pouezevara@epitech.eu"><EmailLogo className="construction-social-logo" /></a>
        </div>
      </div>
    </div>

  );
};

export default UnderConstruction;
