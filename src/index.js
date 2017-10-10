import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/app'
import RootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const storeWithMiddleware = createStore(RootReducer, composeEnhancers(applyMiddleware(ReduxPromise)));

ReactDOM.render(
  <Provider store={storeWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
