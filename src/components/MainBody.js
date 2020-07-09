import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';
import Divider from '@material-ui/core/Divider';

import SummarizedFigures from './SummarizedFigures'
import CountryDropdown from './CountryDropdown'
import VisualDetails from './VisualDetails'

const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
        marginTop: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(10),
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
        }, 1500);
    }

    useEffect(fetchDataFromApi, []);

  return (
      <div className={classes.root}>
          {!isDataLoading && <Grid container spacing={0} xs={12}>
              <Grid item xs={3} style={{ backgroundColor: '#f0f0f0', height: '81vh' }}>
                  <div style={{ marginLeft: '20px' }}>
                      <CountryDropdown /></div>
                  <br />
                  <div>
                      <Divider variant="middle" /></div>
                  <br />
                  <div>
                      <SummarizedFigures /></div>
              </Grid>
              <Grid item xs={9} style={{ padding: '1px' }}>
                  <VisualDetails />
              </Grid>
          </Grid>}
      </div>
  );
}
