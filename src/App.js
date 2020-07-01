import React from 'react';
import { GlobalProvider } from './context/GlobalState'
import HeaderBar from './components/HeaderBar'
import MainBody from './components/MainBody'

function App() {
    return (
        <GlobalProvider>
            <>
                <HeaderBar />
                <MainBody />
            </>
        </GlobalProvider>
  );
}

export default App;
