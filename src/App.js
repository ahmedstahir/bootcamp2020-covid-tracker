import React from 'react';
import { GlobalProvider } from './context/GlobalState'
import BackdropLoader from './components/BackdropLoader';
import HeaderBar from './components/HeaderBar'
import Grid from '@material-ui/core/Grid';
import MainBody from './components/MainBody'

function App() {
    return (
        <GlobalProvider>
            <BackdropLoader />
            <Grid container spacing={0} xs={12}>
                <Grid item xs={12}>
                    <HeaderBar />
                    <MainBody />
                </Grid>
            </Grid>
        </GlobalProvider>
  );
}

export default App;
