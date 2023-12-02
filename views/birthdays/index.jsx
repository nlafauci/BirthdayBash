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
  }
  

module.exports = index