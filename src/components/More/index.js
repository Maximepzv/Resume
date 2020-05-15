import React from 'react';
import './index.css';
import {makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 5,
    border: 0,
    fontSize: 'large',
    padding: `${theme.spacing(1.5)}px ${theme.spacing(7)}px`,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  divider: {
    margin: 0,
    width: '15vh',
    backgroundColor: '#fff',
    height: '5px',
    borderRadius: 1,
  },
  dividerContainer: {
    display: 'flex',
    justifyContent: 'left',
    [theme.breakpoints.down('xs')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  },
  wave: {
    backgroundColor: '#F4F4F4',
    marginBottom: '-50px',
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div>
      <svg className={classes.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFB633" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,218.7C384,192,480,160,576,122.7C672,85,768,43,864,69.3C960,96,1056,192,1152,229.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="more-root">
        <Container maxWidth="xl">
          <div className="more-wrapper">
            <Typography components="h3" variant="h2" className="more-title">
              <Box textAlign="center" fontWeight="fontWeightMedium" m={1}>More incoming...</Box>
              <div className={`more-divider ${classes.dividerContainer}`}>
                <Divider variant="middle" classes={{ middle: classes.divider }} />
              </div>
            </Typography>
          </div>
          <Typography color="secondary" components="p" variant="h6" className="more-content">Check the social links below to know about my stack</Typography>
        </Container>
      </div>
    </div>

  );
};
