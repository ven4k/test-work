import { useContext } from "react";
import { Context } from "../Context/Context";
import { itemInfoAC, setFilteredCurrentPageAC, setCurrentPageAC } from "../ActionCreators/ActionCreators";
import styles from './SearchResult.module.scss';

export const SearchResult = ({ countryPerPage, totalCountries }) => {
    const [state, dispatch] = useContext(Context);
    const pageNumbers = [];
    const filteredPageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalCountries.length / countryPerPage); i++) {
        pageNumbers.push(i)
    }
    for (let i = 1; i <= Math.ceil(state.filteredCountries.length / countryPerPage); i++) {
        filteredPageNumbers.push(i)
    }
    const DataCountries = () => {
        return (state.data.map(el => (
            <div key={el.cca3} className={styles.countryBlock}>
                <div className={styles.li}><img className={styles.resultFlags} src={el.flags.svg} alt="flag of country" /><span className={styles.countryName}>{el.name.common}</span></div>
                <a className={styles.toTop} href="#top"><button className={styles.resultBtn} onClick={() => dispatch(itemInfoAC([el]))}>Show more</button></a>
            </div>
        )))
    }
    const FilteredCountries = () => {
        return (state.filteredData.map(el => (
            <div key={el.cca3} className={styles.countryBlock}>
                <div className={styles.li}><img className={styles.resultFlags} src={el.flags.svg} alt="flag of country" /><span className={styles.countryName}>{el.name.common}</span></div>
                <a className={styles.toTop} href="#top"><button className={styles.resultBtn} onClick={() => dispatch(itemInfoAC([el]))}>Show more</button></a>
            </div>
        )))
    }

    return (
        <>
        <div className={styles.searcnResultBlock}>
            {state.filteredData.length === 0 && <DataCountries />}
            {state.filteredData.length > 1 && <FilteredCountries />}
         
        </div>
            <div className={styles.pageNumbers}>
                {state.filteredData.length === 0 && state.data.length !== 0 && pageNumbers.map(item => (
                    <div className={styles.pageNumbersItem} key={item} onClick={() => dispatch(setCurrentPageAC(item))}>{item}</div>
                ))}
            </div>  
            <div className={styles.pageNumbers}>
                {state.filteredData.length > 1 && filteredPageNumbers.map(item => (
                    <div className={styles.pageNumbersItem} key={item} onClick={() => dispatch(setFilteredCurrentPageAC(item))}>{item}</div>
                ))}
            </div>
        </>
    )

}