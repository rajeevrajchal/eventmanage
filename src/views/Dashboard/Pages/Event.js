import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import BreadCumb from '../../../component/BreadCumb'
import { connect } from 'react-redux'
import * as actions from '../../../redux/action'
import EventList from '../Component/Events/EventList'
import Spinner from '../../../component/Spinner'
import EventForm from '../Component/Events/EventForm'


const Event = props => {
    const {
        isLoading,
        isOpenModal,
        events,
        fetchEvents,
        storeEvent,
        openAddModal,
        closeModal,
        deleteEvent} = props
    
    useEffect(() => {
        fetchEvents()
    }, [fetchEvents])

    return (
        <>
            <BreadCumb title={'Events List'} />
            <div className="row">
                <div className="col-md-8">
                    <table className="table">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Presenter</th>
                                <th scope="col">Date</th>
                                <th scope="col">More</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                isLoading ? 
                                    <tr>
                                        <td>
                                            <Spinner />
                                        </td>
                                    </tr>
                                :
                                    events.map((event, index) => (
                                        <tr key={index}>
                                            <EventList event={event}
                                                isOpenModal={isOpenModal}
                                                openAddModal={openAddModal}
                                                closeModal={closeModal}
                                                deleteEvent={deleteEvent}
                                            />
                                        </tr>
                                    ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className="col-md-4">
                    <EventForm storeEvent={storeEvent}/>
                </div>
            </div>
        </>
    )
}

Event.propTypes = {
    events: PropTypes.array,
    isLoading: PropTypes.bool,
    isOpenModal: PropTypes.bool,
    openAddModal:PropTypes.func,
    deleteEvent:PropTypes.func

}

const mapStateToProps = state => {
    return {
        events: state.event.events,
        isLoading: state.loading.isLoading,
        isOpenModal:state.modal.isOpenModal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => dispatch(actions.fetchEvents()),
        storeEvent: (event) => dispatch(actions.storeEvent(event)),
        openAddModal: () => dispatch(actions.openAddModal()),
        closeModal: () => dispatch(actions.closeModal()),
        deleteEvent: (event) => dispatch(actions.deleteEvent(event)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event)
