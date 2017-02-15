const Post = require('./components/Post')
const PostList = require('./components/PostList')
const Index = require('./pages/Index')
const Page = require('./components/Page')

const data = require('./data')

const mainRoutes = {
  'index.html': Page(Index()),
  'posts.html': Page(PostList(data.posts))
}

const postRoutes = {}
// add each post to that object ^
data.posts.forEach(post => {
  postRoutes[`${post.slug}.html`] = Page(Post(post))
})

// combine both routes objects into one big one
const allRoutes = Object.assign({}, mainRoutes, postRoutes)

module.exports = allRoutes

