import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, LOGIN_FAILED, LOGIN_LOADING } from "../actions";

const INITIAL_STATE = {
    email: '',
    password: '',
    errorMessage: null,
    showSpinner: false,
    user: null
};
export default authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_LOADING:
            return { ...state, showSpinner: true, errorMessage: '' };
        case LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case LOGIN_FAILED:
            return { ...state, showSpinner: false, password: '', errorMessage: action.payload.errorMessage };
        default:
            return state;
    }
}

