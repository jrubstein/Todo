import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { create } from 'react-test-renderer'
import TodoList from '../../src/views/components/TodoList'
import * as React from 'react'
import { createItem } from '../factories'
import { Provider } from 'react-redux';
import { createNewStore, initialState } from '../../src/views/reducers/Store';

configure({ adapter: new Adapter() })

describe('TodoList test', () => {
    it('Should create valid markup', () => {
        const component = create(
            <Provider store={createNewStore(initialState)}>
                <TodoList items={[createItem()]}/>
            </Provider>
        )
        expect(component).toMatchSnapshot()
    })
})
