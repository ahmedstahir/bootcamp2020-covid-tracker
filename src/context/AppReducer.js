export default (state, action) => {
    switch (action.type) {
        case 'SET_DATA_LOADING':
            return {
                ...state,
                isDataLoading: action.payload
            }
        case 'SET_GLOBAL_STATS_SUMMARY':
            return {
                ...state,
                globalStatsSummary: action.payload
            }
        case 'SET_COUNTRIES_LIST':
            return {
                ...state,
                countriesList: action.payload
            }
        default:
            return state;
    }
}