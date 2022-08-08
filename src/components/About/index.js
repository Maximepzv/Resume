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

const About = () => {
  const classes = useStyles();

  return (
    <div className="about-root">
      <Container maxWidth="lg">
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
            Young developer from Nantes. Former student of Epitech and Duclin City University in Ireland.
            I'm growing professionally on various design and development projects. With an appetite for web technologies.
            I'm currently working as a full time lead developer at <a href="https://skeepers.io/fr/" target="_blank" rel="noopener noreferrer" className="about-link-skeepers">Skeepers</a> in the video and web domain, mainly in Javascript, NodeJs and React.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
