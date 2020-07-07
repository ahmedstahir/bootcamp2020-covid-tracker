import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { GlobalContext } from '../context/GlobalState';
import NumberFormat from 'react-number-format';
import orangeDot from '../images/orange-dot.png';
import greenDot from '../images/green-dot.png';
import redDot from '../images/red-dot.png';
import blackDot from '../images/black-dot.png';
import blackCircle from '../images/black-circle.png';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minWidth: 275,
        marginLeft: '10px',
        marginRight: '10px',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '8px',
        marginRight: '8px',
        marginBottom: '0px',
        textAlign: 'left'
    },
    totalCases: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'darkred',
        marginLeft: '8px',
        marginRight: '8px',
        marginBottom: '15px',
        marginTop: '0px',
    },
    summaryFigure: {
        fontWeight: 'bold',
        marginLeft: '0px',
        marginRight: '8px',
        marginBottom: '0px',
        marginTop: '0px',
        textAlign: 'right'
    },
    divider: {
        marginBottom: '12px',
        marginTop: '12px',
    },
    showMoreButton: {
        fontWeight: 'bold',
    },
    dotImage: {
        height: '10px'
    }
}));

export default function SummarizedFigures() {
    const { globalStatsSummary, selectedCountry } = useContext(GlobalContext);
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const confirmedCases = selectedCountry ? selectedCountry.cases : (globalStatsSummary ? globalStatsSummary.cases : '');
    const activeCases = selectedCountry ? selectedCountry.active : (globalStatsSummary ? globalStatsSummary.active : '');
    const recoveredCases = selectedCountry ? selectedCountry.recovered : (globalStatsSummary ? globalStatsSummary.recovered : '');
    const criticalCases = selectedCountry ? selectedCountry.critical : (globalStatsSummary ? globalStatsSummary.critical : '');
    const fatalCases = selectedCountry ? selectedCountry.deaths : (globalStatsSummary ? globalStatsSummary.deaths : '');
    const todayActive = selectedCountry ? selectedCountry.todayCases : (globalStatsSummary ? globalStatsSummary.todayCases : '');
    const todayRecovered = selectedCountry ? selectedCountry.todayRecovered : (globalStatsSummary ? globalStatsSummary.todayRecovered : '');
    const todayFatal = selectedCountry ? selectedCountry.todayDeaths : (globalStatsSummary ? globalStatsSummary.todayDeaths : '');
    const tests = selectedCountry ? selectedCountry.tests : (globalStatsSummary ? globalStatsSummary.tests : '');
    const population = selectedCountry ? selectedCountry.population : (globalStatsSummary ? globalStatsSummary.population : '');

    const testsPerMillion = selectedCountry ? Number.parseFloat(selectedCountry.testsPerOneMillion).toFixed(2) : (globalStatsSummary ? Number.parseFloat(globalStatsSummary.testsPerOneMillion).toFixed(2) : '');
    const confirmedPerMillion = selectedCountry ? Number.parseFloat(selectedCountry.casesPerOneMillion).toFixed(2) : (globalStatsSummary ? Number.parseFloat(globalStatsSummary.casesPerOneMillion).toFixed(2) : '');
    const activePerMillion = selectedCountry ? Number.parseFloat(selectedCountry.activePerOneMillion).toFixed(2) : (globalStatsSummary ? Number.parseFloat(globalStatsSummary.activePerOneMillion).toFixed(2) : '');
    const recoveredPerMillion = selectedCountry ? Number.parseFloat(selectedCountry.recoveredPerOneMillion).toFixed(2) : (globalStatsSummary ? Number.parseFloat(globalStatsSummary.recoveredPerOneMillion).toFixed(2) : '');
    const fatalPerMillion = selectedCountry ? Number.parseFloat(selectedCountry.deathsPerOneMillion).toFixed(2) : (globalStatsSummary ? Number.parseFloat(globalStatsSummary.deathsPerOneMillion).toFixed(2) : '');
    const criticalPerMillion = selectedCountry ? Number.parseFloat(selectedCountry.criticalPerOneMillion).toFixed(2) : (globalStatsSummary ? Number.parseFloat(globalStatsSummary.criticalPerOneMillion).toFixed(2) : '');

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} variant="h6">
                    Total confirmed cases
                </Typography>
                <Typography variant="h4" className={classes.totalCases}>
                    <CountUp start={0} end={confirmedCases} duration={1.5} separator="," />
                </Typography>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                            <img src={orangeDot} className={classes.dotImage} alt="Active cases" />{'  '} Active cases
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" className={classes.summaryFigure}>
                            <NumberFormat value={activeCases} displayType={'text'} thousandSeparator={true} decimalScale={2} />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                            <img src={greenDot} className={classes.dotImage} alt="Recovered cases" />{'  '} Recovered cases
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" className={classes.summaryFigure}>
                            <NumberFormat value={recoveredCases} displayType={'text'} thousandSeparator={true} />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                            <img src={blackDot} className={classes.dotImage} alt="Fatal cases" />{'  '} Fatal cases
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" className={classes.summaryFigure}>
                            <NumberFormat value={fatalCases} displayType={'text'} thousandSeparator={true} />
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0}>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                            <img src={redDot} className={classes.dotImage} alt="Critical cases" />{'  '} Critical cases
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="body2" className={classes.summaryFigure}>
                            <NumberFormat value={criticalCases} displayType={'text'} thousandSeparator={true} />
                        </Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <Grid container spacing={0} style={{ textAlign: 'right' }}>
                    <Grid item xs={12}>
                        <Button
                            className={classes.showMoreButton}
                            size="small"
                            onClick={handleExpandClick}
                            variant="outlined"
                        >
                            {expanded ? 'Show Less' : 'Show More'}
                        </Button>
                    </Grid>
                </Grid>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Divider variant="middle" style={{ marginBottom: '10px', marginTop: '0px' }} />
                    <Typography variant="h6">
                        Last 24 hours
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={orangeDot} className={classes.dotImage} alt="New cases" />{'  '} New cases
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={todayActive} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={greenDot} className={classes.dotImage} alt="Recovered cases" />{'  '} Recovered cases
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={todayRecovered} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={blackDot} className={classes.dotImage} alt="Fatal cases" />{'  '} Fatal cases
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={todayFatal} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} variant="middle" />
                    <Typography variant="h6">
                        Tests
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={blackCircle} className={classes.dotImage} alt="Total tests" />{'  '} Total tests
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={tests} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={blackCircle} className={classes.dotImage} alt="Total population" />{'  '} Total population
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={population} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider className={classes.divider} variant="middle" />
                    <Typography variant="h6">
                        Per one million
                    </Typography>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={blackCircle} className={classes.dotImage} alt="Tests" />{'  '} Tests
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={testsPerMillion} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={blackCircle} className={classes.dotImage} alt="Confirmed cases" />{'  '} Confirmed cases
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={confirmedPerMillion} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={orangeDot} className={classes.dotImage} alt="Active cases" />{'  '} Active cases
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={activePerMillion} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={greenDot} className={classes.dotImage} alt="Recovered cases" />{'  '} Recovered cases
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={recoveredPerMillion} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={blackDot} className={classes.dotImage} alt="Fatal cases" />{'  '} Fatal cases
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={fatalPerMillion} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <Typography variant="subtitle2" style={{ fontWeight: 'bold', paddingLeft: '5px' }}>
                                <img src={redDot} className={classes.dotImage} alt="Critical cases" />{'  '} Critical cases
                        </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="body2" className={classes.summaryFigure}>
                                <NumberFormat value={criticalPerMillion} displayType={'text'} thousandSeparator={true} />
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Collapse>
        </Card>
    );
}
