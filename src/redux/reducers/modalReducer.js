import * as actionType from '../types'

const initialState = {
    isOpenModal: false,
    isEditModal: false,
    currentState:[]
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case actionType.ADD_MODAL:
            return {
                ...state,
                isOpenModal: true
            };
        case actionType.EDIT_MODAL:
            return {
                ...state,
                isOpenModal: true,
                currentState:actions.payload,
                isEditModal:true
            };
        case actionType.CLOSE_MODAL:
            return {
                initialState
            };

        default:
            return state
    }
}