import { Fragment, useContext } from "react";
import { Context } from "../Context/Context";
import { removeItemAC } from "../ActionCreators/ActionCreators";
import styles from './Favorites.module.scss';



export const Favorites = () => {
    const [state, dispatch] = useContext(Context);
    console.log(state.favorites)
    return (
        <aside>
            <h2>Favorites</h2>
            <ol>
                {state.favorites.length > 0 && state.favorites.map(el => (
                    <Fragment key={el.name.common}>
                        <li className={styles.li}><img className={styles.favoritesCountryFlag} src={el.flags.svg} alt="flag of country" />{el.name.common}</li>
                        <button className={styles.favoritesBtn}  onClick={() => dispatch(removeItemAC(el))}>Remove From Favorites</button>
                    </Fragment>
                ))}
            </ol>
        </aside>
    )
}