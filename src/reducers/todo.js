import update from 'immutability-helper';

const initialState = {
  todos: [],
  filter: 'all'
}

const todoList = function(state=initialState, action){
  switch (action.type){
    case "ADD_TODO":
      return update(state, {
        todos: {
          $push: [
            {
              text: action.payload,
              id: action.id,
              complete: false
            }
          ]
        }
      })
  case "TOGGLE_TODO":
    var index = state.todos.findIndex((todo) => todo.id === action.payload);
    return update(state, {
      todos: {
        [index]: {
          done: {
            $apply: (done) => !done
          }
        }
      }
    })
  case "FILTER_TODOS":
    return update(state, {
      filter: {
        $set: action.payload
      }
    })
  default:
    return state;
  }
}

export default reducer;
