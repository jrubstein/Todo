import { shallow, configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { create } from 'react-test-renderer'
import * as React from 'react'
import { TodoInput } from '../../src/views/components/TodoInput';

configure({ adapter: new Adapter() })

describe('TodoInput test', () => {
    it('Should create valid markup', () => {
        const component = create(
            <TodoInput label="label" save={() => {}} />
        )
        expect(component).toMatchSnapshot()
    })

    it('Should call save when adding new items ', () => {
        const text = 'value'
        const save = jest.fn()
        const reset = jest.fn()
        const preventDefault = jest.fn()
        const form = shallow(
            <TodoInput label="label" save={save} />
        )
        form.find('input[type="text"]').simulate('change', {target: {value: text}});
        form.find('form').simulate('submit', { preventDefault, target: {reset} })
        expect(save.mock.calls.length).toEqual(1);
        expect(save.mock.calls[0][0]).toEqual(text)
        expect(reset.mock.calls.length).toEqual(1);
        expect(preventDefault.mock.calls.length).toEqual(1);
    })
})
