import React, { Component } from 'react';
import ImageOverview from './ImageOverview';
import APP_ID from './cred';


export default class Album extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {

		fetch('https://api.unsplash.com/search/photos?query=beer&client_id=' + APP_ID)
			.then(res => res.json())
			.then(data => {
				this.setState({ imgs: data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

	render() {
		return (
			<div>
				<div className="main-header">
					<div className="inner">
						<h1 className="main-title">ImageSearch</h1>
					</div>
				</div>
				<div className="main-content">
					<ImageOverview data={this.state.imgs} />
				</div>
			</div>
		);
	}
}