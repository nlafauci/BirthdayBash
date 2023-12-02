const React = require('react')
const Def = require('../default')

function new_plant(data) {
    return (
        <Def>
            <main>
                <h1>Add a New Plant</h1>
                <form method="POST" action='/plants'>
                    <div>
                        <label htmlFor="name">Plant Name</label>
                        <input id="name" name="name" required/>
                    </div>
                    <div>
                        <label htmlFor="needsLight">Light Exposure Needed</label>
                        <select 
                        id="needsLight" 
                        name="needsLight"
                        onChange={(event) => {
                            data.plant.needsLight = event.target.value
                        }}
                        required>
                        <option value="Direct Sunlight">Direct Sunlight</option>
                        <option value="Indirect Sunlight">Indirect Sunlight</option>
                        <option value="Full Sunlight">Full Sunlight</option>
                        <option value="Partial Sunlight">Partial Sunlight</option>
                       </select>
                    </div>
                    <div>
                        <label htmlFor="needsWater">Water Amount Needed</label>
                        <select 
                        id="needsWater" 
                        name="needsWater" 
                        required>
                            <option value="Water Daily">Water Daily</option>
                            <option value="Water Every Other Day">Water Every Other Day</option>
                            <option value="Water Weekly">Water Weekly</option>
                            <option value="Water Every Other Week">Water Every Other Week</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="image">Plant Picture</label>
                        <input type="url" id="image" name="image" />
                    </div>
                    <div>
                        <label htmlFor="isIndoor">Is it an indoor plant?</label>
                        <input type="checkbox" id="isIndoor" name="isIndoor"/>
                    </div>
                    <div>
                        <label htmlFor="description">Plant Description</label>
                        <input id="description" name="description" required/>
                    </div>
                    <input type="submit" value="Add Plant" aria-label="Add New Plant Button" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_plant