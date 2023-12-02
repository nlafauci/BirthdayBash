const React = require('react')
const Def = require('./default')

function home(data) {
  return (
    <Def>
      <main>
        <div>
          <marquee>Howdy Planters! Autumn is upon us! Why not take a look at your fellow gardener's tips for growing the greatest pumpkin ever this year?</marquee>
          <img src="https://images.unsplash.com/photo-1562778380-180f296dd897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="landing" alt="Photo of a garden being watered with a watering can" />
          <div id="subtitle">
            Photo by <a href="https://unsplash.com/@pillepriske">Pille Priske</a> on <a href="https://unsplash.com/photos/vGjGvtSfys4">Unsplash</a>
          </div>
        </div>
        <div className="philosophy-container">
          <div className="philosophy">
            <h2><i>HarvestGarden</i></h2>
            <p>Growing for a new tomorrow.</p>
            <p>HarvestGarden is your home for finding out how to grow and cultivate plants in your collection and the great outdoors.</p>
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
              <p>This page started on the foundation that we wanted to educate, encourage, and progress plant cultivation from where it currently stands. We believe that gardening and agriculture are the key to providing for a better future and want to help support farmers, gardeners, and others who share in that same vision. </p>
            </div>
          </div>

          <div className="articleTwo">
            <img className="articleImage" src="https://images.unsplash.com/photo-1624668430039-0175a0fbf006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Photo featuring various fruits and vegetables gathered from a garden." />
            <div id="subtitle">
              Photo by <a href="https://unsplash.com/@dirtjoy">Zoe Schaeffer</a> on <a href="https://unsplash.com/photos/vGjGvtSfys4">Unsplash</a>
            </div>
            <div className="container">
              <h1>Services</h1>
              <p>This site includes plant species and subspecies, water and light specifications of plants, and whether these plants are best suited for indoors and outdoors. Viewers can comment and submit queries about their specific methods of growing these plants, which are moderated by the site team. </p>
            </div>
          </div>
        </div>
      </main>
    </Def>
  )
}

module.exports = home