import profileReducer from "./ProfileReducer";
import dialogReducer from "./DialogReducer";
import sidebarReducer from "./SidebarReducer";


let store = {
    _state: {

        dataProfile:{
            post: [
                {id: 1, text: 'Первый пост', countLike: 10},
                {id: 2, text: 'Второй пост', countLike: 32},
                {id: 3, text: 'Третий пост', countLike: 84}
            ],
        },
        dataDialogs: {
            dialogs: [
                {id: 1, name: 'Катя'},
                {id: 2, name: 'Вика'}
            ],
            message: [
                {id: 1, name: 'Аноним', text: 'Привет'},
                {id: 2, name: 'Аноним', text: "Как дела?"}
            ],
            newMessage: ''
        },
        sidebar:{}
    },
    _callSubscriber() {
        console.log("observer")
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer //наблюдатель
    },

    dispatch(action) {
        this._state.dataProfile.post = profileReducer(store._state.dataProfile.post, action)
        this._state.dataDialogs = dialogReducer(store._state.dataDialogs, action)
        this._state.sidebar = sidebarReducer(store._state.sidebar, action)
        this._callSubscriber(this._state);
    },

}





window.store = store
export default store

// store - OOP