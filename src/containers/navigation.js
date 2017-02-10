import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { fetchStreams } from '../actions';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };
		this.handleSubmit = this.handleSubmit.bind(this);
		this.inputChange = this.inputChange.bind(this);
	}

	inputChange(e) {
		this.setState({ term: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		this.props.fetchStreams(encodeURIComponent(this.state.term))
		this.setState({ term: '' });
	}

	render() {
		return (
			<div>
				<h1><a href="http://simonluu.com">List of Twitch Streamers</a></h1>
				<form onSubmit={this.handleSubmit} className='input-group' style={{ float: 'right', width: '45%', marginTop: '25px' }}>
					<input
						style={{ width: '82%' }}
						placeholder="Search for a Game"
						className="form-control input-class"
						value={this.state.term}
						onChange={this.inputChange} />
					<span>
						<Button className='btn btn-secondary' type="submit">Submit</Button>
					</span>
				</form>
			</div>
		);
	}
}

export default connect(null, { fetchStreams })(Navigation);