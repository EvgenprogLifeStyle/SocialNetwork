import {headerApi} from "../Api/api";

const SET_USER_DATA = "SET_USER_DATA"


const defaultState = {
    id: null, // userId
    email: null,
    login: null,
    isAuth: false, //не авторизован
}
const authReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            // console.log(action.data)
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}

export const setUserData = (data) => ({type: SET_USER_DATA, data})


export const setLogin = () => (dispatch) =>
    headerApi.login().then(data => {
            if (data.resultCode === 0) dispatch(setUserData(data.data))
        })



export default authReducer
