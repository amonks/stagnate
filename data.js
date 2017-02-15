const $ = require('shelljs')

const data = {
  posts: $.ls('posts/*.js')
    .map(path => require(`./${path}`))
}

module.exports = data

