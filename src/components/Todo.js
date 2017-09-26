import React, {Component} from 'react';

class Todo extends Component{
  render{
    var {todo, handleToggle} = this.props;
  }

  return(
    <div className="Todo">
      <input type="checkbox" checked={todo.done} onChange={handleToggle(todo.id)} />
      <span className={todo.done ? "todo-done" : "todo-not-done"}>{todo.text}</span>
    </div>
  )
}

export default Todo;
