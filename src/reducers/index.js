import { combineReducers } from 'redux';

import { FETCH_STREAMS, PASS_VIEWERS } from '../actions';

function twitchStreams(state = {}, action) {
	switch (action.type) {
		case FETCH_STREAMS:
			return action.payload;
		default:
			return state;
	}
}

function viewers(state = "", action) {
	switch (action.type) {
		case PASS_VIEWERS:
			return action.payload;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	twitchStreams,
	viewers
});

export default rootReducer;
