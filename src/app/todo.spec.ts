import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept Todo value', () => {
    let todo = new Todo({
      title: 'Make a todo list today.',
      complete: true
    });
    expect(todo.title).toEqual('Make a todo list today.');
    expect(todo.complete).toEqual(true);
  })
});
