import { combineReducers } from 'redux';

import { FETCH_STREAMS } from '../actions';

function twitchStreams(state = {}, action) {
	switch (action.type) {
		case FETCH_STREAMS:
			return action.payload;
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	twitchStreams
});

export default rootReducer;
