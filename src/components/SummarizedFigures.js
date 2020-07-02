import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/GlobalState';
import NumberFormat from 'react-number-format';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import orangeDot from '../images/orange-dot.png';
import greenDot from '../images/green-dot.png';
import redDot from '../images/red-dot.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    shape: {
        backgroundColor: theme.palette.primary.main,
        width: 10,
        height: 10,
    },
    shapeCircle: {
        borderRadius: '50%',
    },
    dotImage: {
        height: '10px'
    }
}));

export default function SummarizedFigures() {
    const { globalStatsSummary } = useContext(GlobalContext);

    const classes = useStyles();

    const confirmedCases = globalStatsSummary ? globalStatsSummary.cases : '';
    const todayCases = globalStatsSummary ? globalStatsSummary.todayCases : '';
    const activeCases = globalStatsSummary ? globalStatsSummary.active : '';
    const recoveredCases = globalStatsSummary ? globalStatsSummary.recovered : '';
    const fatalCases = globalStatsSummary ? globalStatsSummary.deaths : '';

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" style={{ fontWeight: 'bold', paddingLeft: '5px'}}>
                        Total confirmed cases
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant="h4" style={{ fontWeight: 'bold', paddingLeft: '5px', color: 'darkred' }}>
                        <NumberFormat value={confirmedCases} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Tooltip title="New cases over the last 24 hours">
                        <Typography variant="caption" style={{ fontWeight: 'bold', color: 'gray', backgroundColor: 'lightgray' }}>
                            <NumberFormat value={todayCases} displayType={'text'} thousandSeparator={true} />
                        </Typography>
                    </Tooltip>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                        <img src={orangeDot} className={classes.dotImage} alt="Recovered cases" /> Active cases
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                        <NumberFormat value={activeCases} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                        <img src={greenDot} className={classes.dotImage} alt="Recovered cases" /> Recovered cases
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                        <NumberFormat value={recoveredCases} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                        <img src={redDot} className={classes.dotImage} alt="Recovered cases" /> Fatal cases
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="body2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                        <NumberFormat value={fatalCases} displayType={'text'} thousandSeparator={true} />
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}
