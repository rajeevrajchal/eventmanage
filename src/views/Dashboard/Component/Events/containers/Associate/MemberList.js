import React from 'react'
import PropTypes from 'prop-types'

const MemberList = props => {
    const { event_id, helper, openEditModal, deleteHelperFromEvent } = props
    const editAssociuatedHelper = (helper) => {
        openEditModal(helper)
    }
    const deleteAssociatedHelper = (helper) => {
        deleteHelperFromEvent(helper, event_id)
    }
   
    return (
        <>
            <th scope="row">{helper.id}</th>
            <td>{helper.name}</td>
            <td>{helper.description}</td>
            <td>
                <button className="btn-sm" onClick={() => { editAssociuatedHelper(helper) }}>
                    <i className="tiny material-icons">edit</i>
                </button>

                <button className="btn-sm" onClick={() => { deleteAssociatedHelper(helper) }}>
                    <i className="tiny material-icons is-danger">delete</i>
                </button>
            </td>
        </>
    )
}

MemberList.propTypes = {
    member: PropTypes.object,
    openEditModal:PropTypes.func
}

export default MemberList
