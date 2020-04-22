import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useForm from '../../../../customHooks/useForm'
import eventValidation from '../../../../validation/event/eventValidation'

const EventForm = props => {
    const { storeEvent, event, updateEventInfo } = props
    const [label, setLabel] = useState('Create Event')

    const onSubmitStoreEvent = () => {
        if (event) {
            updateEventInfo(values)
        } else {
            storeEvent(values)
        }
        
    }
    const { values, errors, handleChange, validateData, handleSubmit, setValues } = useForm(onSubmitStoreEvent, eventValidation)
    useEffect(() => {
        if (event) {
            setValues(event)
            setLabel('Update Event')
        }
    }, [event])

    return (
        <div className="add-event-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control"
                        name="name" placeholder="Event Name"
                        value={values.name || ''}
                        onChange={handleChange} onBlur={validateData}
                    />
                    {
                        errors.name ? <p className="is-danger">{errors.name}</p> : null
                    }
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        name="topic" placeholder="Topic of event"
                        value={values.topic || ''}
                        onChange={handleChange} onBlur={validateData}
                    />
                    {
                        errors.topic ? <p className="is-danger">{errors.topic}</p> : null
                    }
                </div>
                <div className="form-group">
                    <input type="text" className="form-control"
                        name="presenter" placeholder="Presenter"
                        value={values.presenter || ''}
                        onChange={handleChange} onBlur={validateData}
                    />
                    {
                        errors.presenter ? <p className="is-danger">{errors.presenter}</p> : null
                    }
                </div>
                <div className="form-group">
                    <input type="date" className="form-control"
                        name="est_date" placeholder="Estimated Date"
                        value={values.est_date || ''}
                        onChange={handleChange} onBlur={validateData}
                    />
                    {
                        errors.est_date ? <p className="is-danger">{errors.est_date}</p> : null
                    }
                </div>
                <button className="btn btn-sm btn-success">
                    { label }
                </button>
            </form>
        </div>
    )
}

EventForm.propTypes = {
    event: PropTypes.object,
    storeEvent:PropTypes.func
}

export default EventForm
