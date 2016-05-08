import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore, combineReducers } from "redux"
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Home from './components/Home'
import Microlendee from './components/microlendee'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import Layout from "./components/Layout"

let store = createStore(
    combineReducers({
        routing: routerReducer
    })
)

const history = syncHistoryWithStore(browserHistory, store)

render (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout}>
                <IndexRoute component={Home}/>
                <Route path="/microlendee" component={Microlendee} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("app")
)