import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers, { initialState } from './reducers';
import Async from './middlewares/async';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(Async)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(reducers)}>
		<Router history={browserHistory} routes={routes} />
	</Provider>
, document.getElementById('main-container'));