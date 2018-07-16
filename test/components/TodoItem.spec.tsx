import { create } from 'react-test-renderer'
import { createItem } from '../factories'
import * as React from 'react'
import { TodoItem } from '../../src/views/components/TodoItem'
import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { Provider } from 'react-redux';
import { createNewStore, initialState } from '../../src/views/reducers/Store';

configure({ adapter: new Adapter() })

describe('TodoItem test', () => {
    it('Should create valid markup', () => {
        const component = create(
            <Provider store={createNewStore(initialState)}>
                <TodoItem item={createItem()}/>
            </Provider>
        )
        expect(component).toMatchSnapshot()
    })

    it('Should create valid markup when editing', () => {
        const data = createItem()
        const component = create(
            <TodoItem item={data} editingItem={data}/>
        )
        expect(component).toMatchSnapshot()
    })

    it('Should call delete when delete button is clicked', () => {
        const data = createItem()
        const deleteFunction = jest.fn()
        const item = shallow(
            <TodoItem item={data} delete={deleteFunction}/>
        )
        item.find('button[name="delete"]').simulate('click')
        expect(deleteFunction.mock.calls.length).toEqual(1);
        expect(deleteFunction.mock.calls[0][0]).toEqual(data.id)
    })

    it('Should call edit when edit button is clicked', () => {
        const data = createItem()
        const edit = jest.fn()
        const item = shallow(
            <TodoItem item={data} edit={edit}/>
        )
        item.find('button[name="edit"]').simulate('click')
        expect(edit.mock.calls.length).toEqual(1);
        expect(edit.mock.calls[0][0]).toEqual(data)
    })

    it('Should call toggle when the checkbox is clicked', () => {
        const data = createItem()
        const toggle = jest.fn()
        const item = shallow(
            <TodoItem item={data} toggle={toggle}/>
        )
        item.find('input[type="checkbox"]').simulate('change')
        expect(toggle.mock.calls.length).toEqual(1);
        expect(toggle.mock.calls[0][0]).toEqual(data.id)
    })
})