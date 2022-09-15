import {CountryInform} from '../CountryInform/CountryInform';
import {SearchResult} from '../SearchResult/SearchResult';
import './MainContent.scss';

export const MainContent = ({ countryPerPage, totalCountries }) => {
    return (
        <main>
            <CountryInform />
            <SearchResult countryPerPage={countryPerPage} totalCountries={totalCountries}/>
        </main>
    )
}