import { useContext } from "react";
import { Context } from "../Context/Context";
import { itemInfoAC } from "../ActionCreators/ActionCreators";
import styles from './SearchResult.module.scss';

export const SearchResult = () => {
    const [state, dispatch] = useContext(Context);
    return (
        <div className={styles.searcnResultBlock}>
            {state.filteredData.length > 1 && state.filteredData.map(el => (
                <div key={el.cca3} className={styles.countryBlock}>
                    <div className={styles.li}><img className={styles.resultFlags} src={el.flags.svg} alt="flag of country" /><span className={styles.countryName}>{el.name.common}</span></div>
                    <a className={styles.toTop} href="#top"><button className={styles.resultBtn} onClick={() => dispatch(itemInfoAC([el]))}>Show more</button></a>
                </div>
            ))}
        </div>

    )

}
