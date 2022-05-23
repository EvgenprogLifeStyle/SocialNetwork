import {profile} from "../Api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD_POST"
const TOGGLE_IS_FETCHING_PROFILE = "TOGGLE_IS_FETCHING_PROFILE"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO = "SAVE_PHOTO"
const SAVE_PROFILE = "SAVE_PROFILE"

const defaultState = {
    post: [
        {id: 1, text: 'Первый пост', countLike: 10},
        {id: 2, text: 'Второй пост', countLike: 32},
        {id: 3, text: 'Третий пост', countLike: 84}
    ],
    isFetching: true, // лоадер
    profile: null,
    status: ''
}
const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                newPost: '',
                post: [
                    ...state.post,
                    {
                        id: Date.now(),
                        text: action.post,
                        countLike: 0
                    }
                ]
            }
        }

        case TOGGLE_IS_FETCHING_PROFILE: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.userId
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.text
            }
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        case SAVE_PROFILE: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (post) => ({type: ADD_POST, post})
export const toggleIsFetchingProfile = (isFetching) => ({type: TOGGLE_IS_FETCHING_PROFILE, isFetching})
export const setUserProfileData = (userId) => ({type: SET_USER_PROFILE, userId})
export const setStatus = (text) => ({type: SET_STATUS, text})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})
export const saveProfileSuccess = (data) => ({type: SAVE_PROFILE, data})


export const setUserData = (userId) => async (dispatch) => {
    dispatch(toggleIsFetchingProfile(true))
    let data = await profile.dataUser(userId)
    dispatch(setUserProfileData(data))
    dispatch(toggleIsFetchingProfile(false))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profile.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profile.updateStatus(status)
    if (response.data.resultCode === 0) dispatch(setStatus(status))
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profile.savePhoto(file)
    if (response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))
}

export const saveProfile = (data) => async (dispatch) => {
    // console.log(data)
    let response = await profile.saveProfile(data)

    if (response.data.resultCode === 0) {
        dispatch(setUserData(data.userId))
    } else {
        console.log(response.data.messages[0])
        // dispatch(stopSubmit('profile', {"contacts": {"facebook": response.data.messages[0]}}))
        dispatch(stopSubmit('profile', {_error: response.data.messages[0]}))
        return Promise.reject( response.data.messages[0])
    }
}

export default profileReducer
