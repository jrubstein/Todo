import { TodoReducer } from "../../src/views/reducers/Reducer";
import { initialState } from "../../src/views/reducers/Store";
import { ADD_NEW_ITEM, EDIT_ITEM, DELETE_ITEM, TOGGLE_COMPLETE_ITEM, SAVE_ITEM } from "../../src/views/actions/Actions";


describe('Reducer test', () => {
    const init = initialState.todos
    const action = {
        type: ADD_NEW_ITEM,
        newValue: 'value'
    }

    describe('ADD_NEW_ITEM', () => {
        it('Should create a new item', () => {
            const result = TodoReducer(init, action)
            expect(result.items).toHaveLength(1)
            expect(result.items[0].content).toEqual('value')
        })
    })

    describe('EDIT_ITEM', () => {
        it('Should add the given item as editing item', () => {
            let result = TodoReducer(init, action)
            expect(result.items).toHaveLength(1)
            expect(result.editingItem).toBeFalsy()
            result = TodoReducer(result, {
                type: EDIT_ITEM,
                item: result.items[0]
            })
            expect(result.editingItem.id).toEqual(result.items[0].id)
        })
    })

    describe('DELETE_ITEM', () => {
        it('Should delete an item', () => {
            let result = TodoReducer(init, action)
            expect(result.items).toHaveLength(1)
            result = TodoReducer(result, {
                type: DELETE_ITEM,
                id: result.items[0].id
            })
            expect(result.items).toHaveLength(0)
        })
    })

    describe('SAVE_ITEM', () => {
        it('Should save the given item', () => {
            const newContent = 'new content'
            let result = TodoReducer(init, action)
            expect(result.items).toHaveLength(1)
            result = TodoReducer(result, {
                type: SAVE_ITEM,
                id: result.items[0].id,
                newContent,
            })
            expect(result.items).toHaveLength(1)
            expect(result.items[0].content).toEqual(newContent)
        })
    })

    describe('TOGGLE_COMPLETE_ITEM', () => {
        it('Should toggle the completed flag', () => {
            let result = TodoReducer(init, action)
            expect(result.items).toHaveLength(1)
            expect(result.items[0].completed).toBeFalsy()
            result = TodoReducer(result, {
                type: TOGGLE_COMPLETE_ITEM,
                id: result.items[0].id
            })
            expect(result.items[0]).toBeTruthy()
        })
    })

    describe('default', () => {
        it('Should return the default value', () => {
            expect(TodoReducer(init, {type: 'other'})).toBe(init)
        })
    })
})