import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import shopping_cart from './app/reducers'
import App from './app/components/App'

let store = createStore(shopping_cart)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)