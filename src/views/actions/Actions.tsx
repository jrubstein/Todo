import { Item } from "../reducers/Store";

export const ADD_NEW_ITEM = 'add-new-item'
export const EDIT_ITEM = 'edit-item'
export const SAVE_ITEM = 'save-item'
export const DELETE_ITEM = 'delete-item'
export const TOGGLE_COMPLETE_ITEM = 'toggle-complete-item'

// Adds a new item
export const addNewItemAction = (newValue: string) => {
    return {
        type: ADD_NEW_ITEM,
        newValue
    }
}

// Edits an item
export const editItemAction = (item: Item) => {
    return {
        type: EDIT_ITEM,
        item
    }
}

// Save an item
export const saveItemAction = (id: string, newContent: string) => {
    return {
        type: SAVE_ITEM,
        id,
        newContent
    }
}

// Deletes the item with the given id
export const deleteItemAction = (id: string) => {
    return {
        type: DELETE_ITEM,
        id,
    }
}

// Toggle the completed state for the item with the given id
export const toggleCompleteItemAction = (id: string) => {
    return {
        type: TOGGLE_COMPLETE_ITEM,
        id,
    }
}