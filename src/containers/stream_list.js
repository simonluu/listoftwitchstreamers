import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';

class StreamList extends Component {
	constructor(props) {
		super(props);
	}

	renderStreamList() {
		if (this.props.twitchStreams.data) {
			return this.props.twitchStreams.data.streams.map((stream, index) => {
				const lowerViewer = parseInt(this.props.viewers.split(" ")[0]);
				const higherViewer = parseInt(this.props.viewers.split(" ")[1]);
				if (this.props.viewers === "" || lowerViewer === 5001 && stream.viewers >= lowerViewer || stream.viewers >= lowerViewer && stream.viewers <= higherViewer) {
					return (
						<div key={index} style={{ marginBottom: '5px' }}>
							<Image src={stream.preview.small} height="45px" width="80px" />
							<span className='stream-item'>
								<a target="_blank" href={stream.channel.url}>{stream.channel.status}</a>
								<p>Streamer: {stream.channel.display_name}, Game: {stream.game}</p>
								<p>Viewers: {stream.viewers}</p>
							</span>
						</div>
					);
				}
			});
		}
	}

	render() {
		return (
			<div style={{ height: '65vh', overflow: 'auto' }}>
				{this.renderStreamList()}
			</div>
		);
	}
}

StreamList.propTypes = {
	twitchStreams: PropTypes.object,
	viewers: PropTypes.string
}

function mapStateToProps(state) {
	return { twitchStreams: state.twitchStreams, viewers: state.viewers }
}

export default connect(mapStateToProps)(StreamList);