import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            //some change or code block executed
            return {...state, products:payload};
        case ActionTypes.SELECTED_PRODUCT:
            //
            break;
        default:
            return state;
    }
}

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
            break;
        
        default:
            break;
    }
}