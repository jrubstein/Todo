import * as React from 'react'
import { State, Item } from '../reducers/Store'
import { connect } from 'react-redux'
import { getEditingItemsSelector } from '../reducers/Selectors'
import { editItemAction, saveItemAction, deleteItemAction, toggleCompleteItemAction } from '../actions/Actions'
import { TodoInput } from './TodoInput'
import { sheet } from '../styles/base'

const EditingItem = ({content, save}) => {
    return (
        <TodoInput save={save} label="Edit" defaultValue={content}/>
    )
}

interface TodoItemProps {
    item: Item
    editingItem?: Item
    edit?: (item: Item) => void
    save?: (id: string, content: string) => void
    delete?: (id: string) => void
    toggle?: (id: string) => void 
}

export class TodoItem extends React.Component<TodoItemProps> {

    constructor(props) {
        super(props)
        this.edit = this.edit.bind(this)
        this.save = this.save.bind(this)
        this.delete = this.delete.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
    }

    toggleComplete() {
        this.props.toggle(this.props.item.id)
    }
    edit() {
        this.props.edit(this.props.item)
    }

    delete() {
        this.props.delete(this.props.item.id)
    }

    save(value) {
        this.props.save(this.props.item.id, value)
    }

    render() {
        const {item: {content, createdAt, id, completed}} = this.props
        const isEditing = this.props.editingItem && this.props.editingItem.id === id
        const classes = `${sheet.classes.item} ${completed ? sheet.classes.completed : ''}`
        const editButtonClasses = `${sheet.classes.icon} ${sheet.classes.editButton} ${completed ? sheet.classes.disabledEditButton : ''}`
        return (
            <div className={classes}>
                {isEditing && <EditingItem content={content} save={this.save} /> }
                {!isEditing && 
                    <React.Fragment>
                        <input type="checkbox" checked={completed} onChange={this.toggleComplete} />
                        <span className={sheet.classes.content}>{content}</span>
                        <span className={sheet.classes.date}>{createdAt.toDateString()}</span>
                        <button name="edit" className={editButtonClasses} onClick={this.edit} aria-label="edit" disabled={completed}></button>
                        <button name="delete" className={`${sheet.classes.icon} ${sheet.classes.deleteButton}`} onClick={this.delete} aria-label="delete"></button>
                    </React.Fragment>
                } 
                
            </div>
        )
    }
}

const mapStateToProps = () => {
    const getEditingItems = getEditingItemsSelector()
    return (state) => {
      return {
        editingItem: getEditingItems(state)
      }
    }
  }

  
const mapDispatchToProps = (dispatch) => ({
    edit: (item) => {
        dispatch(editItemAction(item))
    },
    delete: (id) => {
        dispatch(deleteItemAction(id))
    },
    toggle: (id) => {
        dispatch(toggleCompleteItemAction(id))
    },
    save: (id: string, newContent: string) => {
        dispatch(saveItemAction(id, newContent))
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoItem)