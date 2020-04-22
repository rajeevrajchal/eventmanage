import * as actionType from '../types'
import store from "../store";
import { database } from '../../firebase/firebase'
import * as actions from '../action'


export const getEvents = (event) => {
    return {
        type: actionType.GET_EVENT,
        eventPayload: event
    }
}

export const getEventsHelpers = (helper) => {
    return {
        type: actionType.GET_HELPER_EVENTS,
        payload: helper
    }
} 

export const fetchEvents = () => dispatch => {
    dispatch(actions.setLoading())
    let id = store.getState().auth.uid;
    database.ref(`/events/${id}`).once('value').then(snapshot => {
        const vals = snapshot.val();
        let _records = [];
        for (var key in vals) {
            _records.push({
                ...vals[key],
                id: key
            });
        }
        dispatch(getEvents(_records))
        dispatch(actions.closeLoading())
    })
}

export const storeEvent = (eventsData) => dispatch => {
    let id = store.getState().auth.uid;
    let e = store.getState().event.events
    e.push(eventsData)
    database.ref(`/events/${id}`).set(e).then(
        res => {
            dispatch(fetchEvents());
            dispatch(actions.showToast("Event Stored Successfully", "success"))
        }
    ).catch(error => {
        dispatch(fetchEvents());
        dispatch(actions.showToast("Cannot Store: Internal Server Error", "error"))
    })
}

export const deleteEvent = (event) => dispatch => {
    let id = store.getState().auth.uid;
    database.ref(`/events/${id}/${event.id}`).remove().then(
        res => {
            dispatch(actions.showToast("Event Deleted Successfully", "success"))
            dispatch(fetchEvents());
        }
    ).catch(error => {
        dispatch(actions.showToast("Cannot Delete: Internal Server Error", "error"))
    })
}

export const updateEventInfo = (event) => dispatch => {
    dispatch(actions.setLoading())
    let id = store.getState().auth.uid;
    // let events = store.getState().event.events[event.id]
    database.ref(`/events/${id}/${event.id}`).update(event).then(
        res => {
            dispatch(actions.closeModal());
            dispatch(actions.closeLoading())
            dispatch(fetchEvents())
            
        }
    ).catch(err => {
        console.log(err)
    })
}

//to add members 
export const getEventAssociatedHelpers = (e_id) => dispatch => {
    dispatch(actions.setLoading())
    let id = store.getState().auth.uid;
    database.ref(`/events/${id}/${e_id}/helpers`).once('value').then(snapshot => {
        const vals = snapshot.val();
        let _records = [];
        for (var key in vals) {
            _records.push({
                ...vals[key],
                id: key
            });
        }
        dispatch(actions.closeLoading())
        dispatch(getEventsHelpers(_records))

    }).catch(error => {
        console.log(error)
    });
}

export const addHelperToEvent = (helper, e_id) => dispatch => {
    let id = store.getState().auth.uid;
    let currentHelper = store.getState().event.events[e_id].helpers
    let Helpers = currentHelper ? currentHelper : []
    database.ref(`/events/${id}/${e_id}/helpers`).update([...Helpers, helper]).then(res => {
        dispatch(actions.closeModal());
        dispatch(actions.showToast("Helper is associated to event", "success"))
        dispatch(getEventAssociatedHelpers())
    }).catch(
        error => {
            dispatch(actions.showToast("Cannot Store: Internal Server Error", "error"))
        }
    );
}


export const updateHelpersToEvent = (helper, e_id) => dispatch => {
    let id = store.getState().auth.uid;
    database.ref(`/events/${id}/${e_id}/helpers/${helper.id}`).update(helper).then(
        res => {
            dispatch(actions.closeModal())
            dispatch(actions.showToast("Associated Helper Updated Successfully", "success"))
            dispatch(getEventAssociatedHelpers());
        }
    ).catch(error => {
        dispatch(actions.closeModal())
        dispatch(actions.showToast("Cannot Updated: Internal Server Error", "error"))
    })
}

export const deleteHelperFromEvent = (helper, e_id) => dispatch => {
    let id = store.getState().auth.uid;
    database.ref(`/events/${id}/${e_id}/helpers/${helper.id}`).remove().then(
        res => {
            dispatch(actions.showToast("Associated Helper Deleted Successfully", "success"))
            dispatch(getEventAssociatedHelpers());
        }
    ).catch(error => {
        dispatch(actions.showToast("Cannot Delete: Internal Server Error", "error"))
    })
}