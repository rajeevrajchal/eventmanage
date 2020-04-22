import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../../../redux/action'
import MemberForm from './Associate/MemberForm'
import MemberList from './Associate/MemberList'

const EventMembers = props => {
    const {
        event_id,
        isOpenModal,
        isEditModal,
        openAddModal,
        openEditModal,
        closeModal,
        helpers,
        getEventAssociatedHelpers,
        addHelperToEvent,
        current,
        updateHelpersToEvent,
        deleteHelperFromEvent } = props
    
    useEffect(() => {
        getEventAssociatedHelpers(event_id)
    }, [helpers])
    
    return (
        <>
            <MemberForm
                event_id={event_id}
                isOpenModal={isOpenModal}
                isEditModal={isEditModal}
                closeModal={closeModal}
                addHelperToEvent={addHelperToEvent}
                current={current}
                updateHelpersToEvent={updateHelpersToEvent}
                
            />
            
            <div className="row">
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Works</th>
                            <th scope="col" className="evnet-add-button">
                                <div className="title">
                                    Actions
                                 </div>
                                <div className="add_members">
                                    
                                    <button className="btn btn-sm btn-primary" onClick={() => openAddModal()}>
                                        <i className="tiny material-icons">add</i>
                                    </button>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            helpers.map((helper,index) => {
                                return (
                                    <tr key={index}>
                                        <MemberList
                                            event_id={event_id}
                                            helper={helper}
                                            openEditModal={openEditModal}
                                            deleteHelperFromEvent={deleteHelperFromEvent}
                                        />
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

EventMembers.propTypes = {
    event_id: PropTypes.string,
    isOpenModal: PropTypes.bool,
    isEditModal: PropTypes.bool,
    openAddModal:PropTypes.func,
    openEditModal: PropTypes.func,
    current:PropTypes.object,
    closeModal:PropTypes.func,
    helpers:PropTypes.array,
    getEventAssociatedHelpers:PropTypes.func,
    updateHelpersToEvent:PropTypes.func,
    addHelperToEvent:PropTypes.func,
    deleteHelperFromEvent:PropTypes.func,
}

const mapStateToProp = (state) => {
    return {
        isOpenModal: state.modal.isOpenModal,
        isEditModal: state.modal.isEditModal,
        helpers: state.event.helpers,
        current:state.modal.currentState
    }
}
const mapDispatchToProp = dispatch => {
    return {
        openAddModal: () => dispatch(actions.openAddModal()),
        openEditModal: (helper) => dispatch(actions.openEditModal(helper)),
        closeModal: () => dispatch(actions.closeModal()),
        getEventAssociatedHelpers: (event_id) => dispatch(actions.getEventAssociatedHelpers(event_id)),
        addHelperToEvent: (helper, event_id) => dispatch(actions.addHelperToEvent(helper, event_id)),
        updateHelpersToEvent: (helper, event_id) => dispatch(actions.updateHelpersToEvent(helper, event_id)),
        deleteHelperFromEvent: (helper, event_id) => dispatch(actions.deleteHelperFromEvent(helper, event_id))
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(EventMembers)
