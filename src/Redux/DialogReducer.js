const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE"

const defaultState = {
    dialogs: [
        {id: 1, name: 'Катя'},
        {id: 2, name: 'Вика'}
    ],
    message: [
        {id: 1, name: 'Катя', time: '12:25', text: 'Привет',avatar:'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'},
        {id: 2, name: 'Катя', time: '16:25', text: "Как дела?",avatar:'https://shapka-youtube.ru/wp-content/uploads/2021/02/avatarka-dlya-skaypa-dlya-parney.jpg'}
    ]
}

const dialogReducer = (state = defaultState, action) => {

    switch (action.type) {
        case SEND_NEW_MESSAGE:
            return {
                ...state,
                newMessage: '',
                message: [...state.message, {id: Date.now(), name: action.data.name, text: action.data.message, time:action.data.time,avatar:action.data.avatar}]
            }
        default:
            return state
    }
}

export const addMessage = (data) => ({type: SEND_NEW_MESSAGE, data})

export default dialogReducer