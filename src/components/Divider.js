import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  divider: {
    margin: 0,
    width: '15vh',
    backgroundColor: theme.palette.primary.main,
    height: '5px',
    borderRadius: 1
  }
}));

const MyDivider = () => {
  const classes = useStyles();

  return (
      <Divider variant="middle" classes={{ middle: classes.divider }} />
  );
};

export default MyDivider;
