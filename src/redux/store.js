import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import itemsReducer from './reducers/items';
import cartReducer from './reducers/cart';

const rootReducer = combineReducers({
    items: itemsReducer,
    cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;