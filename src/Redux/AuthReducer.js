import {headerApi} from "../Api/api";

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


export const setLogin = () => (dispatch) =>
    headerApi.me().then(response => {
        if (response.data.resultCode === 0) dispatch(setUserData(response.data.data))
    })

export const login = (email, password, rememberMe) => (dispatch) =>
    headerApi.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0)
                headerApi.me().then(response => {
                    if (response.data.resultCode === 0) dispatch(setUserData(response.data.data))
                })
        })

export const logout = () => (dispatch) =>
    headerApi.logout().then(data => {
        dispatch(setUserDataLogout(null, null, null, false))
    })


export default authReducer
