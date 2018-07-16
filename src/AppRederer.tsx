import * as React from 'react'
import {renderToString} from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'
import TodoContainer from './views/components/TodoContainer';
import { Provider } from 'react-redux';
import { createNewStore, initialState } from './views/reducers/Store'
import { sheet } from './views/styles/base';

const template = (app) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todos</title>
    <style type="text/css" id="styles">
      ${sheet.toString()}
    </style>
  </head>
  <body>
    <div id="main-container">${app}</div>
    <script src="/js/app.js" type="text/javascript"></script>
  </body>
</html>
`

// Render the page template.
export const renderIndex = () => {
    const registry = new SheetsRegistry()
    const app = renderToString(
        <JssProvider registry={registry}>
            <Provider store={createNewStore(initialState)}>
              <TodoContainer />
            </Provider>
        </JssProvider>
      )
    return template(app)
}