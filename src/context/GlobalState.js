import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    data: [],
    showLoader: false
}

//Create and export Context
export const GlobalContext = createContext(initialState);

//Create and export Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function setLoader(flag) {
        dispatch({
            type: 'SET_LOADER_FLAG',
            payload: flag
        });
    }

    //function addTransaction(transaction) {
    //    dispatch({
    //        type: 'ADD_TRANSACTION',
    //        payload: transaction
    //    });
    //}

    return (<GlobalContext.Provider value={{
        data: state.data,
        showLoader: state.showLoader,
        setLoader,
        //addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}