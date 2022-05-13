const ADD_POST = "ADD_POST"
const UDATE_POST = "UDATE_POST"

const defaultState = {
    post: [
        {id: 1, text: 'Первый пост', countLike: 10},
        {id: 2, text: 'Второй пост', countLike: 32},
        {id: 3, text: 'Третий пост', countLike: 84}
    ],
    newPost: ''
}
const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: Date.now(), text: state.newPost, countLike: 0}
            state.post.push(newPost)
            state.newPost=''
            return state
        case UDATE_POST:
            state.newPost = action.payload
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostActionCreator = (data) => ({type: UDATE_POST, payload:data})

export default profileReducer
