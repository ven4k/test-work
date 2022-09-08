import { useContext } from "react";
import { Context } from "../Context/Context";


const SET_ITEM = 'SET_ITEM';


export const SearchResult = (props) => {
    const { filterData } = props;
    const [state, dispatch] = useContext(Context);
    return (
        <div>
            {filterData.length > 1 && filterData.map(el => (
                <div key={el.name.common}>
                <ul>
                    <li> {el.name.common}</li>
                </ul>
                <button>Show more</button>
                </div>
            ))}
        </div>
    )
}