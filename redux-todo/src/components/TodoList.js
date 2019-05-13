import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo } from '../actions';
import EachTodo from './EachTodo';

class TodoList extends React.Component {
  state = {
    value: '',
    completed: false
  }

  handleChanges = (event) => {
    this.setState({ value: event.target.value })
  }

  addNewTodoText = (event) => {
    event.preventDefault();
    this.props.addNewTodo(this.state);
    console.log(this.props.todos);
  }

  render() {
    return (
      <div>
        {this.props.todos.map((eachTodo, index) => {
          return <EachTodo eachTodo={eachTodo} key={index} />
        })}
        <input
          type='text'
          placeholder="What are you doing today?"
          onChange={this.handleChanges}
          value={this.state.newTodoText}
        />
        <button onClick={this.addNewTodoText}>Add</button>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addNewTodo })(TodoList);