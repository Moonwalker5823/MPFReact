import useFormContext from "../hooks/useFormContext"

const Shipping = () => {

    const { data, handleChange } = useFormContext();

    const content = () => {
        <>
            <label htmlFor="sameAsBilling">
                <input
                    type="checkbox"
                    id="sameAsBilling"
                    name="sameAsBilling"
                    checked={data.sameAsBilling}
                    onChange={handleChange}
                />
                Same as Billing Address
            </label>
            <div className="split-container">
                <div className="flex-col">
                    <label htmlFor="shipFirstName">First Name</label>
                    <input
                        type="text"
                        id="shipFirstName"
                        name="shipFirstName"
                        value={data.shipFirstName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                        placeholder="Mike"
                    />
                </div>
                <div className="flex-col">
                    <label htmlFor="shipLastName">Last Name</label>
                    <input
                        type="text"
                        id="shipLastName"
                        name="shipLastName"
                        value={data.shipLastName}
                        onChange={handleChange}
                        disabled={data.sameAsBilling}
                        placeholder="Mike"
                    />
                </div>
            </div> 

            <label htmlFor="shipAdress1">shipAdress1</label>
            <input
                type="text"
                id="shipAddress1"
                name="shipAddress1"
                value={data.shipAddress1}
                onChange={handleChange}
                disabled={data.sameAsBilling}
                placeholder="1004 Place"
            />
        
            <label htmlFor="shipAddress2">Address2</label>
            <input
                type="text"
                id="shipAddress2"
                name="shipAddress2"
                value={data.shipAddress2}
                onChange={handleChange}
                disabled={data.sameAsBilling}
                placeholder="1004 Place"
            />
        
            <label htmlFor="shipCity">City</label>
            <input
                type="text"
                id="shipCity"
                name="shipCity"
                value={data.shipCity}
                onChange={handleChange}
                disabled={data.sameAsBilling}
                placeholder="New York"
            />
        
            <label htmlFor="shipState">State</label>
            <select
                id="shipState"
                name="shipState"
                value={data.shipState}
                onChange={handleChange}
            >
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming`</option>
            </select>
    
        
            <label htmlFor="shipZipCode">Zip Code</label>
            <input
                type="number"
                id="shipZipCode"
                name="shipZipCode"
                value={data.shipZipCode}
                onChange={handleChange}
                disabled={data.sameAsBilling}
                maxLength= "5"
                placeholder="Mike"
            />
        </>
    }
  return content
}

export default Shipping
