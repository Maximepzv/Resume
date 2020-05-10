import React from 'react';
import './index.css';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Divider from "../Divider";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";

export default () => {
  return (
    <div className="experience-root">
      <Container maxWidth="xl">
        <div className="experience-wrapper">
          <Typography color="secondary" components="h4" variant="h2" className="experience-title">
            <Box textAlign="center" fontWeight="fontWeightMedium" m={1}>Experiences</Box>
            <div className="experience-divider">
              <Divider />
            </div>
          </Typography>
          <Stepper expanded orientation="vertical" className="experience-stepper">
            <Step expanded active>
              <StepLabel
                optional={"France Nantes 2016 - 2021"}
                className="experience-step-subtitle"
              >
                <Typography variant="body2" component="p" className="experience-step-title">European Institute of Technology</Typography>
              </StepLabel>
              <StepContent>
                <Typography className="experience-stepper-content" component="p" variant="bod1">Epitech, formerly European Institute of Information Technology is a private institution of higher education in general computer science.</Typography>
              </StepContent>
            </Step>
            <Step expanded active>
              <StepLabel
                optional={"Dublin, Ireland 2019 - Nowaday"}
                className="experience-step-subtitle"
              >
                <Typography variant="body2" component="p" className="experience-step-title">Dublin City University</Typography>
              </StepLabel>
              <StepContent>
                <Typography className="experience-stepper-content" component="p" variant="bod1">Dublin City University (abbreviated as DCU) is a university based on the Northside of Dublin, Ireland.</Typography>
              </StepContent>
            </Step>
            <Step expanded active>
              <StepLabel
                optional={"Freelancing, Feb. 2019 - Nowaday"}
                className="experience-step-subtitle"
              >
                <Typography variant="body2" component="p" className="experience-step-title">Software Developer at Teester</Typography>
              </StepLabel>
              <StepContent>
                <Typography className="experience-stepper-content" component="p" variant="subtitle1">Tech.: NodeJs, JavaScript, RabbitMQ, React, MySQL, GraphQL</Typography>
              </StepContent>
            </Step>
            <Step expanded>
              <StepLabel
                optional={"France, Nantes Apr. 2019 - Aug. 2019"}
                className="experience-step-subtitle"
              >
                <Typography variant="body2" component="p" className="experience-step-title">Interniship  Sw. Dev. at Teester</Typography>
              </StepLabel>
              <StepContent>
                <Typography className="experience-stepper-content" component="p" variant="subtitle1">Tech.: NodeJs, JavaScript, RabbitMQ, React, MySQL, Data-Driven Animation After Effect</Typography>
              </StepContent>
            </Step>
            <Step expanded>
              <StepLabel
                optional={"France, Nantes area Jan. 2019 - Mar. 2019"}
                className="experience-step-subtitle"
              >
                <Typography variant="body2" component="p" className="experience-step-title">Interniship  Sw. Dev. at Wysifood</Typography>
              </StepLabel>
              <StepContent>
                <Typography className="experience-stepper-content" component="p" variant="subtitle1">Tech.: NodeJs, Angular, RabbitMQ, MySQL</Typography>
              </StepContent>
            </Step>
            <Step expanded>
              <StepLabel
                optional={"France, Nantes Aug. 2017 - Dec. 2017"}
                className="experience-step-subtitle"
              >
                <Typography variant="body2" component="p" className="experience-step-title">Interniship  Sw. Dev. at Toovalu</Typography>
              </StepLabel>
              {/*<StepContent>
                <Typography className="experience-stepper-content" component="p" variant="bod1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a nibh volutpat, porta mauris sit amet, pellentesque lacus. <br/> Nullam semper tellus sit amet nunc luctus, quis iaculis enim pharetra.</Typography>
              </StepContent>*/}
            </Step>
          </Stepper>
        </div>
      </Container>
    </div>
  );
};
