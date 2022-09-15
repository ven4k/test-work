import {CountryInform} from '../CountryInform/CountryInform';
import {SearchResult} from '../SearchResult/SearchResult';
import './MainContent.scss';

export const MainContent = ({ countryPerPage, totalCountries, filteredCountries }) => {
    return (
        <main>
            <CountryInform />
            <SearchResult countryPerPage={countryPerPage} totalCountries={totalCountries} filteredCountries={filteredCountries}/>
        </main>
    )
}