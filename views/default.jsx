const React = require('react')

function Def(props) {
  return (
    <html lang="en">
      <head>
        <title>{props.title}</title>
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
        <nav aria-label="Navigation Bar">
          <a href="/birthdays">
          <label className="logomini" aria-label="BirthdayBash Logo"><img src="../images/BirthdayBashLogoMini.png"/></label>
          </a>
          <ul>
            <li>
              Happy Unbirthday, User!  ||
            </li>
            <li>
              <a href="/logout" aria-label="Database Navigation Link"><button className="btn btn-danger btn-lg" aria-label="Button directing user to logout">Logout</button></a>
            </li>
          </ul>
        </nav>
        <div id="root">
        <div className="page-container">
          {props.children}
          </div>
          </div>
          <footer>
          <div className="container">
            <span className="my-info">
            <img src="../images/BirthdayBash16fav.png" alt="BirthdayBash Logo" />
             BirthdayBash 
             <img src="../images/BirthdayBash16fav.png" alt="BirthdayBash Logo" />
              <p className="copyright">
                Copyright BirthdayBash-
                {new Date().getFullYear()}
              </p>
              <p>
                <img src="../images/BirthdayBash16fav.png" alt="BirthdayBash Logo" />
              </p>
              <div id="subtitle">
                <b>Every day is somebody's birthday!</b>
              </div>
            </span>
          </div>
        </footer>
      </body>
    </html>
  )
}

module.exports = Def
