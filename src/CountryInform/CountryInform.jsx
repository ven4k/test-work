import { useContext } from 'react';
import { Context } from '../Context/Context';

export const CountryInform = (props) => {
    const { filterData } = props;
    const SET_ITEM = 'SET_ITEM';
    const [state, dispatch] = useContext(Context);
  
    const setItemAC = () => ({type: SET_ITEM})

    const handleClick = () => {
        dispatch(setItemAC)
        console.log(state);
    }
    return (
        <div>
            {filterData.length === 1  && filterData.map(el => (
                <div key={el.name.common}>
                    <div>{el.name.common}</div>
                    <div><img src={el.flags.svg} /></div>
                    <div>{el.cca3}</div>
                    <div>{Object.values(el.languages).join(', ')}</div>
                    <div>{el.borders ? el?.borders.join(', ') : "No Data"}</div>
                    <div><button onClick={handleClick}>Add to favorites</button></div>
                </div>
            ))}
        </div>
    )
}