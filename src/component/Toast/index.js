import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './Toast.css'
import { connect } from 'react-redux';
import { closeToast } from '../../redux/action/toastAction';


const Toast = (props) => {
    const { isOpenToast, closeToast, message = "i lovr react", type = "success " } = props

    useEffect(() => {
        setTimeout(() => {
            closeToast()
        },2000)
    }, [isOpenToast])
    
    return (
        <>
            {
                isOpenToast ? (<div>
                    <div className={`alert alert-${type}`}>
                        <p>{message}</p>
                    </div>
                </div>): null
            }

        </>
    )

};
Toast.propTypes = {
    isOpenToast:PropTypes.bool,
    message:PropTypes.string,
    type:PropTypes.string,
    closeToast:PropTypes.func,
}
const mapStateToProps = state => {
    return {
        isOpenToast: state.toast.isOpenToast,
        message:state.toast.message,
        type:state.toast.types
    }
}
const mapDispatchToProps = dispatch => {
    return {
      closeToast: () => dispatch(closeToast())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toast)