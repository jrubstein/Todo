import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { createNewStore } from './reducers/Store'
import TodoContainer from './components/TodoContainer'
import { initialState, State } from './reducers/Store';

// Hydrate the markup from the server.
ReactDOM.hydrate(
    <Provider store={createNewStore(initialState)}>
        <TodoContainer />
    </Provider>,
    document.getElementById('main-container')
)