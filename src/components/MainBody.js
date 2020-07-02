import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';
import Divider from '@material-ui/core/Divider';

import SummarizedFigures from './SummarizedFigures'
import CountryDropdown from './CountryDropdown'

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
    const { isDataLoading, setDataLoading, setGlobalStatsSummary, setCountriesList } = useContext(GlobalContext);

    const classes = useStyles();

    async function fetchDataFromApi() {
        setDataLoading(true);
        await setTimeout(async function () {
            const globalSummaryResponse = await fetch('https://disease.sh/v3/covid-19/all');
            const globalSummary = await globalSummaryResponse.json();
            setGlobalStatsSummary(globalSummary);

            const countriesListResponse = await fetch('https://disease.sh/v3/covid-19/countries');
            const countriesList = await countriesListResponse.json();
            setCountriesList(countriesList);

            setDataLoading(false);
        }, 2000);
    }

    useEffect(fetchDataFromApi, []);

  return (
      <div className={classes.root}>
          {!isDataLoading && <Grid container spacing={3}>
              <Grid item xs={3} style={{ backgroundColor: '#f7f7f7' }}>
                  <CountryDropdown />
                  <br />
                  <Divider variant="middle" />
                  <br />
                  <SummarizedFigures />
              </Grid>
              <Grid item xs={9}>
                  <Paper className={classes.paper}>xs</Paper>
              </Grid>
          </Grid>}
      </div>
  );
}
