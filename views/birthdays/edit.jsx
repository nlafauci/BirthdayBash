const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def title="Edit Birthday Data">
      <main>
        <h1>Edit Birthday</h1>
        {/* <form onSubmit={handleSubmit}>
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
        <input className="btn btn-primary" type="submit" value="Update Birthday" /> */}
        <form method="POST">
          <div>
            <label htmlFor="name">Birthday-Haver's Name</label>
            <input
              id="name"
              name="name"
              value={data.birthday.firstName}
              required
            />
          </div>
          <div>
            <label htmlFor="image">Birthday-Haver's Picture</label>
            <input
              type="url"
              id="image"
              name="image"
              value={data.birthday.pic}
            />
          </div>
          <div>
            <label htmlFor="description">Birthday Notes</label>
            <input
              id="description"
              name="description"
              defaultValue={data.birthday.notes}
              required
            />
          </div>
          <input type="submit" value="Submit Changes" />
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
