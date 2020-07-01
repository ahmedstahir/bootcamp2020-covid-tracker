import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SummarizedFigures from './SummarizedFigures'

const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainBody() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
            <SummarizedFigures />
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>xs</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
