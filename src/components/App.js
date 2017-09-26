import React, { Component } from 'react';
import '../styles/App.css';

import createTodo from '../containers/CreateTodo';
import FilterTodos from '../containers/FilterTodos';
import TodoList from '../containers/TodoList';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from '../reducers/todo';

const store = createStore(todoApp);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <CreateTodo />
          <FilterTodos />
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
