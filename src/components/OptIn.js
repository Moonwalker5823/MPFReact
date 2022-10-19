import useFormContext from "../hooks/useFormContext"

const OptIn = () => {
    const { data, handleChange } = useFormContext();

    const content = (
        <>
            <label htmlFor="optInNews">Recieve Our Newletter
                <input
                    type="checkbox"
                    id="optInNews"
                    name="optInNews"
                    checked={data.optInNews}
                    onChange={handleChange}
                />
            </label>
            <ul>
                <li>Save 10% now</li>
                <li>Recieve Discount Coupons</li>
                <li>Find out about new Products</li>
            </ul>
        </>
    )
    
  return content
}

export default OptIn
