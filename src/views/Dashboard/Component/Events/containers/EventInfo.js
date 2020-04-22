import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../../../redux/action'
import EventForm from '../EventForm'
import Spinner from '../../../../../component/Spinner'

const EventInfo = props => {
    const {
        event_id,
        events,
        updateEventInfo,
        isLoading
    } = props
    return (
        <>
            {
                isLoading ?
                    <Spinner /> :
                    <EventForm
                        event={events[event_id]}
                        updateEventInfo={updateEventInfo}
                    />
            }
            
        </>
    )
}

EventInfo.propTypes = {
    isLoading:PropTypes.bool,
    events:PropTypes.array,
    updateEventInfo:PropTypes.func
}

const mapStateToProps = state => {
    return {
        isLoading:state.loading.isLoading,
        events: state.event.events
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateEventInfo: (event) => dispatch(actions.updateEventInfo(event)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventInfo)
