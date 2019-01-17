import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, CHANGE_FILTER, FILTER_TYPES } from '../actions';

const initialState = {
  items: [],
  filter: FILTER_TYPES.NOT_COMPLETED
};

export default (state = initialState, action) => {
  const newState = {...state};
  let array = [...newState.items];
  switch (action.type) {
    case ADD_TODO:
      array.push(action.info);
      newState.items = array;
      return newState;
    case REMOVE_TODO:
      newState.items = newState.items.filter((e, i) => i !== action.index);
      return newState;
    case COMPLETE_TODO:
      array[action.index].isCompleted = !newState.items[action.index].isCompleted;
      newState.items = array;     
      return newState;
    case CHANGE_FILTER:
      newState.filter = action.filter;
      return newState;
    default:
      return state;
  }
}