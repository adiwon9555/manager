import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING } from "./types";
import firebase from 'firebase';
import { Actions } from "react-native-router-flux";

export const emailChange = (payload) => {
    return {
        type: EMAIL_CHANGED,
        payload
    }
}

export const passwordChange = (payload) => {
    return {
        type: PASSWORD_CHANGED,
        payload
    }
}

export const onLogin = (payload) => {
    const { email, password } = payload;
    return (dispatch) => {
        dispatch({ type: LOGIN_LOADING })
        firebase.auth().signInWithEmailAndPassword(email, password).then(user => {
            loginSuccess(dispatch, user);
        }).catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password).then(user => {
                loginSuccess(dispatch, user);
            }).catch((error) => {
                console.log('Authentication Error: ', error);

                dispatch({ type: LOGIN_FAILED, payload: { errorMessage: 'Authentication Error' } })
            });
        });
    }
}

const loginSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_SUCCESS, payload: user });
    Actions.main();
}

