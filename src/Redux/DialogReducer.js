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
            let textMessage = state.newMessage
            return {
                ...state,
                newMessage: '',
                message: [...state.message, {id: Date.now(), name: 'Аноним', text: textMessage}]
            }


        case UPDATE_NEW_MESSAGE:
            return (
                {
                    ...state,
                    newMessage: action.payload
                }
            )
        default:
            return state
    }
}

export const addMessageCreator = () => ({type: SEND_NEW_MESSAGE})
export const updateMessageCreator = (data) => ({type: UPDATE_NEW_MESSAGE, payload: data})


export default dialogReducer