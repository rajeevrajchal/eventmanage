import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../../../redux/action'
import useForm from '../../../customHooks/useForm'
import login from '../../../validation/auth/login'
import { Link } from 'react-router-dom'

const Login = props => {

    const { loginUser } = props
    const onSubmitLogin = () => {
        loginUser(values)
        setValues('')
    }
    const { values, errors, handleChange, handleSubmit, validateData, setValues } = useForm(onSubmitLogin, login )
    return (
        <div className="signin">
            <div className="card-title"> Login Here </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="email" className="form-control"
                        name="email" placeholder="your email " onChange={handleChange} onBlur={validateData}/>
                    {
                        errors.email ? <p className="is-danger">{errors.email}</p> : null
                    }
                </div>
                <div className="form-group">
                    <input type="password" className="form-control"
                        name="password" placeholder="******" onChange={handleChange} onBlur={validateData} />
                    {
                        errors.password ? <p className="is-danger">{errors.password}</p> : null
                    }
                </div>
                <p><Link to="#">Forgert Your Password</Link></p>
                <button className="btn btn-sm btn-primary">Sign In</button>
                <br />
                <br />
                <p><Link to="/register">Don't Have Account, Don't worry click me</Link></p>
            </form>
        </div>
    )
}

Login.propTypes = {
    loginUser:PropTypes.func
}
const mapDispatchToProps = dispatch => {
    return {
        loginUser: (authData) => dispatch(actions.loginUser(authData))
    }
}

export default connect(null,mapDispatchToProps)(Login)
