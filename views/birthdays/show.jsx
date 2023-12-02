const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={data.birthday.image} alt={data.birthday.name} className="showImg" />
                        <h3>
                            {data.birthday.name}
                        </h3>

                    </div>
                    <div className="col-sm-6">
                        <h1>{data.birthday.name}</h1>
                        <h2>Water Amount: </h2>
                        {data.plant.needsWaterParagraph()}
                        <br />
                        <h2>Light Amount: </h2>
                        {data.plant.needsLightParagraph()}
                        <br />
                        <h3>Indoor/Outdoor</h3>
                        {data.plant.isIndoorParagraph()}
                        <h2>Description: </h2>
                        <h3>
                            {data.birthday.notes}
                        </h3>
                        <a href={`/birthdays/${data.birthday.id}/edit`}>
                            <button aria-label="Edit Button">Edit</button>
                        </a>
                        <form action={`/plants/${data.birthday.id}?_method=DELETE`} method='POST'>
                            <input type='submit' value='DELETE' aria-label="Delete Button"/>
                        </form>
                    </div>
                </div>
                <h1>Comments</h1>
                {comments}
                <form method="POST" action={`/birthdays/${data.birthday.id}/comment`}>
                    <div className="form-group">
                        <label htmlFor="content"> Content </label>
                        <textarea name="content" className="form-control"> </textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" aria-label="Add Comment Button"/>
                </form>
            </main>
        </Def>
    )
}

module.exports = show