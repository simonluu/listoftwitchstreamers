import React, { Component } from 'react';
import { FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Navigation from './navigation';
import StreamList from './stream_list';
import { fetchFeaturedStreams } from '../actions';

class Container extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchFeaturedStreams();
	}

	render() {
		return (
			<div className="container">
				<Navigation />
				<StreamList />
			</div>
		);
	}
}

export default connect(null, { fetchFeaturedStreams })(Container);