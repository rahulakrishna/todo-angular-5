import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

import { todos } from '../mock-todos';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  constructor(private todoService: TodoService) { }

  id: number;

  todo: Todo = {
    id: this.id,
    name:''
  };

  todos: Todo[] = todos;

  addTodo(e): void{
    e.preventDefault()

    // todos.push({
    //   id:this.id,
    //   name:this.todo.name
    // });

    this.todoService.addTodo({
      id:this.id,
      name:this.todo.name
    })

    this.id = this.id + 1;
    this.todo.name = '';
  }

  ngOnInit() { 
    this.id = todos.length + 1;
  }

}
