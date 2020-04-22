import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import Sidebar from '../Container/Sidebar'
import { connect } from 'react-redux'
import * as actions from '../../../redux/action'
import Dash from './Dash'




const Dashboard = props => {
    const { logout, user } = props
    const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
    //pages
    const Profile = React.lazy(() => import('./Profile'));
    const Event = React.lazy(() => import('./Event'));
    const EventDetail = React.lazy(() => import('../Container/EventDetail'));
    
    return (
        <>
            <section className={'dashboard'}>
                <Sidebar logout={logout} user={user} />
                <div className="dashboard-content">
                    <React.Suspense fallback={loading()}>
                        <Switch>
                            
                            <Route path="/dashboard" component={Dash} exact />
                            <Route path="/dashboard/profile" component={Profile} exact/>
                            <Route path="/dashboard/events" component={Event} exact/>
                            <Route path="/dashboard/events/:id/details" component={EventDetail}  />
                        </Switch>
                    </React.Suspense>
                </div>
            </section>
        </>
    )
}

Dashboard.propTypes = {
    logout: PropTypes.func,
    user: PropTypes.object
}
const mapStateToProps = (state) => {
    return {
        user: state.auth.authUser ? state.auth.authUser : { 'displayName': "rajeev" }
    }
}
const mapDisptachToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(Dashboard)
