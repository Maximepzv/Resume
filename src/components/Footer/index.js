import React from 'react';
import './index.css';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ReactComponent as LinkedIn } from '../../assets/images/linkedin.svg';
import { ReactComponent as Malt } from '../../assets/images/malt.svg';
import { ReactComponent as GithubLogo } from "../../assets/images/github.svg";
import { ReactComponent as EmailLogo } from "../../assets/images/email.svg";

export default () => {

  return (
    <div className="footer-root">
      <Container maxWidth="xl">
        <div className="footer-wrapper">
          <Typography color="primary" components="p" variant="h4" className="footer-title">
            <Box textAlign="center" fontWeight="fontWeightMedium" m={1}>Maximepzv</Box>
          </Typography>
          <div className="footer-social-container">
            <a href="https://www.linkedin.com/in/maximepzv/" target="_blank" rel="noopener noreferrer" className="footer-social-button"><LinkedIn className="footer-social-svg"/></a>
            <a href="https://www.malt.fr/profile/maximepzv" target="_blank" rel="noopener noreferrer" className="footer-social-button"><Malt className="footer-social-svg"/></a>
            <a href="https://github.com/Maximepzv" target="_blank" rel="noopener noreferrer" className="footer-social-button"><GithubLogo className="footer-social-svg"/></a>
            <a href="mailto:maxime.pouezevara@epitech.eu" className="footer-social-button"><EmailLogo className="footer-social-svg"/></a>
          </div>
        </div>
      </Container>
    </div>
  );
};
