import * as actionType from '../types'

const initialState = {
    events: [],
    helpers: [],
    error: [],
    current: []
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case actionType.GET_EVENT:
            return {
                ...state,
                events: actions.eventPayload,
            };
        case actionType.UPDATE_EVENT:
            return {
                ...state
            };
        case actionType.GET_HELPER_EVENTS:
            return {
                ...state,
                helpers:actions.payload
            };
        case actionType.DELETE_EVENT:
            return {
                initialState
            };
        default:
            return state
    }
}