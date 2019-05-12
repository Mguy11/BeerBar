import React, { Component } from 'react';
import ImageOverview from './ImageOverview';


export default class Album extends Component {
	constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {
        var APP_ID = 'a34c5271b162c2880ca5a08d4fc8e6a1e6eab6a17f08aeb12b1326472367aa8b';

		fetch('https://api.unsplash.com/search/photos?query=beer&client_id=' + APP_ID )
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