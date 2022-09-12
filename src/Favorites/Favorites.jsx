import { Fragment, useContext } from "react";
import { Context } from "../Context/Context";
import { removeFavoriteItemAC } from "../ActionCreators/ActionCreators";
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
                        <li className={styles.li}>{el.name.common}</li>
                        <button className={styles.favoritesBtn}  onClick={() => dispatch(removeFavoriteItemAC(el))}>Remove From Favorites</button>
                    </Fragment>
                ))}
            </ol>
        </aside>
    )
}