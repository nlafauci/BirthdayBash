const React = require('react')
const Def = require('../default')

function index (data) {
    return (
        <div className="col-sm-6" key={birthday.birthdayId}>
            <h2>
                <a href="#" onClick={() => history.push(`/places/${birthday.birthdayId}`)} >
                    {birthday.name}
                </a>
            </h2>
            <p className="text-center">
                {place.cuisines}
            </p>
            <img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
            <p className="text-center">
                Located in {place.city}, {place.state}
            </p>
        </div>
    )
})
return (
    <main>
        <h1>Birthday</h1>
        <div className="row">
            {placesFormatted}
        </div>
    </main>
)
  }
  

module.exports = index