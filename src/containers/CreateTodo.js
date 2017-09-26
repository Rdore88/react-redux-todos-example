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
    this.setState({todo: event.target.value});
  }

  createTodo = (event) => {
    this.props.createTodo(this.state.todo);
    this.setState({todo: ''})
  }

  render(){
    return(
      <div className="CreateTodo">
          <input type="text" placeholder="Create a new todo" value={this.state.todo} onChange={this.updateTodo} />
          <button type="submit" onClick={this.createTodo}>Create Todo</button>
      </div>
    );
  }
}

const mapStateToProps = function(state){
  return{}
}

const mapDispatchToProps = function(dispatch){
  return{
    createTodo: function(todo){
      return dispatch(createTodo(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
