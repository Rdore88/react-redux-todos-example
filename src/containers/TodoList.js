import React, {Component} from 'react';
import {connect} from 'react-redux';

import {toggleTodo} from '../actions/index';
import Todo from '../components/Todo';

class TodoList extends Component {
  handleToggle = (id) => {
    this.props.toggleTodo(id)
  }

  render(){
    var todos = this.props.todos;
    return (
      <div className="TodoList">
        {todos.map(todo => (<Todo handleToggle={this.handleToggle} todo={todo} />))}
      </div>
    )
  }
}

const mapStateToProps = function(state){
  let todos;
  if (state.filter === 'uncompleted') {
    todos = state.todos.filter(todo => !todo.complete);
  } else if (state.filter === 'completed') {
    todos = state.todos.filter(todo => todo.complete);
  } else {
    todos = state.todos
  }

  return {todos: todos}
}

const mapDispatchToProps = function(dispatch){
  return {
    toggleTodo: function(id) {
      dispatch(toggleTodo(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
