import React from 'react';

const EachTodo = (props) => {
  return (
    <div>
      <h1 onClick={() => props.completeTodo(props.eachTodo.id)} className={`${props.eachTodo.completed}`}>{props.eachTodo.value}</h1>
    </div>
  )
}

export default EachTodo;