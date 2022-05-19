import {profile} from "../Api/api";

const ADD_POST = "ADD_POST"
const TOGGLE_IS_FETCHING_PROFILE = "TOGGLE_IS_FETCHING_PROFILE"
const SET_USER_PROFILE = "SET_USER_PROFILE"

const SET_STATUS = "SET_STATUS"
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
            let newPost = state.newPost

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
        default:
            return state
    }
}

export const addPostActionCreator = (post) => ({type: ADD_POST, post})
export const toggleIsFetchingProfile = (isFetching) => ({type: TOGGLE_IS_FETCHING_PROFILE, isFetching})
export const setUserProfileData = (userId) => ({type: SET_USER_PROFILE, userId})
export const setStatus = (text) => ({type: SET_STATUS, text})


export const setUserData = (userId) => (dispatch) => {
    dispatch(toggleIsFetchingProfile(true))
    profile.dataUser(userId)
        .then(data => {
            dispatch(setUserProfileData(data))
            dispatch(toggleIsFetchingProfile(false))
        })
}

export const getStatus = (userId) => (dispatch) => {

    profile.getStatus(userId)
        .then(response => dispatch(setStatus(response.data)))
}

export const updateStatus = (status) => (dispatch) => {
    profile.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) dispatch(setStatus(status))


    })
}

export default profileReducer
