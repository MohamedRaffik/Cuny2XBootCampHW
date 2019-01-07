import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ContactCard extends React.Component {
	render() {
		return (
			<table className="card">
				<tr>
					<th>Name</th>
					<td>{this.props.name}</td>
				</tr>
				<tr>
					<th>Mobile Number</th>
					<td>{this.props.mobile}</td>
				</tr>
				<tr>
					<th>Work Number</th>
					<td>{this.props.work ? this.props.work : ""}</td>
				</tr>
				<tr>
					<th>Email</th>
					<td>{this.props.email}</td>
				</tr>
			</table>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<h1 className="title">Contacts</h1>
				<div className="cardDisplay">
					<ContactCard name="Mo" mobile="917-xxx-xxxx" email="randomemail@gmail.com" />
					<ContactCard name="John" mobile="718-xxx-xxxx" work="212-xxx-xxxx" email="johnsemail@gmail.com" />
					<ContactCard name="Mark" mobile="917-xxx-xxxx" work="212-xxx-xxxx"email="marksemail@gmail.com" />
					<ContactCard name="Peter" mobile="347-xxx-xxxx" email="petersemail@gmail.com" />
				</div>
			</div>
		);
	}
}

ReactDOM.render(
	<App />,
	document.querySelector("#root")
);