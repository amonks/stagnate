# stagnate
javascript static sites

`build.js` is the main file. It requires `routes.js`, which is a map of filenames to strings of html (or whatever), like

```
{ 'index.html': '<!DOCTYPE html><title>page</title><p>Hello!' }
```

`routes.js` loads a bunch of components, which are functions that return html. Here's an example component:

```
const Post = post => `
  <article>
    <h1>${post.title}</h1>
    ${post.body}
  </article>
`
```

run `npm install` to install the dependencies, then `npm run dev` to run the site and have it automatically update your browser when you change files.

run `npm build` to build the site into your `build` folder, then `npm start` to serve that folder but _not_ automatically update your browser when you change files.
