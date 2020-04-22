import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import BreadCumb from '../../../component/BreadCumb'
import ProfileSidebar from '../Component/Profile/ProfileSidebar'
import ProfileUpdateForm from '../Component/Profile/ProfileUpdateForm'
import ProfileDescription from '../Component/Profile/ProfileDescription'
import { connect } from 'react-redux'
import * as actions from '../../../redux/action'

const Profile = props => {
    const {
        user,
        updateUser,
        updateDescription,
        fetchProfileDescription,
        userDescription
    } = props

    useEffect(() => {
        fetchProfileDescription()
    }, [])
    
    return (
        <>
            <div className="container">
                <BreadCumb title={'Your Information'} />
                <br />
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="profile-image">
                                    <img src={user.photoURL || 'https://img.icons8.com/plasticine/2x/user.png'} alt="" />
                                    <input type="file" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <ProfileUpdateForm user={user} updateUser={updateUser}/>
                            </div>
                        </div>
                        <div className="description">
                            <ProfileDescription updateDescription={updateDescription} userDescription={userDescription}/>
                        </div>
                    </div>
                    <div className="col-md-3">
                            <ProfileSidebar/>
                    </div>
                </div>
            </div>
        </>
    )
}

Profile.propTypes = {
    user: PropTypes.object,
    userDescription: PropTypes.object,
    updateUser:PropTypes.func,
    updateDescription:PropTypes.func,
    fetchProfileDescription:PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        user: state.auth.authUser, 
        userDescription: state.auth.profileDescription, 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateUser: (authUser) => dispatch(actions.updateUser(authUser)),
        updateDescription: (description) => dispatch(actions.updateDescription(description)),
        fetchProfileDescription: () => dispatch(actions.fetchProfileDescription())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
