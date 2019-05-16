import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import Async from './middlewares/async';
import routes from './routes';

import App from './components/app';

import './style/index.css';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
, document.getElementById('main-container'));