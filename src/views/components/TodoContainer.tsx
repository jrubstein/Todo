import * as React from 'react'
import { TodoInput } from './TodoInput'
import { State } from '../reducers/Store'
import { addNewItemAction } from '../actions/Actions'
import { connect } from 'react-redux'
import TodoList from './TodoList'
import { sheet } from '../styles/base';

class TodoContainer extends React.Component<{addNewItem?: (value: string) => void}> {
    constructor(props) {
        super(props)
        this.addNewItem = this.addNewItem.bind(this)
    }

    private addNewItem(value: string) {
        this.props.addNewItem(value)
    }

    render() {
        return (
            <div className={sheet.classes.container}>
                <h1>Todos</h1>
                <TodoList />
                <TodoInput save={this.addNewItem} label="Add todo here"/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addNewItem: (newValue) => {
        dispatch(addNewItemAction(newValue))
    },
})

export default connect(
    null,
    mapDispatchToProps,
)(TodoContainer)