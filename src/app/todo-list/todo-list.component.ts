import { Component, OnInit } from '@angular/core';

import { Todo } from '../todo'

import { todos,done } from '../mock-todos'

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];
  done: Todo[];

  constructor(private todoService: TodoService) { }

  markAsDone(selectedTodo: Todo): void {
    console.log(selectedTodo);
    this.todoService.markAsDone(selectedTodo).subscribe((response)=>{
      this.todos = response;
    })
  }

  ngOnInit() {
    this.todos = todos;
    this.done = done;
  }

}
