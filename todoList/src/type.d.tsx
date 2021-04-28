import { AddTodoForm } from "./addTodo";

type Todo = {
 text: string;
 complete: boolean;

};

type ToggleTodo = (select: Todo) => void;

type AddTodo = (newTodo: string) => void;
