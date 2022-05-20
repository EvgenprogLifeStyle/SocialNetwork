import React from "react";
import store from "./Redux/Store";
import './index.css'
import * as ReactDOMClient from 'react-dom/client';
import App from "./App";
import {Provider} from "react-redux";


const root = ReactDOMClient.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);


