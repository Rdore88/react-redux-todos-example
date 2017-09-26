import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterTodos} from '../actions/index';

class FilterTodos extends Component{

  render(){
    return(
      <div className="FilterTodos">
        <label>
          <input type="radio" name="showTodos" value="all" checked={this.props.filter === "all"} onChange={event => this.props.filterTodos("all")} /> Show all
        </label>
        <label>
          <input type="radio" name="showTodos" value="uncompleted" checked={this.props.filter === "uncompleted"} onChange={event => this.props.filterTodos("uncompleted")} /> Show uncompleted
        </label>
        <label>
          <input type="radio" name="showTodos" value="completed" checked={this.props.filter === "completed"} onChange={event => this.props.filterTodos("completed")} /> Show completed
        </label>
      </div>
    )
  }
}

const mapStateToProps = function(state){
  console.log(state);
  return{filter: state.filter}
}

const mapDispatchToProps = function(dispatch){
  return{
    filterTodos: function(filter){
      console.log("filter", filter);
      dispatch(filterTodos(filter));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterTodos)
