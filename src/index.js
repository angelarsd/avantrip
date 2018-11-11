import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {loadingBarMiddleware} from 'react-redux-loading-bar';
import api from './middleware/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, api, loadingBarMiddleware({ promiseTypeSuffixes: ['REQUEST', 'SUCCESS', 'FAILURE'] }))
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
