import React from 'react';
import { GlobalProvider } from './context/GlobalState'
import BackdropLoader from './components/BackdropLoader';
import HeaderBar from './components/HeaderBar'
import MainBody from './components/MainBody'
import Ahmed from './components/Ahmed'

function App() {
    return (
        <GlobalProvider>
            <BackdropLoader />
            <HeaderBar />
            <MainBody />
            <Ahmed />
        </GlobalProvider>
  );
}

export default App;
