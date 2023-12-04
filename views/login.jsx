const React = require('react');
const Def = require('./default');

function login(props) {
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
      <main>
        <nav aria-label="Navigation Bar">
          <a href="/">
            <label className="logo" aria-label="BirthdayBash Logo"><img src="../images/BirthdayBashLogoMini.png" /></label>
          </a>
          <ul>
            <li>
              <a href="/login" aria-label="Login Navigation Link"><button className="btn btn-danger btn-lg" aria-label="Button directing visitor to Log in">Login</button></a>
            </li>
            <li>
              <a href="/signup" aria-label="Signup Navigation Link"><button className="btn btn-danger btn-lg" aria-label="Button directing visitor to Sign up">Sign up</button></a>
            </li>
          </ul>
        </nav>
        <div>
          <form method="POST" action="/login">
            <div>
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <input type="submit" value="Login" />
          </form>
        </div>
        <footer>
          {/* ... (same footer content as the home page) */}
        </footer>
      </main>
    </html>
  );
}

module.exports = login;
