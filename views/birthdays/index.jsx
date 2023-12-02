const React = require('react')
const Def = require('../default')

function index (data) {
    let birthdaysFormatted = data.birthdays.map((birthday) => {
      return (
        <div key={birthday.id} className="col-md-4">
          <h2>
            <a href={`/plants/${birthday.id}`}>{birthday.name}</a>
          </h2>
          <img className="inGrid" src={birthday.image} alt={birthday.name}/>
        </div>  
      )
    })
    return (
      <Def>
          <main>
              <h1>BIRTHDAY INDEX PAGE</h1>
              <div className="row">{ birthdaysFormatted }</div>
          </main>
      </Def>
  )
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