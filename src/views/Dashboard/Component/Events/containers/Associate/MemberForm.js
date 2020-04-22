import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Modal from '../../../../../../component/Modal'
import useForm from '../../../../../../customHooks/useForm'
import addToEvent from '../../../../../../validation/member/addToEvent'

const MemberForm = props => {
    const { event_id, isOpenModal, isEditModal, closeModal, addHelperToEvent, current, updateHelpersToEvent } = props
    const onSubmitAddMember = () => {
        isEditModal ? updateHelpersToEvent(values, event_id) : addHelperToEvent(values,event_id)
    }
    const { values, setValues, errors, handleSubmit, handleChange } = useForm(onSubmitAddMember, addToEvent)
    useEffect(() => {
        if (current) {
            setValues(current)
        }
    }, [current])
    return (
        <>
            {
                isOpenModal &&
                <Modal title={isEditModal ? "Update Member " : "Add Member"} close={() => {
                    closeModal()
                    setValues('')
                }}>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Name" name="name"
                                value={values.name || ''}
                                onChange={handleChange}
                            />
                            {
                                errors.name ? <p className="is-danger">{errors.name}</p> : null
                            }
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control"
                                placeholder="Description" name="description"
                                value={values.description || ''}
                                onChange={handleChange}
                            />
                            {
                                errors.description ? <p className="is-danger">{errors.description}</p> : null
                            }
                        </div>
                        <button className="btn btn-sm btn-success">
                            {isEditModal ?"Update Member":"Add Member"}
                        </button>
                    </form>
                </Modal>
            }
        </>
    )
}

MemberForm.propTypes = {
    isOpenModal: PropTypes.bool,
    isEditModal: PropTypes.bool,
    closeModal: PropTypes.func,
    addHelperToEvent: PropTypes.func,
    updateHelpersToEvent: PropTypes.func,
    current:PropTypes.object
}

export default MemberForm
