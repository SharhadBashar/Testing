import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from 'Reducers';
import async from 'Middleware/Async';
import stateValidator from 'Middleware/stateValidator';

export default ({children, initialState = {}}) => {
    const store = createStore(
        reducers, initialState, applyMiddleware(
            stateValidator, async
        )
    );
    return (
        <Provider store = {store}>
            {children}
        </Provider>
    );
}