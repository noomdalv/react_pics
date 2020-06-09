import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit(term) {
		axios.get("https://api.unsplash.com/search/photos", {
			params: {	query: term	},
			headers: {
				Authorization: "Client-ID kVhg076qkBQTm2-mfVW5eCDEDqjBsyZLNfKZpqMLZtI"
			}
		})
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: 10 }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		)
	}
}

export default App;
