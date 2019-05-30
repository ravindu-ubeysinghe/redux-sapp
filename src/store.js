import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middfleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middfleware)
);

export default store;