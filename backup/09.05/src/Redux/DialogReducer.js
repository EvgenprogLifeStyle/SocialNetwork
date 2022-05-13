const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE"
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE"

const defaultState = {
    dialogs: [
        {id: 1, name: 'Катя'},
        {id: 2, name: 'Вика'}
    ],
    message: [
        {id: 1, name: 'Аноним', text: 'Привет'},
        {id: 2, name: 'Аноним', text: "Как дела?"}
    ],
    newMessage: ''
}



const dialogReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let newMessage = {id: Date.now(), text: state.newMessage}
            state.newMessage = ''
            state.message.push(newMessage)
            return state
        case UPDATE_NEW_MESSAGE:
            state.newMessage = action.payload
            return state
        default:
            return state
    }
}

export const addMessageCreator = () => ({type: SEND_NEW_MESSAGE})
export const updateMessageCreator = (data) => ({type: UPDATE_NEW_MESSAGE, payload: data})


export default dialogReducer