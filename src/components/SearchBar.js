import React from 'react';

class SearchBar extends React.Component {
	state = { term: "" }

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.term)
	}

	render() {
		return (
			<div className="ui segment searchbar">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label><h4>Image Search</h4></label>
						<input type="text"
							onChange={e => this.setState({ term: e.target.value })}
							value={this.state.term}
							/>
					</div>
				</form>
			</div>
		)
	}
};

export default SearchBar;
