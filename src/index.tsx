import * as path from 'path'
import * as Koa from 'koa'
import * as serve from 'koa-static'
import jss from 'jss'
import preset from 'jss-preset-default'
import { renderIndex } from './AppRederer'

jss.setup(preset())

const app = new Koa()
app.use(serve(path.join(__dirname, '..', '..', 'public')))

// Returns only the Todo list
app.use(ctx => {
    ctx.body = renderIndex()
})

app.listen(process.env.PORT || 3000, () => {
    console.log('started')
})
