const fs = require('fs')

const write = (content, path) =>
  fs.writeFileSync(path, content)

module.exports = write

