import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    isDataLoading: false,
    globalStatsSummary: null,
    countriesList: []
}

//Create and export Context
export const GlobalContext = createContext(initialState);

//Create and export Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function setDataLoading(flag) {
        dispatch({
            type: 'SET_DATA_LOADING',
            payload: flag
        });
    }

    function setGlobalStatsSummary(summary) {
        dispatch({
            type: 'SET_GLOBAL_STATS_SUMMARY',
            payload: summary
        });
    }

    function setCountriesList(countries) {
        dispatch({
            type: 'SET_COUNTRIES_LIST',
            payload: countries
        });
    }

    return (<GlobalContext.Provider value={{
        isDataLoading: state.isDataLoading,
        globalStatsSummary: state.globalStatsSummary,
        countriesList: state.countriesList,
        setDataLoading,
        setGlobalStatsSummary,
        setCountriesList
    }}>
        {children}
    </GlobalContext.Provider>);
}