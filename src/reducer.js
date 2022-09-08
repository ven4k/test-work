

const SET_ITEM = 'SET_ITEM';
const CHOOSED_ITEM = 'CHOOSED_ITEM';

export const reducer = (state, action) => {
    switch(action.type) {
        case SET_ITEM: {
            return {...state.favorites = true}
        }
        case CHOOSED_ITEM: {
            return {...state.favorites + action.payload}
        }
        case CHOOSED_ITEM: {
            return {...state.choosedItem + action.payload}
        }
        default: return state
    }
}