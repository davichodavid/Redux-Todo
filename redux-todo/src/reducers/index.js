import { ADD_TODO } from '../actions'

const initialState = [
  {
    value: 'Walk the dog',
    completed: false
  },
  {
    value: 'Fed the cat',
    completed: false
  },
  {
    value: 'Got a job',
    completed: false
  }
]

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,

      }
    default:
      return state;
  }
};