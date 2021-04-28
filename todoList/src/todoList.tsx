import React from 'react';
import { TodoListItem } from './todolistitem';
import { Todo, ToggleTodo } from './types';

interface TodoListProps {
 todos: Array<Todo>;
 toggleTodo: ToggleTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
 return <ul>{todos.map(todo => {
  return <TodoListItem todo={todo} toggleTodo={toggleTodo} />
 })}</ul>
}
