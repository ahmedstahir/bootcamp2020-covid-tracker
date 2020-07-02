import React, { useContext } from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/GlobalState';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function BackdropLoader() {
    const { isDataLoading } = useContext(GlobalContext);
    const classes = useStyles();

    return (
    <div>
        <Backdrop className={classes.backdrop} open={isDataLoading}>
            <CircularProgress color="inherit" />
        </Backdrop>
    </div>
    );
}
