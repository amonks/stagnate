const data = require('./data')
const Post = require('./components/Post')
const PostList = require('./components/PostList')
const Home = require('./components/Home')
const Page = require('./components/Page')

const mainRoutes = {
  'index.html': Page(Home()),
  'posts.html': Page(PostList())
}

const postRoutes = {}
data.posts.forEach(post => {
  postRoutes[`${post.slug}.html`] = Page(Post(post))
})

// combine both routes objects into one big one
const allRoutes = Object.assign({}, mainRoutes, postRoutes)

module.exports = allRoutes

