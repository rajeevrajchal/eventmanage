import * as actionType from '../types'

const initialState = {
    isOpenToast: false,
    message: '',
    types:''
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case actionType.SHOW_TOAST:
            return {
                ...state,
                isOpenToast: true,
                message: actions.message,
                types: actions.types,
            };
        case actionType.CLOSE_TOAST:
            return {
                initialState
            };

        default:
            return state
    }
}