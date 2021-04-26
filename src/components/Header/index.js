import React from 'react';
import './index.css';
import { ReactComponent as Blob } from '../../assets/images/blob-shape.svg';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const Header = () => {

  return (
      <header className="header-root">
        <Container maxWidth="xl">
          <div className="header-wrapper">
            <div className="header-left">
              <Typography variant="h1" component="h1" color="primary">Hi! I'm Maxime</Typography>
              <Typography variant="h2" component="h2" color="secondary">Developer Fullstack <br/>Freelance</Typography>
            </div>
            <div className="header-right">
              <Blob className="logo" />
            </div>
          </div>
        </Container>
      </header>
  );
};

export default Header;
