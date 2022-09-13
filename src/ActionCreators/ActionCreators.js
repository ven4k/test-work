import { SET_ITEM, REMOVE_ITEM, CHOOSED_ITEM, SET_FILTERED_DATA, SET_DATA, REMOVE_CHOOSED_ITEM } from '../BoilerPlates/BoilerPlates';

export const setItemAC = (payload) => ({ type: SET_ITEM, payload });
export const removeItemAC = payload => ({ type: REMOVE_ITEM, payload });
export const itemInfoAC = (payload) => ({ type: CHOOSED_ITEM, payload });
export const setFilteredDataAC = payload => ({ type: SET_FILTERED_DATA, payload });
export const setDataAC = payload => ({ type: SET_DATA, payload });
export const removeChoosedItemAC = () => ({type: REMOVE_CHOOSED_ITEM});

