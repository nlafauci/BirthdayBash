const React = require('react')
const Def = require('../default')

function show(data) {
    return (
        <Def>
            <main>
                {/* <div className="row">
                    <div className="col-sm-6">
                        <img src={data.birthday.pic} alt={data.birthday.firstName} className="showImg" />
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
                </div> */}
            </main>
        </Def>
    )
}

module.exports = show