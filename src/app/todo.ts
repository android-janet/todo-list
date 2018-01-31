export class Todo {
  id: number;
  title: string = '';
  complete: boolean = false;

//constructor holds logic for the vars created for todo item
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
