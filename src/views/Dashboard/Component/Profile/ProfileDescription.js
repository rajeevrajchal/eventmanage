import React, { useEffect} from 'react'
import PropTypes from 'prop-types'
import useForm from '../../../../customHooks/useForm'
import UserProfile from '../../../../validation/auth/UserProfile'


const ProfileDescription = props => {
    const { updateDescription, userDescription } = props
    const storeProfileDescription = () => {
        updateDescription(values)
    }

    useEffect(() => {
        if (userDescription) {
            setValues(userDescription)
        } 
    }, [userDescription])
   
    const { values, errors, handleChange, handleSubmit,setValues} = useForm(storeProfileDescription, UserProfile)
    return (
        <div className="form-group">
            <label htmlFor=""> Description </label>
            <textarea
                name="description" id=""
                rows="7" className="form-control"
                value={values === null ? '' : values.description } onChange={handleChange} onBlur={handleSubmit}>
            </textarea>    
            {
                errors.description ? <p className="is-danger">{errors.description}</p> : null
            }
        </div>
    )
}

ProfileDescription.propTypes = {
    updateDescription:PropTypes.func,
    userDescription:PropTypes.object
}

export default ProfileDescription
