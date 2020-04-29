import React from 'react';
import './index.css';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Blob } from '../../assets/images/blob-shape.svg';
import Button from '@material-ui/core/Button';
import withStyles from "@material-ui/core/styles/withStyles";

const ColorButton = withStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    backgroundColor: '#FFB633',
    '&:hover': {
      backgroundColor: '#FFB633',
    },
  },
}))(Button);

export default () => {
  return (
    <header className="header-root">
      <div className="header-left">
        <h1>Hi! I'm Maxime</h1>
        <h2>Developer Fullstack <br/> Freelance</h2>
        <ColorButton size="large" variant="contained" className="header-btn">Hire me</ColorButton>
      </div>
      <div className="header-right">
        <Blob className="header-shape" />
        <Logo className="header-logo" />
      </div>
    </header>
  );
};
