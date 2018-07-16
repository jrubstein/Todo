import { getItemsSelector, getEditingItemsSelector } from "../../src/views/reducers/Selectors";
import { initialState } from "../../src/views/reducers/Store";
import { createItem } from "../factories";

describe('Selectors test', () => {
    describe('getItemsSelector', () => {
        it('should return the items', () => {
            const selector = getItemsSelector()
            const items = selector(initialState)
            expect(items).toHaveLength(0)
        })
    })

    describe('getItemsSelector', () => {
        it('should return the editing item', () => {
            const selector = getEditingItemsSelector()
            let item = selector(initialState)
            expect(item).toBeFalsy()
            item = selector({...initialState, ...{todos: {editingItem: createItem()}}})
            expect(item).toBeTruthy()
        })
    })
})