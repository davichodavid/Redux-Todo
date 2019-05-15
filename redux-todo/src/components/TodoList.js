import React from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleCompleteTask } from '../actions';
import EachTodo from './EachTodo';

class TodoList extends React.Component {
  state = {
    value: '',
    completed: false,
  }

  handleChanges = (event) => {
    this.setState({ value: event.target.value })
  }

  addNewTodoText = (event) => {
    event.preventDefault();
    this.props.addNewTodo(this.state);
    console.log(this.props.todos);
  }

  completeTodo = () => {
    this.props.toggleCompleteTask()
  }

  render() {
    return (
      <div>
        {this.props.todos.map(eachTodo => {
          return <EachTodo eachTodo={eachTodo} key={eachTodo.id} completeTodo={this.completeTodo} />
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

export default connect(mapStateToProps, { addNewTodo, toggleCompleteTask })(TodoList);