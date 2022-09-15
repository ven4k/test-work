import { useState, useEffect, useReducer } from "react"
import { Context } from "./Context/Context";
import { Favorites } from "./Favorites/Favorites";
import { MainContent } from "./MainContent/MainContent";
import { reducer } from './reducer';
import { setFilteredDataAC, setDataAC, removeChoosedItemAC, setFilteredCountriesAC } from "./ActionCreators/ActionCreators";
import styles from './App.module.scss';


const App = () => {
  let storage = localStorage.getItem('element');
  storage = JSON.parse(storage);
  const initialFavorites = [];
  const url = 'https://restcountries.com/v3.1/all';
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [countryPerPage] = useState(12);
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    filteredData: [],
    favorites: localStorage.getItem('element') === null ? initialFavorites : storage,
    choosed: [],
    filteredCountries: [],
    dataCurrentPage: 1,
    filteredDataCurrentPage: 1
  })
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setData(result))
  }, [])
  const lastDataCountryIndex = state.dataCurrentPage * countryPerPage;
  const firstDataCountryIndex = lastDataCountryIndex - countryPerPage;

  const lastFilteredDataCountryIndex = state.filteredDataCurrentPage * countryPerPage;
  const firstFilteredDataCountryIndex = lastFilteredDataCountryIndex - countryPerPage;

  const handleChange = (e) => {
    const result = e.target.value.replace(/[^a-z]/gi, '');
    setInputValue(result);
  };

  const all = data.slice(firstDataCountryIndex, lastDataCountryIndex);
  const filteredCountries = data.filter(el => { return el.name.common.toLowerCase().includes(inputValue !== '' && inputValue.toLowerCase()) });
  const filtered = filteredCountries.slice(firstFilteredDataCountryIndex, lastFilteredDataCountryIndex);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setDataAC(data));
    dispatch(setFilteredDataAC(filtered));
    dispatch(setFilteredCountriesAC(filteredCountries))
    dispatch(removeChoosedItemAC());
  }
  const allCountries = (e) => {
    e.preventDefault();
    dispatch(setDataAC(all));
    dispatch(setFilteredDataAC(filtered));
    dispatch(removeChoosedItemAC());
  }
  useEffect(() => {
    dispatch(setDataAC(all))
  }, [state.dataCurrentPage])

  useEffect(() => {
    dispatch(setFilteredDataAC(filtered))
  }, [state.filteredDataCurrentPage])
  
  return (
    <Context.Provider value={[state, dispatch]}>
      <div className={styles.app}>
        <div>
          <form>
            <input type='text' onChange={handleChange} value={inputValue} />
            <button disabled={!inputValue} className={styles.appBtn} type='submit' onClick={handleClick}>select</button>
            <button className={styles.allCountries} onClick={allCountries}>Get all Countries</button>
          </form>
        </div>
        <MainContent countryPerPage={countryPerPage} totalCountries={data}/>
        <Favorites />
      </div>
    </Context.Provider>
  )
}
export default App;