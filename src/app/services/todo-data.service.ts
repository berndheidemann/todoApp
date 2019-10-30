import {Injectable} from '@angular/core';
import {Todo} from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todos: Todo[] = [];

  constructor() {
    this.todos.push(new Todo('Rasen mähen'));
    this.todos.push(new Todo('Bier trinken'));
    this.todos.push(new Todo('Bier kaufen'));
  }

  toggle(todo: Todo) {
    todo.done = !todo.done;
  }

  del(todo: Todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }

  save(todo: Todo) {
    this.todos.push(todo);
  }
}
