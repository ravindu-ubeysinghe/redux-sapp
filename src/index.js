import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import RootReducer from './reducers/RootReducer';
import * as serviceWorker from './serviceWorker';

// TODO: Get the API response into the store

const store = createStore(RootReducer);

ReactDOM.render(
    // <Provider store={store}>
    //     <App />
    // </Provider>,
    <App />,
    document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
