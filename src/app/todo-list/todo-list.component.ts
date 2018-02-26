import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  //input decorator allows us to inject todos from parent component
  @Input()
  todos: Todo[];
  //properties are EventEmitter instances and emitted values are Todo instances
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }}
