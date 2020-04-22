import React from 'react'
import PropTypes from 'prop-types'
import SidebarItems from '../Component/SidebarItems';


const Sidebar = props => {
    const {logout, user} = props
    let sideBarItems = [
        { label: 'Dashboard', link: '', icon: 'dashboard' },
        { label: 'Events', link: '/events', icon: 'event' },
        { label: 'Members', link: '/members', icon: 'supervisor_account' },
        { label: 'Profile', link: '/profile', icon: 'portrait' },
    ];
    return (
        <div className={'sidebar'}>
            <div className="profile">
                <div className="profile-picture">
                    <img class="company-image"src="https://img.icons8.com/plasticine/2x/user.png" alt="" />
                </div>
                
                <div className="profile-details">
                    <div className="profile-name">{user.displayName}</div>
                    <div className="profile-name">{user.email}</div>
                </div>
            </div>
            
            <div className="sidebar-items">
                {
                    sideBarItems.map((item, i) => (
                        <SidebarItems item={item} key={i}/>
                    ))
                }

                <div className={'side-bar-item'} onClick={() => logout()}>
                    <i className="material-icons">exit_to_app</i>Logout
                </div>
                
            </div>
            
        </div>
    );
}

Sidebar.propTypes = {
    logout:PropTypes.func,
    user:PropTypes.object,
}

export default Sidebar
