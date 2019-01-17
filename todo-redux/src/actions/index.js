export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';
export const FILTER_TYPES = { COMPLETED: 'COMPLETED', NOT_COMPLETED: 'NOT_COMPLETED'};

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    info: {
      text,
      date: Date(),
      isCompleted: false
    }
  }
}

export const removeTodo = (index) => {
  return {
    type: REMOVE_TODO,
    index
  }
}

export const completeTodo = (index) => {
  return {
    type: COMPLETE_TODO,
    index
  }
}

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    filter
  }
}