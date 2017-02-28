import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import { fetchFeaturedStreams, fetchStreams, passFilteredViewers } from '../actions';

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

		this.props.passFilteredViewers(document.querySelector(".select-viewers").value);

		if (!this.state.term) {
			this.props.fetchFeaturedStreams();
		} else {
			this.props.fetchStreams(encodeURIComponent(this.state.term));
			this.setState({ term: '' });
		}
	}

	render() {
		return (
			<div>
				<h1 className="title"><a href="http://simonluu.com">List of Twitch Streamers</a></h1>
				<form onSubmit={this.handleSubmit} className='input-group' style={{ float: 'right', width: '39%', marginTop: '25px' }}>
					<select className="select-viewers">
						<option value="" selected="selected">Filter Viewers</option>
						<option value="0 500">0-500 Viewers</option>
						<option value="500 1000">500-1000 Viewers</option>
						<option value="1000 2000">1000-2000 Viewers</option>
						<option value="2000 5000">2000-5000 Viewers</option>
						<option value="5001">5001+ Viewers</option>
					</select>
					<input
						style={{ width: '50%' }}
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

export default connect(null, { fetchFeaturedStreams, fetchStreams, passFilteredViewers })(Navigation);