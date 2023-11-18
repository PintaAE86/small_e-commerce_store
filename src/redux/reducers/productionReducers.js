import { ActionTypes } from "../contants/action-types";

const initialState = {
    products: [{
        id: 1,
        title: "Pinta",
        category: "Engineer"
    }],
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            //some change or code block executed
            break;
        case ActionTypes.SELECTED_PRODUCT:
            //
            break;
        default:
            return state;
    }
}