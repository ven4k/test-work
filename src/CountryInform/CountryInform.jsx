import { useContext, useEffect } from 'react';
import { Context } from '../Context/Context';
import { setItemAC, removeItemAC, itemInfoAC, setFilteredDataAC } from '../ActionCreators/ActionCreators';
import styles from './CountryInform.module.scss';

export const CountryInform = () => {
    const [state, dispatch] = useContext(Context);

    const borderCountryInfo = (e) => {
        state.data.map(res => res.cca3 === e.target.id && dispatch(setFilteredDataAC([res])))
    }
    const choosedBorderCountryInfo = (e) => {
        state.data.map(res => res.cca3 === e.target.id && dispatch(itemInfoAC([res])))
    }

    useEffect(() => {
        localStorage.setItem('element', JSON.stringify(state.favorites))
    }, [state.favorites])
    console.log(state.choosed);

    return (
        <div className={styles.countryBlockInformation} id="top">
            {(state.choosed.length !== 0 && state.filteredData.length !== 1) && state.choosed.map(el => (
                <div key={el.ccn3} className={styles.choosedCountry}>
                    <div className={styles.countryName}><h2>{el.name.common}</h2></div>
                    <div className={styles.countryFlag}><img src={el.flags.svg} alt="flag" /></div>
                    <div className={styles.countryCode}>Code ISO 3166-1: <span>{el.cca3}</span></div>
                    <div className={styles.countryLanguages}>Languages: {Object.values(el.languages).join(', ')}</div>
                    <div className={styles.countryBorders}>Country borders: 
                        {el.borders ? el.borders.map(item =>
                            (<div key={item} className={styles.borderItem} id={item} onClick={choosedBorderCountryInfo}>{item}</div>))

                            : " No Data"}</div>
                    <div><button className={styles.countryBtn} onClick={function () {
                        state.favorites.find(item => item.name.common === el.name.common) ? dispatch(removeItemAC(el)) : dispatch(setItemAC(el));
                        localStorage.setItem('element', JSON.stringify(state.favorites))
                    }}>{state.favorites.find(item => item.name.common === el.name.common) ? 'Remove from Favorites' : 'Add to Favorites'}</button></div>

                </div>
            ))}
            {state.filteredData.length === 1 && state.filteredData.map(el => (
                <div key={el.name.common} className={styles.countryInfo}>
                    <div className={styles.countryName}><h2>{el.name.common}</h2></div>
                    <div className={styles.countryFlag}><img src={el.flags.svg} alt="flag" /></div>
                    <div className={styles.countryCode}>Code ISO 3166-1: <span>{el.cca3}</span></div>
                    <div className={styles.countryLanguages}>Languages: {Object.values(el.languages).join(', ')}</div>
                    <div className={styles.countryBorders}>Country borders: 
                        {el.borders ? el.borders.map(item =>
                            
                            (<div key={item} className={styles.borderItem} id={item} onClick={borderCountryInfo}>{item}</div>))

                            : " No Data"}</div>
                    <div><button className={styles.countryBtn} onClick={function () {
                        state.favorites.find(item => item.name.common === el.name.common) ? dispatch(removeItemAC(el)) : dispatch(setItemAC(el));
                        localStorage.setItem('element', JSON.stringify(state.favorites))
                    }}>{state.favorites.find(item => item.name.common === el.name.common) ? 'Remove from Favorites' : 'Add to Favorites'}</button></div>
                </div>
            ))}
        </div>

    )
}
