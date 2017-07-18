import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';
import App from './containers/App';
import { createStore, applyMiddleware } from 'redux';
//import allReducers from './reducers';


//let store = createStore(allReducers, applyMiddleware(thunkMiddleware, logger));
ReactDOM.render(<App/>, document.getElementById('app'));