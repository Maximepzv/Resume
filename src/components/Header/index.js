import React from 'react';
import './index.css';
import { ReactComponent as Blob } from '../../assets/images/blob-shape.svg';
/*import {makeStyles} from '@material-ui/core/styles';*/
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

/*const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 5,
    border: 0,
    fontSize: 'large',
    height: 'auto',
    minHeight: '55px',
    width: '100%',
    maxWidth: '200px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: `${theme.spacing(2)}px 0 0 0`,
  },
}));*/

export default () => {
  /*const classes = useStyles();*/

  return (
      <header className="header-root">
        <Container maxWidth="xl">
          <div className="header-wrapper">
            <div className="header-left">
              <Typography variant="h1" component="h1" color="primary">Hi! I'm Maxime</Typography>
              <Typography variant="h2" component="h2" color="secondary">Developer Fullstack <br/>Freelance</Typography>
              {/*<Button size="large" variant="contained" color="primary" className={classes.root}>Hire me</Button>*/}
            </div>
            <div className="header-right">
              <Blob className="logo" />
            </div>
          </div>
        </Container>
      </header>
  );
};
