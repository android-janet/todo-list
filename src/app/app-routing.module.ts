import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodosResolver } from './todos.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'todos',
    component: TodosComponent,
    resolve: {
      todos: TodosResolver
    }
  }
];

@NgModule({
  //Angular instantiates router service with this prop that includes router directives, route configuration, router service
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [TodosResolver]
})

export class AppRoutingModule { }
