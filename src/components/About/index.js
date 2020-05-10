import React from 'react';
import './index.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "../Divider";

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 5,
    border: 0,
    fontSize: 'large',
    padding: `${theme.spacing(1.5)}px ${theme.spacing(7)}px`,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  divider: {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      justifyContent: 'center',
    }
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className="about-root">
      <Container maxWidth="xl">
        <div className="about-wrapper">
          <div className="about-left">
            <Typography color="secondary" components="h3" variant="h2" className="about-title">
              <Box textAlign="right" fontWeight="fontWeightMedium" m={1}>About me</Box>
              <div className={`about-divider ${classes.divider}`}>
                <Divider />
              </div>
            </Typography>
          </div>
          <div className="about-right">
            <Typography color="secondary" component="p" variant="bod1">
              Student from Epitech France, I'm currently in Dublin City University studying computer science as an Erasmus Student.
              For more than three years, I have been carrying out projects for school and for internships. I also work as a freelancer on my free time.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};
