import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { todos,done,updateTodo } from './mock-todos';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class TodoService {

  constructor() { }

  addTodo(todo: Todo): void{
    todos.push(todo);
  }

  markAsDone(todo: Todo): Observable<Todo[]>{
    let newArray: Todo[] = [];

    newArray = todos.filter((item)=>{
      return item.id!==todo.id;
    });
    updateTodo(newArray);
    done.push(todo);
    return of(newArray);
  }
}
