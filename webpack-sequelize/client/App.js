import React, { Component} from 'react';
import axios from 'axios';

class App extends Component {
  
  GetCampuses = () => {
    axios.get('/api/campus')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  }

  GetStudents = () => {
    axios.get('/api/student')
    .then(res => console.log(res.data))
    .catch(err => console.error(err));
  }
  
  render() {
    return (
      <div>
        <h1>Campuses Network</h1>
        <button onClick={this.GetCampuses}>Campuses</button>
        <button onClick={this.GetStudents}>Students</button>
      </div>
    );
  }
}

export default App;