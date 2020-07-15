import React from "react";
import ReactDOM from "react-dom";
import { store } from './app/lib/store'
import { Provider } from 'react-redux'
import App from './app/views/components'
import { AppContainer  } from './app/views/containers'
import { addToCart } from './app/lib/actions'

// Log initialState
// console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addToCart({name: "citron"}, 2))
store.dispatch(addToCart({name: "kiwi"}, 5))
unsubscribe()

ReactDOM.render(
    <Provider store={store}>
        {/* <App /> */}
        <AppContainer/>
    </Provider>
    , document.getElementById("root")
);


