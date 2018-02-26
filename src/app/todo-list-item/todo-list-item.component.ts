import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent {

  @Input()
  todo: Todo;

  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

  toggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }
}
