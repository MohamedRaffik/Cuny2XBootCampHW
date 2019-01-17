import React from 'react';
import './FormEdit.css';

class FolderContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFiles: false,
    };
    this.ShowFiles = this.ShowFiles.bind(this);
  }

  ShowFiles() {
    this.setState({
      showFiles: !this.state.showFiles
    });
  }

  render() {
    return (
      <div>
        <div className="flex-row">
          <h2>Home</h2>
          <button onClick={() => this.ShowFiles()}>Display Files</button>
        </div>
        {this.state.showFiles ?
          <ul>
            <li>File1</li>
            <li>File2</li>
            <li>File3</li>
          </ul>
          :
          null
        }
      </div>
    );
  }
}

export default FolderContents;