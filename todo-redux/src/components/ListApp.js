import { connect } from 'react-redux';
import { addTodo, removeTodo, changeFilter, completeTodo } from '../actions';
import List from './List';

const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items,
    filter: state.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAdd: (text) => dispatch(addTodo(text)),
    onRemove: (index) => dispatch(removeTodo(index)),
    onComplete: (index) => dispatch(completeTodo(index)),
    changeFilter: (filter) => dispatch(changeFilter(filter))
  };
};

const ListApp = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListApp;

