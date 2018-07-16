import { createSelector } from 'reselect'

const getItemsFilter = (state) =>  state.todos.items
const getEditingItemsFilter = (state) =>  state.todos.editingItem

export const getItemsSelector = () => {
    return createSelector(getItemsFilter, items => {
        return items
    })
}

export const getEditingItemsSelector = () => {
    return createSelector(getEditingItemsFilter, item => {
        return item
    })
}