import * as actionType from '../types'

const initialState = {
    isLoading: false,
};

export default (state = initialState, actions) => {
    switch (actions.type) {

        case actionType.SET_LOADING:
            return {
                isLoading: true
            };

        case actionType.CLEAR_LOADING:
            return {
                isLoading: false
            };
        default:
            return state;
    }
}