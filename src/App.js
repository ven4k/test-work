import { useState, useEffect, useReducer } from "react"
import { Context } from "./Context/Context";
import { Favorites } from "./Favorites/Favorites";
import { MainContent } from "./MainContent/MainContent";
import { reducer } from './reducer';
import { setFilteredDataAC, setDataAC } from "./ActionCreators/ActionCreators";
import styles from './App.module.scss';


const App = () => {
  let storage = localStorage.getItem('element');
  storage = JSON.parse(storage);
  const initialFavorites = [];
  const url = 'https://restcountries.com/v3.1/all';
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    filteredData: [],
    favorites: localStorage.getItem('element') === null ? initialFavorites : storage,
    choosed: [],
  })
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(result => setData(result))
  }, [])
  const handleChange = (e) => setInputValue(e.target.value);
  
  const handleClick = (e) => {
    e.preventDefault();
    const filteredCountries = data.filter(el => { return el.name.common.toLowerCase().includes(inputValue.toLowerCase()) });
    dispatch(setDataAC(data));
    dispatch(setFilteredDataAC(filteredCountries));
  }

  return (
    <Context.Provider value={[state, dispatch]}>
      <div className={styles.app}>
        <div>
          <form>
            <input type='search' onChange={handleChange} />
            <button className={styles.appBtn}type='submit' onClick={handleClick}>select</button>
          </form>
        </div>
        <MainContent />
        <Favorites />
      </div>
    </Context.Provider>
  )
}
export default App;

