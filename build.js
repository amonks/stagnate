const write = require('./util/write')
const routes = require('./routes')

const render = routes =>
  Object.entries(routes)
    .forEach(([name, text]) => write(text, `build/${name}`))

render(routes)

