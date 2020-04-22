import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import useForm from '../../../../customHooks/useForm'
import UserValidation from '../../../../validation/auth/UserValidation'

const ProfileUpdateForm = props => {
    const { user, updateUser } = props
    const onSubmitUpdateUser = () => {
        console.log('hello world')
        console.log(values)
        updateUser(values);
    }
    const { values, errors, handleChange, validateData, handleSubmit, setValues} = useForm(onSubmitUpdateUser,UserValidation)
    
    useEffect(() => {
        setValues(user)
    }, [user])

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input type="text" name="displayName"
                    className="form-control" placeholder="Company Name"
                    value={values.displayName || ''}
                    onChange={handleChange}
                    onBlur={validateData}
                />
                {
                    errors.displayName ? <p className="is-danger">{errors.displayName}</p> : null
                }
            </div>
            <div className="form-group">
                <input type="email" name="email"
                    className="form-control" placeholder="Email Address"
                    value={values.email || ''}
                    onChange={handleChange}
                    onBlur={validateData}
                />
                {
                    errors.email ? <p className="is-danger">{errors.email}</p> : null
                }
            </div>
            <div className="form-group">
                <input type="phoneNumber" name="phoneNumber"
                    className="form-control" placeholder="Contact Number"
                    value={values.phoneNumber || ''}
                    onChange={handleChange}
                    onBlur={validateData}
                />
                {
                    errors.phoneNumber ? <p className="is-danger">{errors.phoneNumber}</p> : null
                }
            </div>
            <button className="btn btn-success form-control">Update Info</button>
        </form>
    )
}

ProfileUpdateForm.propTypes = {
    user: PropTypes.object,
    updateUser: PropTypes.func
}

export default ProfileUpdateForm
