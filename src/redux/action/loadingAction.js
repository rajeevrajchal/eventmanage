import * as actionType from '../types'

export const setLoading = () => {
    return {
        type: actionType.SET_LOADING,
    }
}
export const closeLoading = () => {
    return {
        type: actionType.CLEAR_LOADING,
    }
}