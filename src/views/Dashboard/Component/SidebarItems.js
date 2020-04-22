import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const SidebarItems = props => {
    const { item } = props
    return (
        <NavLink className={'side-bar-item'} to={'/dashboard' + item.link} activeClassName={'active'}>
            <i className="material-icons">{item.icon}</i><label>{item.label}</label>
        </NavLink>
    );
}
SidebarItems.propTypes = {
    items:PropTypes.object
}

export default SidebarItems
