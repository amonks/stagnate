const data = require('../data')
const all = require('../util/all')
const Link = require('./Link')

const PostInList = post => `
  <li>
    ${Link('/' + post.slug + '.html', post.title)}
  </li>
`

const PostList = posts => `
  <ul>
    ${all(posts, PostInList)}
  </ul>
`

module.exports = PostList(data.posts)

