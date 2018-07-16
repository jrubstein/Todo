import * as React from 'react'
import { sheet } from '../styles/base';

interface TodoInputProps {
    label: string,
    save: (value: string) => void
    defaultValue?: string
}

export class TodoInput extends React.Component<TodoInputProps> {
    private value:string = ''

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.updateValue = this.updateValue.bind(this)
    }

    onSubmit(event) {
        event.preventDefault()
        this.props.save(this.value)
        event.target.reset()
    }

    updateValue(e) {
        this.value = e.target.value
    }

    render() {
        return (
            <form className={sheet.classes.todoInput} onSubmit={this.onSubmit}>
                <label htmlFor="todoInput">{this.props.label}</label>
                <input className={sheet.classes.todoTextInput} type="text" id="todoInput" required onChange={this.updateValue} defaultValue={this.props.defaultValue} />
                <button className={`${sheet.classes.icon} ${sheet.classes.saveButton}`} type="submit" disabled={!!this.value.length} aria-label="save"></button>
            </form>
        )
    }
}