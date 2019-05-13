import { ADD_TODO } from '../actions'

const initialState = {
  todos: [
    {
      value: 'Walk the dog',
      completed: false
    },
    {
      value: 'Feed the cat',
      completed: false
    },
    {
      value: 'Get a job',
      completed: false
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload

      }
    default:
      return state;
  }
};