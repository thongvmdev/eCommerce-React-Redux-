import React from "react";
import ReactDOM from "react-dom";
import { store } from './app/lib/store'
import { Provider } from 'react-redux'
import App from './app/views/components'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById("root")
);


