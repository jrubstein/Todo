import jss from 'jss'

export const styles = {
    container: {
        'max-width': '800px',
        margin: 'auto',
        'text-align': 'center',
    },
    numberOfItems: {
        padding: '16px'
    },
    item: {
        padding: '8px'
    },
    content: {

    },
    date: {
        'font-size': '10px',
        'padding': '0 8px',
        color: 'gray',
        
    },
    icon: {
        'background-repeat': 'no-repeat',
        'background-size': '18px 18px',
        width: '18px',
        height: '18px',
        border: 'none',
        padding: '0 12px',
    },
    deleteButton: {
        'background-image': 'url(\'icons/delete.svg\')',
    },
    editButton: {
        'background-image': 'url(\'icons/edit.svg\')',
    },
    disabledEditButton: {
        opacity: '0.3',
    },
    saveButton: {
        'background-image': 'url(\'icons/save.svg\')',
    },
    todoInput: {
        display: 'flex',
        'justify-content': 'space-evenly',
        width: '300px',
        margin: 'auto',
        padding: '16px',
    },
    todoTextInput: {
        height: '14px',
        'border-bottom': '1px solid blue',
        'border-top': '0',
        'border-left': '0',
        'border-right': '0',
    }
}


export const sheet = jss.createStyleSheet(styles as any)