import * as actionTypes from '../types'
import {firebase,database} from '../../firebase/firebase'

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const fetchDescription = (desc) => {
    return {
        type: actionTypes.PROFILE_DETAIL,
        description: desc
    }
};

export const authSuccess = (authUser) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        user: authUser,
    }
};

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const checkAuthentication = () => dispatch => {
    dispatch(authStart)
    let authUser = localStorage.getItem('authUser');
    if (authUser) {
        const userData = JSON.parse(authUser);
        dispatch(authSuccess(userData))
    } else {
        dispatch(authLogout)
    }
};

export const loginUser = (authData) => dispatch => {
    dispatch(authStart)
    firebase.auth().signInWithEmailAndPassword(authData.email, authData.password).then(res => {
        if (res) {
            let user = firebase.auth().currentUser
            localStorage.setItem('authUser', JSON.stringify(user));
            dispatch(authSuccess(user))
        }
    }).catch(error => {
        dispatch(authFail(error.message))
    })
}

export const logout = () => dispatch => {
    dispatch(authStart())
    firebase.auth().signOut().then(res => {
        localStorage.removeItem('authUser');
        dispatch(authLogout());
    }).catch(error => {
        dispatch(authFail(error.message))
    })
};

export const updateUser = (authUser) => dispatch => {
    dispatch(authStart())
    let user = firebase.auth().currentUser
    user.updateProfile({
        displayName: authUser.displayName,
        phoneNumber: authUser.phoneNumber,
        email:authUser.email
    }).then(res => {
        localStorage.removeItem('authUser');
        localStorage.setItem('authUser', JSON.stringify(user));
        dispatch(authSuccess(user))
    }).catch(function (error) {
        dispatch(authFail(error.message))
    });
}

export const updateDescription = (description) => dispatch => {
    let user = firebase.auth().currentUser
    database.ref(`users/${user.uid}`).update(description).then(
        res => {
            dispatch(fetchProfileDescription())
        }
    ).catch(error => {
        console.log(error)
    })
}

export const fetchProfileDescription = () => dispatch => {
    let user = firebase.auth().currentUser
    database.ref(`users/${user.uid}`).once('value').then(
        snap => {
            dispatch(fetchDescription(snap.val()))
        }
    )
}