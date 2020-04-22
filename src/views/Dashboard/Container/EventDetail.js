import React from 'react'
import PropTypes from 'prop-types'
import BreadCumb from '../../../component/BreadCumb'
import { useParams, Switch, Route } from 'react-router-dom'
import EventSideBar from '../Component/Events/EventSideBar'
import Participation from '../Component/Events/containers/Associate/Participation'

const EventDetail = props => {
    const event_id = useParams('id').id

    const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
    //pages
    const EventInfo = React.lazy(() => import('../Component/Events/containers/EventInfo'));
    const EventMembers = React.lazy(() => import('../Component/Events/containers/EventMembers'));

    return (
        <>
            <BreadCumb title={'Event Details'} />
            <div className="row">
                <div className="col-md-9">
                    <React.Suspense fallback={loading()}>
                        <Switch>
                            <Route path='/dashboard/events/:id/details/' render={(props) => <EventInfo {...props} event_id={event_id} />} exact/>
                            <Route path="/dashboard/events/:id/details/event-members" render={(props) => <EventMembers {...props} event_id={event_id} />} exact />
                            <Route path="/dashboard/events/:id/details/participations" render={(props) => <Participation {...props} event_id={event_id} />} exact />
                        </Switch>
                    </React.Suspense>
                </div>
                <div className="col-md-3">
                    <EventSideBar event_id={event_id}/>
                </div>
            </div>
        </>
    )
}

export default EventDetail
