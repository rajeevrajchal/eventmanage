import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../../../component/Modal'

const EventDeleteModal = props => {
    const { event, isOpenModal, openAddModal, closeModal, deleteEvent } = props
    return (
        <>
            {
                isOpenModal ?
                    <Modal title={'Confirmation'} close={closeModal}>
                        <div className="conformation-button">
                            <button className="btn btn-md btn-danger" >
                                Yes
                            </button>
                            <button className="btn btn-md  btn-success" onClick={closeModal}>
                                No
                            </button>
                        </div>
                    </Modal> : null
            }
        </>
    )
}

EventDeleteModal.propTypes = {

}

export default EventDeleteModal
