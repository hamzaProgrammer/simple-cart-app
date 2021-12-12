import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {
    cartReducer
} from './reducers/cartReducers'
import {
    getProductReducer,
    getProductDetailsReducer
} from './reducers/productReducers'

const allReducers = combineReducers({
    cart: cartReducer,
    getProducts: getProductReducer,
    getProductsDetails: getProductDetailsReducer
})

const middleware = [thunk];

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;