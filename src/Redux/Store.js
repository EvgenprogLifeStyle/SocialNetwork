import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import dialogReducer from "./DialogReducer";
import profileReducer from "./ProfileReducer";
import sidebarReducer from "./SidebarReducer";
import userReducer from "./UsersReducer";
import authReducer from "./AuthReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    dataProfile: profileReducer,
    dataDialogs: dialogReducer,
    sidebar: sidebarReducer,
    dataUsers: userReducer,
    auth: authReducer,
    form: formReducer
})
// console.log(reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //redux devtools
const store = createStore(reducers, composeEnhancers(
    compose(
        applyMiddleware(thunk))
));
window.store = store
export default store