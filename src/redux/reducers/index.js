import { combineReducers } from 'redux';
import { productReducer } from './productionReducers';

const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers;