import React from 'react';
import ReactDOM from 'react-dom';
import FormEdit from './components/FormEdit';
import FolderContents from './components/FolderContents';

class App extends React.Component {
  render() {
    return (
      <div className="flex-col">
        <h1>Form Edit</h1>
        <FormEdit />
        <h1>Folder Contents</h1>
        <FolderContents />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);