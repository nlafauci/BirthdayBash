const React = require('react')
const Def = require('../default')

function new_plant(data) {
    return (
    <Def>
    <main>
    <h1>Add Your Birthday!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            value={birthday.name}
            onChange={(e) => setBirthday({ ...birthday, name: e.target.value })}
            className="form-control"
            id="name"
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthdate">Birthdate</label>
          <DatePicker
            selected={new Date(birthday.year, birthday.month - 1, birthday.day)}
            onChange={handleDateChange}
            className="form-control"
            id="birthdate"
            dateFormat="MM/dd/yyyy"
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Add Birthday" />
      </form>
    </main>
    </Def>
    )
}

module.exports = new_plant