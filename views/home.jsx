const React = require('react')
const Def = require('./default')

function home(html) {
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
      <main>
      <nav aria-label="Navigation Bar">
          <a href="/">
            <label className="logo" aria-label="HarvestGarden Logo">BirthdayBash</label>
          </a>
          <ul>
            <li>
              <a href="/login" aria-label="Homepage Navigation Link"><button className="btn btn-danger btn-lg" aria-label="Button directing user to HarvestGarden plant database">Login</button></a>
            </li>
            <li>
              <a href="/signup" aria-label="Database Navigation Link"><button className="btn btn-danger btn-lg" aria-label="Button directing user to HarvestGarden plant database">Sign up</button></a>
            </li>
          </ul>
        </nav>
        <div>
          <marquee>Welcome to Birthday Bash! Remembering is caring :D</marquee>
          <img src="https://images.unsplash.com/photo-1562778380-180f296dd897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="landing" alt="Photo of a garden being watered with a watering can" />
          <div id="subtitle">
            Photo by <a href="https://unsplash.com/@pillepriske">Pille Priske</a> on <a href="https://unsplash.com/photos/vGjGvtSfys4">Unsplash</a>
          </div>
        </div>
        <div className="philosophy-container">
          <div className="philosophy">
            <h2><i>Birthday Bash</i></h2>
            <p>Making celebrations more impactful</p>
            <p>Birthday Bash is the place to be to remind yourself about the people you care about most and schedule around those times</p>
            <a href="/plants">
              <button className="btn btn-danger btn-lg" aria-label="Button directing user to HarvestGarden plant database">Learn Now!</button>
            </a>
          </div>
        </div>

        <div className="articles">
          <div className="articleOne">
            <img className="articleImage" src="https://plus.unsplash.com/premium_photo-1687987358293-13b376873356?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Cover photo of two children watering plants in a garden." />
            <div id="subtitle">
              Photo by <a href="https://unsplash.com/@dreamcatchlight">Diana Light</a> on <a href="https://unsplash.com/photos/vGjGvtSfys4">Unsplash</a>
            </div>
            <div className="container">
              <h1>Our Mission</h1>
              <p>This site was created as a way to help people document their loved ones birthdays. We believe that celebrations are important times in peoples lives and being able to remember those times and plan around them accordingly is important, especially since life is too short. </p>
            </div>
          </div>

          <div className="articleTwo">
            <img className="articleImage" src="https://images.unsplash.com/photo-1624668430039-0175a0fbf006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Photo featuring various fruits and vegetables gathered from a garden." />
            <div id="subtitle">
              Photo by <a href="https://unsplash.com/@dirtjoy">Zoe Schaeffer</a> on <a href="https://unsplash.com/photos/vGjGvtSfys4">Unsplash</a>
            </div>
            <div className="container">
              <h1>Services</h1>
              <p>This site allows you to keep track of birthdays with our planner system, where you can upload, edit, and delete birthdays from your personal account.</p>
            </div>
          </div>
        </div>
        <footer>
          <div className="container">
            <span className="my-info">
              ✦ BirthdayBash ✦
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