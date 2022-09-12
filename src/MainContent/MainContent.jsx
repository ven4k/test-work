import {CountryInform} from '../CountryInform/CountryInform';
import {SearchResult} from '../SearchResult/SearchResult';
import './MainContent.scss';

export const MainContent = (props) => {
    return (
        <main>
            <CountryInform />
            <SearchResult />
        </main>
    )
}