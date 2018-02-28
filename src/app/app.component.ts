import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];

  constructor(
    private todoDataService: TodoDataService
  ) { }

  public ngOnInit() {
    this.todoDataService
      .getAllTodos()
      .subscribe(
        (todos) => {
          this.todos = todos;
        }
      );
  }

  onAddTodo(todo: Todo){
    this.todoDataService
      .addTodo(todo)
      .subscribe(newTodo => {
        this.todos = this.todos.concat(newTodo);
        }
      );
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService
      .deleteTodoById(todo.id)
      .subscribe((_) => {
          this.todos = this.todos.filter((t) => t.id !== todo.id);
        }
      );
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService
      .toggleTodoComplete(todo)
      .subscribe(updatedTodo => {
        todo = updatedTodo;
        }
      );
  }

}
