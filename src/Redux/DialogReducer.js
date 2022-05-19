const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE"


const defaultState = {
    dialogs: [
        {id: 1, name: 'Катя'},
        {id: 2, name: 'Вика'}
    ],
    message: [
        {id: 1, name: 'Аноним', text: 'Привет'},
        {id: 2, name: 'Аноним', text: "Как дела?"}
    ]
}


const dialogReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SEND_NEW_MESSAGE:
            let textMessage = state.newMessage
            return {
                ...state,
                newMessage: '',
                message: [...state.message, {id: Date.now(), name: 'Аноним', text: action.message}]
            }



        default:
            return state
    }
}

export const addMessageCreator = (message) => ({type: SEND_NEW_MESSAGE,message})



export default dialogReducer