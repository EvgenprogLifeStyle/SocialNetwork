import {combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";

let reducers = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogReducer,
    sidebar: sidebarReducer
})

const store = createStore(reducers)

export  default store