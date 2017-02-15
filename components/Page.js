const Nav = require('./Nav')

const Page = content => `
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      ${Nav()}
      <main>
        ${content}
      </main>
    </body>
  </html>
`

module.exports = Page

