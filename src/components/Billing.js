
const Billing = ({data, handleChange}) => {
  
  const content = (
    <div className="flex-col">
        <div className="split-container">
            <div className="flex-col">
                <label htmlFor="billFirstName">First Name</label>
                <input
                    type='text'
                    id="billFirstName"
                    autoComplete="on"
                    name="given-name"
                    placeholder="Jane"
                    value={data.billFirstName}
                    onChange={handleChange}
                />
            </div>
            <div className="flex-col">
                <label htmlFor="billLastName">Last Name</label>
                <input
                    type='text'
                    id="billLastName"
                    name="family-name"
                    autoComplete="on"
                    placeholder="Doe"
                    // value={data.familyname}
                    onChange={handleChange}
                />
            </div>
        </div>
                <label htmlFor="billAddress1">Address</label>
                <input
                    type='email'
                    id="email"
                    name="email"
                    autoComplete="on"
                    placeholder="555 Jordan Way"
                    // value={data.billAddress1}
                    // onChange={handleChange}
                />
                <label htmlFor="billAddress2">2nd Address Line</label>
                <input
                    type='text'
                    id="billAddress2"
                    name="billAddress2"
                    placeholder="Apt. 2"
                    value={data.billAddress2}
                    onChange={handleChange}
                />
                <label htmlFor="billCity">City</label>
                <input
                    type='email'
                    id="billCity"
                    name="billCity"
                    placeholder="New York"
                    value={data.billCity}
                    onChange={handleChange}
                />
                <label htmlFor="billState">State</label>
                <select
                    id="billState"
                    name="billState"
                    value={data.billState}
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
                <label htmlFor="billZipCode">Zip Code</label>
                <input
                    type="text"
                    id="billZipCode"
                    name="billZipCode"
                    value={data.billZipCode}
                    placeholder="12345"
                    onChange={handleChange}
                    maxLength="5"
                />
        
    </div>
  )
    return content;
}

export default Billing