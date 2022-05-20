import {headerApi} from "../Api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"
const LOGOUT_USER_DATA = "LOGOUT_USER_DATA"


const defaultState = {
    id: null, // userId
    email: null,
    login: null,
    isAuth: false, //не авторизован
}
const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case LOGOUT_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: false
            }
        }
        default:
            return state
    }
}

export const setUserData = (data) => ({type: SET_USER_DATA, data})
export const setUserDataLogout = (data) => ({type: LOGOUT_USER_DATA, data})


export const setLogin = () => async (dispatch) => {
    let response = await headerApi.me()
    if (response.data.resultCode === 0) dispatch(setUserData(response.data.data))
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await headerApi.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        headerApi.me().then(response => dispatch(setUserData(response.data.data)))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logout = () => async (dispatch) => {
    await headerApi.logout()
    dispatch(setUserDataLogout(null, null, null, false))
}
export default authReducer
