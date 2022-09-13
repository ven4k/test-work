import { SET_ITEM, REMOVE_ITEM, CHOOSED_ITEM, SET_FILTERED_DATA, SET_DATA, REMOVE_CHOOSED_ITEM} from "./BoilerPlates/BoilerPlates";


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
        default: return state
    }
}