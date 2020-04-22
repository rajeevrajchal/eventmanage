import * as actionType from '../types'

export const openAddModal = () => {
    return {
        type: actionType.ADD_MODAL
    }
};
export const openEditModal = (data) => {
    return {
        type: actionType.EDIT_MODAL,
        payload:data
    }
};

export const closeModal = () => {
    return {
        type: actionType.CLOSE_MODAL
    }
};