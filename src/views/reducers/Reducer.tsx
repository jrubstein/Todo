import { initialState, TodoState } from './Store'
import { ADD_NEW_ITEM, EDIT_ITEM, SAVE_ITEM, DELETE_ITEM, TOGGLE_COMPLETE_ITEM } from '../actions/Actions'
import * as uuid from 'uuid/v4'

export const TodoReducer =  (state: TodoState = initialState.todos, action): TodoState => {
    switch (action.type) {
      case ADD_NEW_ITEM:
        const newItem = {
          id: uuid(),
          content: action.newValue,
          completed: false,
          createdAt: new Date()
        }
        return Object.assign({}, state, {
          items: [...state.items, ...[newItem]]
        })
      case EDIT_ITEM:
        return Object.assign({}, state, {
          editingItem: action.item
        })
      case DELETE_ITEM:
        return Object.assign({}, state, {
          items: state.items.filter(item => item.id !== action.id)
        })
      case SAVE_ITEM:
        const newItems = state.items.map(item => {
          if (action.id === item.id) {
            return {...item, ...{content: action.newContent}}
          }
          return item
        })

        return Object.assign({}, state, {
          items: newItems,
          editingItem: null
        })
      case TOGGLE_COMPLETE_ITEM:
        const toggledItems = state.items.map(item => {
          if (action.id === item.id) {
            return {...item, ...{completed: !item.completed}}
          }
          return item
        })
        return Object.assign({}, state, {
          items: toggledItems,
        })
      default:
        return state
    }
}