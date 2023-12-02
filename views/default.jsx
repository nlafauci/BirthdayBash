const React = require('react')

function Def(html) {
  return (
    <html lang="en">
      <head>
        <title>{html.title}</title>
        <link rel="icon" type="image/png" href="../images/HGFavicon.png" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossOrigin="anonymous"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@1,800&family=Prompt:ital,wght@0,400;0,600;1,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/styles.css" />
      </head>
      <body>
        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="banner" alt="banner image" />
        <nav aria-label="Navigation Bar">
          <a href="/">
            <label className="logo" aria-label="HarvestGarden Logo">HarvestGarden</label>
          </a>
          <ul>
            <li>
              <a href="/" aria-label="Homepage Navigation Link">Home</a>
            </li>
            <li>
              <a href="/plants" aria-label="Database Navigation Link">Database</a>
            </li>
            <li>
              <a href="/plants/new" aria-label="Contribute Navigation Link">Contribute</a>
            </li>
          </ul>
        </nav>
        <div id="root">{html.children}</div>
        <footer>
          <div className="container">
            <span className="my-info">
              ✦ HarvestGarden ✦
              <p className="copyright">
                Copyright HarvestGarden-
                {new Date().getFullYear()}
              </p>
              <p>
                <img src="../images/HGFavicon.png" alt="HarvestGarden Logo" />
              </p>
              <div id="subtitle">
                <b>We love our plant community!</b>
              </div>
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}

module.exports = Def
