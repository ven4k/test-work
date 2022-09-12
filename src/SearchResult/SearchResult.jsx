import { Fragment, useContext } from "react";
import { Context } from "../Context/Context";
import { itemInfoAC } from "../ActionCreators/ActionCreators";
import styles from './SearchResult.module.scss';

export const SearchResult = () => {
    const [state, dispatch] = useContext(Context);

    return (
        <div className={styles.searcnResultBlock}>
            <ul className={styles.ul}>
            {state.filteredData.length > 1 && state.filteredData.map(el => (
                        <Fragment key={el.cca3}>
                        <li className={styles.li}>{el.name.common}</li>
                        <button className={styles.resultBtn} onClick={() => dispatch(itemInfoAC([el]))}>Show more</button>
                        </Fragment>
            ))}
            </ul>
            </div>
      
    )

}
