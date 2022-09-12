import { SET_ITEM, REMOVE_ITEM, CHOOSED_ITEM, SET_FILTERED_DATA, SET_DATA } from '../BoilerPlates/BoilerPlates';

export const setItemAC = (payload) => ({ type: SET_ITEM, payload });
export const removeItemAC = payload => ({ type: REMOVE_ITEM, payload });
export const itemInfoAC = (payload) => ({ type: CHOOSED_ITEM, payload });
export const setFilteredDataAC = payload => ({ type: SET_FILTERED_DATA, payload });
export const removeFavoriteItemAC = (payload) => ({ type: REMOVE_ITEM, payload });
export const setDataAC = payload => ({ type: SET_DATA, payload })

