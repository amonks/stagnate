const Post = post => `
  <article>
    <h1>${post.title}</h1>
    ${post.body}
  </article>
`

module.exports = Post

