const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
        <Def title="Edit Plant Data">
            <main>
                <h1>Edit Plant</h1>
                <form method="POST" action={`/plants/${data.plant.id}?_method=PUT`}>
                    <div>
                        <label htmlFor="name">Plant Name</label>
                        <input id="name" name="name" value={data.plant.name} required/>
                    </div>
                    <div>
                        <label htmlFor="needsLight">Light Exposure Needed</label>
                        <select 
                        id="needsLight" 
                        name="needsLight"
                        value={data.plant.needsLight} 
                        onChange={(event) => {
                            data.plant.needsLight = event.target.value
                        }}
                        required>
                        <option value="direct sunlight (indoors)">Direct Sunlight</option>
                        <option value="indirect sunlight (indoors)">Indirect Sunlight</option>
                        <option value="full sunlight (outdoors)">Full Sunlight</option>
                        <option value="partial sunlight (outdoors)">Partial Sunlight</option>
                       </select>
                    </div>
                    <div>
                        <label htmlFor="needsWater">Water Amount Needed</label>
                        <select 
                        id="needsWater" 
                        name="needsWater" 
                        value={data.plant.needsWater} 
                        required>
                            <option value="water daily">Water Daily</option>
                            <option value="water every other day">Water Every Other Day</option>
                            <option value="water weekly">Water Weekly</option>
                            <option value="water every other week">Water Every Other Week</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="image">Plant Picture</label>
                        <input type="url" id="image" name="image" value={data.plant.image} />
                    </div>
                    <div>
                        <label htmlFor="isIndoor">Is it an indoor plant?</label>
                        <input type="checkbox" id="isIndoor" name="isIndoor" defaultChecked={data.plant.isIndoor}/>
                    </div>
                    <div>
                        <label htmlFor="description">Plant Description</label>
                        <input id="description" name="description"
                        defaultValue={data.plant.description} required/>
                    </div>
                    <input type="submit" value="Submit Changes" />
                </form>
            </main>
        </Def>
    )
}

module.exports = edit_form