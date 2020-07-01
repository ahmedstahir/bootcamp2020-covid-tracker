import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import BackdropLoader from './BackdropLoader';
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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BackdropLoader />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" style={{ fontWeight: 'bold', paddingLeft: '5px'}}>
                        Total confirmed cases
                    </Typography>
                </Grid>
                <Grid item xs={9} style={{ backgroundColor: 'aqua' }}>
                    <Typography variant="h4" style={{ fontWeight: 'bold', paddingLeft: '5px', color: 'red' }}>
                        10,000,000
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    190,000
                </Grid>
                <Grid item xs={6}>
                    <img src={orangeDot} className={classes.dotImage} alt="Active cases" /> Active cases
                </Grid>
                <Grid item xs={6}>
                    4,600,000
                </Grid>
                <Grid item xs={6}>
                    <img src={greenDot} className={classes.dotImage} alt="Recovered cases" /> Recovered cases
                </Grid>
                <Grid item xs={6}>
                    4,600,000
                </Grid>
                <Grid item xs={6}>
                    <img src={redDot} className={classes.dotImage} alt="Fatal cases" /> Fatal cases
                </Grid>
                <Grid item xs={6}>
                    4,600,000
                </Grid>
            </Grid>
        </div>
    );
}
