export default (state, action) => {
    switch (action.type) {
        case 'SET_LOADER_FLAG':
            return {
                ...state,
                showLoader: action.payload
            }
        //case 'ADD_TRANSACTION':
        //    return {
        //        ...state,
        //        transactions: [action.payload, ...state.transactions]
        //    }
        default:
            return state;
    }
}