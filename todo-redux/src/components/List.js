import React, { Component } from 'react';
import { FILTER_TYPES } from '../actions/index'
import ListItem from './ListItem';

class List extends Component {
  constructor() {
    super();
    this.state = {
      new_item: ''
    }
  }

  AddItem = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.new_item);
    this.setState({new_item: ''});
  }

  ChangeFilter = (e) => {
    this.props.changeFilter(e.target.checked ? FILTER_TYPES.COMPLETED : FILTER_TYPES.NOT_COMPLETED)
  }

  render() {
    const items = this.props.filter === FILTER_TYPES.COMPLETED ? this.props.items.filter(e => e.isCompleted) : this.props.items.filter(e => !e.isCompleted);
    const listitems = items.map((element, index) =>
      <ListItem id={index} key={index} onRemove={() => this.props.onRemove(index)} onComplete={() => this.props.onComplete(index)} info={element} />
    )

    return (
      <div>
        <h1>TODO List</h1>
        <form onSubmit={this.AddItem}>
          <input value={this.state.new_item} onChange={e => this.setState({new_item: e.target.value})} placeholder="New TODO item"/>
          <button>Add</button>
          <input type="checkbox" onClick={this.ChangeFilter} />Show Completed<br></br>
        </form>
        <ul>
          {listitems}
        </ul>
      </div>
    );
  }
}

export default List;