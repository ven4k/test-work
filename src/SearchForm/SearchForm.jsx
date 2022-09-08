import { useState, useContext } from "react";
import { Context } from "../Context/Context";

export const SearchForm = () => {
    const data = useContext(Context);
    const [inputValue, setInputValue] = useState('');
    const handleChange = (e) => setInputValue(e.target.value);
    const handleSubmit = () => {
    }
    const filteredCountries = data.filter(el => {
      return el.name.common.toLowerCase().includes(inputValue.toLowerCase())
    })

    return (
        <div>
            <form>
                <input type='search' onChange={handleChange} />
                <button type='submit'>select</button>
            </form>
        </div>
    )
}