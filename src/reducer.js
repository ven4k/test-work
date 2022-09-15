import { SET_ITEM, REMOVE_ITEM, CHOOSED_ITEM, SET_FILTERED_DATA, SET_DATA, REMOVE_CHOOSED_ITEM, SET_CURRENT_PAGE, SET_CURRENT_FILTERED_PAGE, SET_FILTERED_COUNTRIES} from "./BoilerPlates/BoilerPlates";


export const reducer = (state, action) => {
    switch(action.type) {
        case SET_ITEM: {
            return {...state, favorites: [...state.favorites, action.payload]}
        }
        case REMOVE_ITEM: {
            return {...state, favorites: [...state.favorites.filter(el => el !== action.payload)]}
        }
        case CHOOSED_ITEM: {
            return {...state, choosed: action.payload}
        }
        case REMOVE_CHOOSED_ITEM: {
            return {...state, choosed: [...state.choosed.splice(-1)]}
        }
        case SET_FILTERED_DATA: {
            return {...state, filteredData: action.payload}
        }
        case SET_DATA: {
            return {...state, data: action.payload}
        }
        case SET_CURRENT_PAGE: {
            return {...state, dataCurrentPage: action.payload}
        }
        case SET_CURRENT_FILTERED_PAGE: {
            return {...state, filteredDataCurrentPage: action.payload}
        }
        case SET_FILTERED_COUNTRIES: {
            return {...state, filteredCountries: action.payload}
        }
        default: return state
    }
}