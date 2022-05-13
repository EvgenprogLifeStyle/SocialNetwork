import {combineReducers, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
import userReducer from "./UsersReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogReducer,
    sidebar: sidebarReducer,
    dataUsers: userReducer,
    auth: authReducer
})
// console.log(reducers)
const store = createStore(reducers)

window.store = store
export default store