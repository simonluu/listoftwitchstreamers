import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';

class StreamList extends Component {
	constructor(props) {
		super(props);
	}

	renderStreamList() {
		if (this.props.twitchStreams.twitchStreams.data) {
			return this.props.twitchStreams.twitchStreams.data.streams.map((stream) => {
				return (
					<div style={{ marginBottom: '5px' }}>
						<Image src={stream.preview.small} height="45px" width="80px" />
						<span className='stream_item'>
							<a target="_blank" href={stream.channel.url}>{stream.channel.status}</a>
							<p>Streamer: {stream.channel.display_name}, Game: {stream.game}</p>
							<p>Viewers: {stream.viewers}</p>
						</span>
					</div>
				);
			});
		}
	}

	render() {
		return (
			<div style={{ height: '70vh', overflow: 'auto' }}>
				{this.renderStreamList()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { twitchStreams: state }
}

export default connect(mapStateToProps)(StreamList);