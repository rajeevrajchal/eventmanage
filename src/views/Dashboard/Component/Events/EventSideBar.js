import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const EventSideBar = props => {
    const { event_id } = props
    let sideBarItems = [
        { label: 'Event Info', link: '', icon: 'assignment' },
        { label: 'Members', link: 'event-members', icon: 'supervisor_account' },
        { label: 'Cost Estimation', link: 'event-members', icon: 'credit_card' },
        { label: 'Partipication', link: 'participations', icon: 'contacts' },
        { label: `Event Photo's`, link: 'event-members', icon: 'perm_media' },
    ];
    return (
        <div className="profile-sidebar">
            <div className="sidebar-items extra-sidebar">
                {
                    sideBarItems.map((item, i) => (
                        <NavLink className={'side-bar-item'} to={`/dashboard/events/${event_id}/details/` + item.link} activeClassName={'active'} key={i}>
                            <i className="tiny material-icons">{item.icon}</i>{item.label}
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}

EventSideBar.propTypes = {
    event_id:PropTypes.string
}

export default EventSideBar
