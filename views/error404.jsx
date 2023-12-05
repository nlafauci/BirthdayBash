const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find that page!</p>
                <a href="/">
                <button className="btn btn-danger btn-lg" aria-label="Button directing user to HarvestGarden plant database">
                Back to Home
                </button>
            </a>
            </main>
        </Def>
    )
}

module.exports = error404