import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css']
})
export class TodoListHeaderComponent {
  title = 'Carpe Diem!';
  newTodo: Todo = new Todo();

  @Output()
  //The property (add) output is of type EventEmitter
  //Here, we emit a Todo type
  add: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  addTodo() {
    this.add.emit(this.newTodo);
    this.newTodo = new Todo;
  }

}
