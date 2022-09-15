import { SET_ITEM, REMOVE_ITEM, CHOOSED_ITEM, SET_FILTERED_DATA, SET_DATA, REMOVE_CHOOSED_ITEM, SET_CURRENT_PAGE, SET_CURRENT_FILTERED_PAGE, SET_FILTERED_COUNTRIES } from '../BoilerPlates/BoilerPlates';

export const setItemAC = (payload) => ({ type: SET_ITEM, payload });
export const removeItemAC = payload => ({ type: REMOVE_ITEM, payload });
export const itemInfoAC = (payload) => ({ type: CHOOSED_ITEM, payload });
export const setFilteredDataAC = (payload) => ({ type: SET_FILTERED_DATA, payload });
export const setDataAC = (payload) => ({ type: SET_DATA, payload });
export const removeChoosedItemAC = () => ({type: REMOVE_CHOOSED_ITEM});
export const setCurrentPageAC = (payload) => ({type: SET_CURRENT_PAGE, payload});
export const setFilteredCurrentPageAC = (payload) => ({type: SET_CURRENT_FILTERED_PAGE, payload});
export const setFilteredCountriesAC = (payload) => ({type: SET_FILTERED_COUNTRIES, payload});

