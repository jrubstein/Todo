import * as React from 'react'
import { State, Item } from '../reducers/Store';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { getItemsSelector } from '../reducers/Selectors'
import { sheet } from '../styles/base';

class TodoList extends React.Component<{items: Item[]}> {
    render() {
        return (
            <React.Fragment>
                <h2 className={sheet.classes.numberOfItems}>{this.props.items.length} Item(s)</h2>
                {this.props.items.map(item => <TodoItem key={item.id} item={item} /> )}
            </React.Fragment>
        )
    }
}

const mapStateToProps = () => {
    const getItems = getItemsSelector()
    return (state, props) => {
      return {
        items: getItems(state)
      }
    }
  }

export default connect(
    mapStateToProps,
    null,
)(TodoList)