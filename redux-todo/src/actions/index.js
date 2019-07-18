export const ADD_TODO = 'ADD-TODO';
export const addNewTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
};

export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const toggleCompleteTask = (id) => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  }
}