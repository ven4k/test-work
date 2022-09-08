import {CountryInform} from '../CountryInform/CountryInform';
import {SearchResult} from '../SearchResult/SearchResult';

export const MainContent = (props) => {
    return (
        <main>
            <CountryInform filterData={props.filterData} />
            <SearchResult filterData={props.filterData}/>
        </main>
    )
}