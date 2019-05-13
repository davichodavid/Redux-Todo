import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo } from '../actions';

class TodoList extends React.Component {
  state = {
    task: ''
  }

  render() {
    return;
  }

}

const mapStateToProps = state => {
  return {
    value: state.value,
    completed: state.completed
  }
}

export default connect(mapStateToProps, addNewTodo)(TodoList);