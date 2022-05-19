import {profile, usersApi} from "../Api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const IN_PROGRESS = 'IN_PROGRESS'



const defaultState = {
    users: [], // список пользователей
    pageSize: 10, // количество пользователей на странице
    totalUserCount: 0,
    currentPage: 1, // отображаемая страница по умолчанию
    isFetching: true, // лоадер
    inProgress: false
    /*  {
          id: 1,
          followed: true,
          fullName: 'Evgen',
          status: 'I am a boss',
          location: {city: 'Mogilev', country: 'Belarus'},
          avatar: 'https://cdn-icons-png.flaticon.com/512/147/147142.png'
      },
      {
          id: 2,
          followed: true,
          fullName: 'Ekaterina',
          status: 'I am a too',
          location: {city: 'Mogilev', country: 'Belarus'},
          avatar: 'https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png'
      },
      {
          id: 3,
          followed: false,
          fullName: 'Mama',
          status: 'I am a too',
          location: {city: 'Mogilev', country: 'Belarus'},
          avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'
      },
      {
          id: 4,
          followed: false,
          fullName: 'Vika',
          status: 'I am a too',
          location: {city: 'Minsk', country: 'Belarus'},
          avatar:'https://www.maxpixel.net/static/photo/640/Icon-Female-Avatar-Female-Icon-Red-Icon-Avatar-6007530.png'
      },*/


}
const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users}

        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) return {...user, followed: false}
                    return user
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) return {...user, followed: true}
                    return user
                })
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.pages
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUserCount: action.users
            }
        }
        case TOGGLE_IS_FETCHING: {
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
        case IN_PROGRESS: {
            // console.log(action.result)
            return {
                ...state,
                inProgress: action.result
            }
        }

        default:
            return state
    }
}

export const follow = (userID) => ({type: FOLLOW, userID})
export const unFollow = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pages) => ({type: SET_CURRENT_PAGE, pages})
export const setTotalUserCount = (users) => ({type: SET_TOTAL_USER_COUNT, users})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const toggleInProgress = (result) => ({type: IN_PROGRESS, result})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize).then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUserCount(data.totalCount))
            })
    }
}

export const setUnFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleInProgress(true))
        return usersApi.deleteUsersFollow(id)
            .then(data => {
                if (data.resultCode === 0) dispatch(follow(id))
                dispatch(toggleInProgress(false))
            })
    }
}
export const setFollow = (id) => {
    return (dispatch) => {
        dispatch(toggleInProgress(true))
        return usersApi.postUsers(id)
            .then(data => {
                if (data.resultCode === 0) dispatch(unFollow(id))
                dispatch(toggleInProgress(false))
            })
    }
}




export default userReducer
