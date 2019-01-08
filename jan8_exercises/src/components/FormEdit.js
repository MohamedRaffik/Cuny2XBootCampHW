import React from 'react';
import './FormEdit.css';

class FormEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "John",
      last: "Doe",
      edit: false,
    }
    this.ChangeNames = this.ChangeNames.bind(this);
  }

  ChangeNames() {
    this.setState({
      first: document.getElementById("first").value,
      last: document.getElementById("last").value,
      edit: false
    });
  }

  render() {
    return (
      <div>
        {!this.state.edit ? 
          <div className="names">
            <div>First Name: {this.state.first}</div>
            <div>Last Name:  {this.state.last}</div>
            <button onClick={() => this.setState({edit: true})}>Edit</button>
          </div> 
          :
          <form className="flex-col">
            <div className="flex-col">
              <div className="flex-row">
                <label>First Name: </label>
                <input type="text" id="first" defaultValue={this.state.first} />
              </div>
              <div className="flex-row">
                <label>Last Name: </label>
                <input type="text" id="last" defaultValue={this.state.last} />
              </div>
            </div>
            <div className="flex-row buttons">
              <button onClick={() => this.ChangeNames()} type="button">Save</button>
              <button onClick={() => this.setState({edit: false})} type="button">Cancel</button>
            </div>
          </form>
        }
      </div>
    );
  }
}

export default FormEdit;