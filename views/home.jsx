const React = require('react')
const Def = require('./default')

function home(props) {
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
      <nav className="homeNav" aria-label="Navigation Bar">
          <a href="/">
            <label className="logo" aria-label="BirthdayBash Logo"><img src="../images/BirthdayBashLogoMini.png"/></label>
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
          <marquee>
            <img src="../images/BirthdayBash16fav.png" alt="BirthdayBash Logo" />
          It's Somebody's Birthday Today! Sign-up or Log in to Celebrate!
          <img src="../images/BirthdayBash16fav.png" alt="BirthdayBash Logo" />
          </marquee>
          <img src="../images/BirthdayBashBigLogo.png" className="landing" alt="Logo reading Birthday Bash, the name of the application." />
        </div>
        <div className="philosophy-container">
          <div className="philosophy">
            <h2><i>Birthday Bash</i></h2>
            <p>Making celebrations more impactful</p>
            <p>Birthday Bash is the place to be to remind yourself about the people you care about most and schedule around those times. </p>
            <a href="/signup">
              <button className="btn btn-danger btn-lg" aria-label="Button directing visitor to sign up">Let's Celebrate!</button>
            </a>
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
      </main>
      </html>
  )
}

module.exports = home