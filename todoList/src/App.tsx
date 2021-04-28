import React, { useState } from 'react';
import { AddTodoForm } from './addTodo';
import { TodoList } from './todolist';
import { Todo, AddTodo, ToggleTodo } from './types';


const initial: Array<Todo> = [{ text: 'walk', complete: true },
{ text: 'write', complete: false }];

function App() {

  const [todos, setTodos] = useState(initial)

  const toggleTodo: ToggleTodo = (select) => {
    const newTodos = todos.map(todo => {
      if (todo === select) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
    </>
  );
}

export default App;
