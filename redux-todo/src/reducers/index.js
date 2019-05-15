import { ADD_TODO, TOGGLE_COMPLETE } from '../actions'

const initialState = {
  todos: [
    {
      value: 'Walk the dog',
      completed: false,
      id: 12344554
    },
    {
      value: 'Feed the cat',
      completed: false,
      id: 13343454
    },
    {
      value: 'Get a job',
      completed: false,
      id: 234343234
    }
  ]
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: [...state.todos.map(jobTodo => {
          if (jobTodo.id === action.payload) {
            return {
              ...jobTodo,
              completed: !jobTodo.completed
            }
          }
          return jobTodo;
        })]
      }
    default:
      return state;
  }
};

