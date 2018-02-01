import { Component } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  title = 'ToDo List';
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  constructor(public todoDataService: TodoDataService) { }

  newTodo: Todo = new Todo();

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

}
