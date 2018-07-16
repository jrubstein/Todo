import { combineReducers, applyMiddleware, Store } from 'redux'
import { createStore } from 'redux'
import { TodoReducer } from './Reducer';

export interface Item  {
    id: string
    content: string
    completed: boolean
    createdAt: Date
}

export interface TodoState {
    items: Item[]
    editingItem?: Item
    showEditDialog: boolean
}

export interface State {
    todos: TodoState
}

export const initialState: State = {
    todos: {
        items: [],
        showEditDialog: false
    }
}

export const combinedReducers = combineReducers<State>({
    todos: TodoReducer
})

export const createNewStore = (init: State = initialState): Store<State> => {
    return createStore(combinedReducers , init)
    // For testing
    // !!(window || null) ? (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() : null)
}