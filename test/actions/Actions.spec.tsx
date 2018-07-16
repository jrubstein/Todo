import { createItem } from "../factories";
import { addNewItemAction, ADD_NEW_ITEM, editItemAction, EDIT_ITEM, saveItemAction, SAVE_ITEM, deleteItemAction, DELETE_ITEM, toggleCompleteItemAction, TOGGLE_COMPLETE_ITEM } from "../../src/views/actions/Actions";

describe('Actions test', () => {
    const item = createItem()

    it('Should return ADD_NEW_ITEM', () => {
        const result = addNewItemAction('newValue')
        expect(result.newValue).toEqual('newValue')
        expect(result.type).toEqual(ADD_NEW_ITEM)
    })

    it('Should return EDIT_ITEM', () => {
        const result = editItemAction(item)
        expect(result.item).toBe(item)
        expect(result.type).toEqual(EDIT_ITEM)
    })

    it('Should return SAVE_ITEM', () => {
        const result = saveItemAction(item.id, 'newValue')
        expect(result.id).toEqual(item.id)
        expect(result.newContent).toEqual('newValue')
        expect(result.type).toEqual(SAVE_ITEM)
    })

    it('Should return SAVE_ITEM', () => {
        const result = deleteItemAction(item.id)
        expect(result.id).toEqual(item.id)
        expect(result.type).toEqual(DELETE_ITEM)
    })

    it('Should return TOGGLE_COMPLETE_ITEM', () => {
        const result = toggleCompleteItemAction(item.id)
        expect(result.id).toEqual(item.id)
        expect(result.type).toEqual(TOGGLE_COMPLETE_ITEM)
    })
})