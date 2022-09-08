import { useState, useEffect, useReducer } from "react"
import { Context } from "./Context/Context";
import { Favorites } from "./Favorites/Favorites";
import { MainContent } from "./MainContent/MainContent";
import { SearchForm } from "./SearchForm/SearchForm";
import {reducer} from './reducer';
import styles from './App.module.scss';

const App = () => {
  const url = 'https://restcountries.com/v3.1/region/europe';
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [state, dispatch] = useReducer(reducer, {
    favorites: false,
    choosed: false
  })
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setData(result))
  }, [])
  const handleChange = (e) => setInputValue(e.target.value);
  const handleClick = (e) => {
    e.preventDefault();
    const filteredCountries = data.filter(el => { return el.name.common.toLowerCase().includes(inputValue.toLowerCase()) })
    return setFilterData(filteredCountries);
  }
 
  return (
    <Context.Provider value={[state, dispatch]}>
      <div className={styles.app}>
        <div>
          <form>
            <input type='search' onChange={handleChange} />
            <button type='submit' onClick={handleClick}>select</button>
          </form>
        </div>
        <MainContent filterData={filterData}/>
        <Favorites />
      </div>
    </Context.Provider>
  )
}
export default App;

