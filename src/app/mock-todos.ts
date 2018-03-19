import { Todo } from './todo';

export let todos: Todo[] = [];
export const done: Todo[] = [];

export function updateTodo(newTodos: Todo[]): void{
    console.log(newTodos);
    todos = newTodos;
}