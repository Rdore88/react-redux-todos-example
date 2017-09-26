import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createTodo} from '../actions/index';

class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  updateTodo = (event) => {
    this.setState({text: event.target.value});
  }

  createTodo = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state.text);
    this.setState({text: ''})
  }

  render(){
    return(
      <div className="CreateTodo">
        <form onSubmit={this.updateTodo}>
          <input type="text" placeholder="Create a new todo" value={this.state.todo} onChange={this.updateTodo} />
          <button type="submit" value="Submit">Create Todo</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = function(dispatch){
  return{
    createTodo: function(todo){
      return dispatch(createTodo(todo))
    }
  }
}

export default connect(mapDispatchToProps)(CreateTodo)
