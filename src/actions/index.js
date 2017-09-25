let nextTodoId = 0
export function createTodo(todo){
  return{
    type: "ADD_TODO",
    payload: todo,
    id: nextTodoId++
  }
}

export function toggleTodo(id){
  return{
    type: TOGGLE_TODO,
    payload: id
  }
}

export function filterTodos(filterType){
  return{
    type:
  }
}
