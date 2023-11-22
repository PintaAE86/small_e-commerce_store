import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productionReducers';

const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
})

export default reducers;