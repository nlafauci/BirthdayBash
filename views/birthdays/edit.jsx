const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
    <Def title="Edit Birthday Data">
    <main>
      <h1>Edit Birthday</h1>
      <form method="POST" action={`/birthdays/${data.birthday.id}?_method=PUT`}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input id='firstName' name='firstName' value={data.birthday.firstName} required/>
        </div>
        <div className="form-group">
          <label htmlFor="pic">Profile Picture</label>
          <input type="url" id="pic" name="pic" value={data.plant.pic} />        
        </div>
        <div className="form-group">
          <label htmlFor="birthday">Birthday</label>
          <input type="date" id="birthday" name="birthday" value={data.plant.birthday} required/>
        </div>
        <div className="form-group">
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" value={data.plant.notes} />
        </div>
        <input className="btn btn-primary" type="submit" value="Update Birthday" />
      </form>
    </main>
    </Def>
    )
}

module.exports = edit_form