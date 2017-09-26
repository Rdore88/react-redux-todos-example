import React, {Component} from 'react';

class Todo extends Component{
  render(){
    var {todo, handleToggle} = this.props;


  return(
    <div className="Todo">
      <input type="checkbox" checked={todo.complete} onChange={event => handleToggle(todo.id)} />
      <span className={todo.complete ? "todo-done" : "todo-not-done"} onClick={event => handleToggle(todo.id)}>{todo.text}</span>
    </div>
  )
  }
}

export default Todo;
