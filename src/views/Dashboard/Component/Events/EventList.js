import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Modal from '../../../../component/Modal'
import EventDeleteModal from './EventDeleteModal'

const EventList = props => {
    const { event, isOpenModal, openAddModal, closeModal, deleteEvent } = props

    return (
        
        <>
            <th scope="row">{event.id}</th>
            <td>{event.name}</td>
            <td>{event.presenter}</td>
            <td>{event.est_date}</td>
            <td>
                <Link to={`/dashboard/events/${event.id}/details`}> Details </Link>
                <button className="btn btn-sm" onClick={ () =>{deleteEvent(event)} }>
                    <i className="tiny material-icons is-danger ">delete</i>
                </button>
            </td>
        </>
    )
}

EventList.propTypes = {
    event: PropTypes.object,
    openAddModal: PropTypes.func,
    closeModal: PropTypes.func
}

export default EventList
