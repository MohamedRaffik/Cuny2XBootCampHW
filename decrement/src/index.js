import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';

class Decrement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			num: this.props.startnum
		};
  }

	DecrementNumber() {
		if (this.state.num === 0) { 
			alert('Cannot be less than zero');
			return; 
		}
		this.setState({
			num: this.state.num - 1
		})
	}
	
	render() {
		return (
			<div className="decrement">
				<p>{this.state.num}</p>
				<button onClick={() => this.DecrementNumber()}>Decrement</button>
			</div>
		);
	}
}

Decrement.propTypes = {
	startnum: PropTypes.number.isRequired
}

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<Decrement startnum={10}/>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector("#root")
);