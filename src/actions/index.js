import axios from 'axios';

export const FETCH_STREAMS = 'FETCH_STREAMS';

//3umzyhx6l86z21ctxe44tw9o4i4cyg
export function fetchFeaturedStreams() {
	const request = axios.get(`https://api.twitch.tv/kraken/streams/?limit=100&client_id=3umzyhx6l86z21ctxe44tw9o4i4cyg`);

	return {
		type: FETCH_STREAMS,
		payload: request
	}
}

export function fetchStreams(game) {
	const request = axios.get(`https://api.twitch.tv/kraken/streams/?limit=100&game=${game}&client_id=3umzyhx6l86z21ctxe44tw9o4i4cyg`);

	return {
		type: FETCH_STREAMS,
		payload: request
	}
}