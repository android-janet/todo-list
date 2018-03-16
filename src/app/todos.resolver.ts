import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Injectable()
export class TodosResolver implements Resolve<Observable<Todo[]>> {
//class that implements the Resolve interface
  constructor(
    private todoDataService: TodoDataService
  ) {
  }

  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Todo[]> {
    return this.todoDataService.getAllTodos();
  }
}
